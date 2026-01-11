import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditDog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    dog_name: "",
    rescue_org_id: 1,
    image: "",
    chip_number: "",
    passport_number: "",
    gender: "",
    birth_date: "",
    height_cm: "",
    weight_kg: "",
    color: "",
    breed: "",
    unique_features: "",
    illness_description: "",
    energy_level: "",
    additional_notes: "",
    case_manager_name: "",
    case_manager_email: "",
    current_country: "",
    current_location_type: "",
    current_location_description: "",

    has_illnesses: false,
    treatment_costs_covered: false,
    neutered: false,
    vaccinated: false,
    can_climb_stairs: false,
    has_handicap: false,
    is_blind: false,
    is_deaf: false,
    is_house_trained: false,
    is_good_with_kids: false,
    is_good_with_males: false,
    is_good_with_females: false,
    is_good_with_cats: false,
    is_good_with_other_animals: false,
    needs_garden: false,
    needs_experienced_owner: false,
    guarding_instinct: false,
    hunting_instinct: false,
    can_live_in_city: false,
    transport_tolerant: false,

    available_for_adoption: false,
    available_as_foster: false,
    looking_for_sponsorship: false,
  });

  /* ---------- DATEN LADEN ---------- */
  useEffect(() => {
    async function loadDog() {
      try {
        const res = await fetch(`http://localhost:5001/dogs/${id}`);
        if (!res.ok) throw new Error("Hund nicht gefunden");

        const data = await res.json();

        setFormData((prev) => ({
          ...prev,
          ...data, // nur vorhandene Keys überschreiben
        }));
      } catch (err) {
        console.error(err);
        alert("Hund konnte nicht geladen werden");
      } finally {
        setLoading(false);
      }
    }

    loadDog();
  }, [id]);

  /* ---------- HANDLER ---------- */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "number"
          ? value === ""
            ? ""
            : Number(value)
          : value,
    }));
  };

  /* ---------- VALIDIERUNG ---------- */
  const REQUIRED_FIELDS = [
    "dog_name",
    "chip_number",
    "birth_date",
    "height_cm",
    "weight_kg",
    "color",
    "case_manager_name",
    "case_manager_email",
  ];

  const validate = () => {
    const newErrors = {};

    REQUIRED_FIELDS.forEach((field) => {
      if (!formData[field]) newErrors[field] = "Pflichtfeld";
    });

    if (formData.has_illnesses && !formData.illness_description) {
      newErrors.illness_description = "Bitte Krankheiten beschreiben";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ---------- SUBMIT ---------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await fetch(`http://localhost:5001/dogs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Update fehlgeschlagen");

      alert("Änderungen erfolgreich gespeichert");
      navigate("/tsv/meine-hunde");
    } catch (err) {
      console.error(err);
      alert("Fehler beim Speichern");
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Lade Hundedaten…</p>;
  }

  /* ---------- RENDER ---------- */
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow space-y-8"
    >
      <h1>Hund bearbeiten</h1>

      {/* FOTO 
      <section>
        <label className="block font-semibold mb-1">Profilfoto</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
        />
      </section>
        */}

      <h2>Grunddaten</h2>

      {/* ZWEI SPALTEN */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LINKS */}
        <section className="space-y-4">
          <Field
            label="Name"
            name="dog_name"
            value={formData.dog_name}
            error={errors.dog_name}
            onChange={handleChange}
          />
          <Field
            label="Chipnummer"
            name="chip_number"
            value={formData.chip_number}
            error={errors.chip_number}
            onChange={handleChange}
          />
        </section>

        {/* RECHTS */}
        <section className="space-y-4">
          <Field
            label="EU-Heimtierausweis"
            name="passport_number"
            value={formData.passport_number}
            onChange={handleChange}
          />
          <Field
            label="Geburtsdatum"
            name="birth_date"
            type="date"
            value={formData.birth_date}
            error={errors.birth_date}
            onChange={handleChange}
          />
        </section>
      </div>

      <h2>Erkennungsmerkmale</h2>

      {/* ZWEI SPALTEN */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LINKS */}
        <section className="space-y-4">
          <Select
            label="Geschlecht"
            name="gender"
            options={{ Female: "Weiblich", Male: "Männlich" }}
            value={formData.gender}
            onChange={handleChange}
          />
          <Field
            label="Schulterhöhe (cm)"
            name="height_cm"
            type="number"
            value={formData.height_cm ?? ""}
            error={errors.height_cm}
            onChange={handleChange}
          />
          <Field
            label="Gewicht (kg)"
            name="weight_kg"
            type="number"
            value={formData.weight_kg ?? ""}
            error={errors.weight_kg}
            onChange={handleChange}
          />
        </section>
        {/* RECHTS */}
        <section className="space-y-4">
          <Textarea
            label="Farbe"
            name="color"
            value={formData.color}
            error={errors.color}
            onChange={handleChange}
          />
          <Textarea
            label="Rasse"
            name="breed"
            value={formData.breed}
            onChange={handleChange}
          />
          <Textarea
            label="Besondere Merkmale"
            name="unique_features"
            value={formData.unique_features}
            onChange={handleChange}
          />
        </section>
      </div>

      <h2>Angaben zum Charakter</h2>

      {/* ZWEI SPALTEN */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LINKS */}
        <section className="space-y-4">
          <Checkbox
            name="is_house_trained"
            label="Bisher stubenrein?"
            checked={formData.is_house_trained}
            onChange={handleChange}
          />
          <Checkbox
            name="is_good_with_kids"
            label="Verträglich mit Kindern?"
            checked={formData.is_good_with_kids}
            onChange={handleChange}
          />
          <Checkbox
            name="is_good_with_males"
            label="Verträglich mit Rüden?"
            checked={formData.is_good_with_males}
            onChange={handleChange}
          />
          <Checkbox
            name="is_good_with_females"
            label="Verträglich mit Hündinnen?"
            checked={formData.is_good_with_females}
            onChange={handleChange}
          />
          <Checkbox
            name="is_good_with_cats"
            label="Verträglich mit Katzen?"
            checked={formData.is_good_with_cats}
            onChange={handleChange}
          />
          <Checkbox
            name="is_good_with_other_animals"
            label="Verträglich mit anderen Tieren?"
            checked={formData.is_good_with_other_animals}
            onChange={handleChange}
          />
          <Checkbox
            name="needs_garden"
            label="Wird ein Garten benötigt?"
            checked={formData.needs_garden}
            onChange={handleChange}
          />
        </section>
        {/* RECHTS */}
        <section className="space-y-4">
          <Checkbox
            name="needs_experienced_owner"
            label="Nur an hundeerfahrene Personen vermittelbar?"
            checked={formData.needs_experienced_owner}
            onChange={handleChange}
          />
          <Checkbox
            name="guarding_instinct"
            label="Hütetrieb vorhanden?"
            checked={formData.guarding_instinct}
            onChange={handleChange}
          />
          <Checkbox
            name="hunting_instinct"
            label="Jagdtrieb vorhanden?"
            checked={formData.hunting_instinct}
            onChange={handleChange}
          />
          <Checkbox
            name="can_live_in_city"
            label="Stadttauglich?"
            checked={formData.can_live_in_city}
            onChange={handleChange}
          />
          <Checkbox
            name="transport_tolerant"
            label="Verträgt Autofahrten?"
            checked={formData.transport_tolerant}
            onChange={handleChange}
          />
          <Checkbox
            name="can_climb_stairs"
            label="Kann Treppen steigen?"
            checked={formData.can_climb_stairs}
            onChange={handleChange}
          />
          <Select
            label="Energielevel"
            name="energy_level"
            value={formData.energy_level}
            options={{ Low: "Niedrig", Medium: "Mittel", High: "Hoch" }}
            onChange={handleChange}
          />
        </section>
      </div>

      <h2>Medizinische Informationen</h2>
      {/* ZWEI SPALTEN */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LINKS */}
        <section className="space-y-4">
          <Checkbox
            name="neutered"
            label="Kastriert"
            checked={formData.neutered}
            error={errors.neutered}
            onChange={handleChange}
          />
          <Checkbox
            name="vaccinated"
            label="Geimpft"
            checked={formData.vaccinated}
            error={errors.vaccinated}
            onChange={handleChange}
          />
          <Checkbox
            name="has_illnesses"
            label="Bekannte Krankheiten vorhanden?"
            checked={formData.has_illnesses}
            onChange={handleChange}
          />
          {formData.has_illnesses && (
            <>
              <Textarea
                label="Beschreibung der Krankheiten"
                name="illness_description"
                value={formData.illness_description}
                onChange={handleChange}
              />

              <Checkbox
                name="treatment_costs_covered"
                label="Behandlungskosten werden vom Verein getragen"
                checked={formData.treatment_costs_covered}
                onChange={handleChange}
              />
            </>
          )}
        </section>
        {/* RECHTS */}
        <section className="space-y-4">
          <Checkbox
            name="has_handicap"
            label="Bekannte körperliche Einschränkung?"
            checked={formData.has_handicap}
            onChange={handleChange}
          />
          <Checkbox
            name="is_blind"
            label="Ist der Hund blind?"
            checked={formData.is_blind}
            onChange={handleChange}
          />
          <Checkbox
            name="is_deaf"
            label="Ist der Hund taub?"
            checked={formData.is_deaf}
            onChange={handleChange}
          />
        </section>
      </div>

      <h2>Vermittlungsstatus</h2>
      {/* ZWEI SPALTEN */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LINKS */}
        <section className="space-y-4">
          <Checkbox
            name="available_for_adoption"
            label="Aktuell zur Vermittlung freigegeben?"
            checked={formData.available_for_adoption}
            error={errors.available_for_adoption}
            onChange={handleChange}
          />
          <Checkbox
            name="available_as_foster"
            label="Als Pflegehund mit Option zur Adoption verfügbar?"
            checked={formData.available_as_foster}
            onChange={handleChange}
          />
          <Checkbox
            name="looking_for_sponsorship"
            label="Sucht Patenschaft?"
            checked={formData.looking_for_sponsorship}
            onChange={handleChange}
          />
        </section>
        {/* RECHTS */}
        <section className="space-y-4"></section>
      </div>

      <h2>Verein & Aufenthaltsort</h2>
      {/* ZWEI SPALTEN */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LINKS */}
        <section className="space-y-4">
          <Field
            label="Land, in dem sich der Hund aktuell befindet"
            name="current_country"
            value={formData.current_country}
            onChange={handleChange}
          />
          <Select
            label="Art der aktuellen Unterkunft"
            name="current_location_type"
            value={formData.current_location_type}
            options={{
              Tötungsstation: "Tötungsstation",
              Tierheim: "Tierheim",
              "Pflegestelle im Ausland": "Pflegestelle im Ausland",
              "Pflegestelle Deutschland": "Pflegestelle Deutschland",
              Adoptiert: "Adoptiert",
            }}
            onChange={handleChange}
          />

          <Field
            label="Zusätzliche Details zur aktuellen Unterkunft"
            name="current_location_description"
            value={formData.current_location_description}
            onChange={handleChange}
          />
        </section>

        {/* RECHTS */}
        <section className="space-y-4">
          <Select
            label="Tierschutzverein"
            name="rescue_org_id"
            value={formData.rescue_org_id}
            options={{
              1: "Tierhilfe Rumänien e.V.",
              2: "Pfotenfreunde Spanien",
            }}
            onChange={handleChange}
          />

          <Field
            label="Vermittler:in"
            name="case_manager_name"
            value={formData.case_manager_name}
            error={errors.case_manager_name}
            onChange={handleChange}
          />
          <Field
            label="E-Mail Vermittler:in"
            name="case_manager_email"
            value={formData.case_manager_email}
            error={errors.case_manager_email}
            onChange={handleChange}
          />
        </section>
      </div>

      <button className="button-primary">Änderungen speichern</button>
    </form>
  );
}
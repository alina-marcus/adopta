import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

/* ---------- Helper Components ---------- */

const Field = ({ label, name, type = "text", value, onChange, readOnly = false }) => (
  <div className="space-y-1">
    <label className="text-sm font-medium">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      className={`border p-2 rounded w-full ${readOnly ? "bg-gray-100" : ""}`}
    />
  </div>
);

const NumberField = ({ label, name, value, onChange, min = 0 }) => (
  <div className="space-y-1">
    <label className="text-sm font-medium">{label}</label>
    <input
      type="number"
      min={min}
      name={name}
      value={value}
      onChange={onChange}
      className="border p-2 rounded w-full"
    />
  </div>
);

const Textarea = ({ label, name, value, onChange }) => (
  <div className="space-y-1">
    <label className="text-sm font-medium">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      className="border p-2 rounded w-full min-h-[100px]"
    />
  </div>
);

const Checkbox = ({ label, name, checked, onChange }) => (
  <label className="flex items-center gap-2">
    <input type="checkbox" name={name} checked={checked} onChange={onChange} />
    <span>{label}</span>
  </label>
);

const Select = ({ label, name, value, options, onChange }) => (
  <div className="space-y-1">
    <label className="text-sm font-medium">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="border p-2 rounded w-full"
    >
      <option value="">Bitte wählen</option>
      {Object.entries(options).map(([val, lab]) => (
        <option key={val} value={val}>
          {lab}
        </option>
      ))}
    </select>
  </div>
);

function clampInt(v) {
  const n = parseInt(v, 10);
  return Number.isFinite(n) ? Math.max(0, n) : 0;
}

function makePet() {
  return {
    age: "",
    sex: "",
    weight_kg: "",
    castrated: false,
    compatible_with_dogs: "",
  };
}

/* ---------- Main Component ---------- */

export default function AdoptionForm() {
  const navigate = useNavigate();
  const { dogId, id } = useParams();
  const resolvedDogId = dogId ?? id;

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    dog_id: resolvedDogId ? Number(resolvedDogId) : "",

    // STEP 1
    first_name: "",
    last_name: "",
    email_address: "",
    phone_number: "",
    gender: "",
    birth_date: "",
    profession: "",
    working_hours_per_week: "",
    hours_outside_per_day: "",
    monthly_income_euro: "",
    has_partner: false,
    partner_profession: "",
    partner_monthly_income: "",
    partner_working_hours_per_week: "",
    partner_hours_outside_per_day: "",
    has_car: false,
    best_time_for_call: "",

    // STEP 2
    country: "",
    street: "",
    house_number: "",
    zip_code: "",
    city: "",
    location: "",
    traffic_situation: "",
    housing_type: "",
    housing_size_m2: "",
    apartment_floor: "",
    has_elevator: false,
    house_stories: "",
    steep_staircase: false,
    private_garden: false,
    garden_size_m2: "",
    owned_or_rented: "",
    pet_permission_if_rented: "",
    pet_permission_if_owned: "",
    planning_to_move: false,

    // STEP 3
    household_people_count: "",
    children_count: "",
    children_age: "", // JSON-String

    fur_allergy_tested: false,

    // STEP 4 (legacy Felder bleiben!)
    pets_in_household: "",
    pet_type: "",
    pet_sex: "",
    pet_castrated: false,
    pet_age: "",
    pet_weight_kg: "",
    pet_compatibility: "",

    previous_dog_experience: false,
    previous_dog_breed: "",
    previous_dog_years: "",
    previous_dog_outcome: "",
    been_to_dog_trainer: false,
    dog_trainer_name: "",
    adopted_from_shelter: false,
    shelter_experience_description: "",

    // STEP 5
    decided_for_specific_dog: true,
    future_dog_sex: "",
    future_dog_age: "",
    future_dog_max_weight: "",
    future_dog_max_height: "",
    dog_handicap_ok: false,
    dog_compatibility: "",
    potty_trained: false,
    dog_purpose: "",
    future_dog_location: "",
    dog_sleep_location: "",
    dog_restricted_areas: "",

    // STEP 6
    owner_time_per_day_with_dog: "",
    dog_hours_alone_per_day: "",
    food_type: "",
    good_dog_training_description: "",
    potty_training_method: "",
    typical_day_description: "",
    settling_dog_description: "",
    dog_backup_plan: "",
    giving_up_reasons: "",
    dog_alone_problem_solution: "",
    dog_barking_solution: "",
    dog_damage_solution: "",
    annual_vet_costs_euro: "",
    other_costs_euro: "",
    nearest_dog_park: "",
    time_off_after_adoption: "",
    willing_to_drive_km: "",
    additional_info: "",

    // NEW: wird in data gespeichert (Backend speichert ja data=data)
    pet_counts: {
      cats: 0,
      dogs: 0,
      rodents: 0,
      reptiles: 0,
      others: 0,
    },
    cats_in_household: [],
    dogs_in_household: [],
  });

  /* ---------- NEW UI STATE (ohne bestehende Felder zu löschen) ---------- */

  const [childrenAges, setChildrenAges] = useState([]);

  const [petCounts, setPetCounts] = useState({
    cats: 0,
    dogs: 0,
    rodents: 0,
    reptiles: 0,
    others: 0,
  });

  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);

  /* ---------- derived helpers ---------- */

  const housingCategory = useMemo(() => {
    const t = (formData.housing_type || "").toLowerCase();

    const isApartment =
      t === "wohnung" ||
      t === "dachgeschosswohnung" ||
      t === "penthouse" ||
      t === "souterrain / eg";

    const isHouseLike =
      t === "einfamilienhaus" ||
      t === "doppelhaushälfte" ||
      t === "reihenhaus" ||
      t === "bauernhof" ||
      t === "maisonettewohnung" ||
      t === "sonstiges";

    // Maisonette zählt bei dir explizit zu “Haus/Maisonette”
    return { isApartment, isHouseLike };
  }, [formData.housing_type]);

  const petsTotal = useMemo(() => {
    return petCounts.cats + petCounts.dogs + petCounts.rodents + petCounts.reptiles + petCounts.others;
  }, [petCounts]);

  /* ---------- sync children ages -> formData.children_age ---------- */
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      children_age: JSON.stringify(childrenAges),
    }));
  }, [childrenAges]);

  /* ---------- sync pet counts + arrays -> formData ---------- */
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      pet_counts: petCounts,
      cats_in_household: cats,
      dogs_in_household: dogs,
      pets_in_household: String(petsTotal), // bleibt im State, jetzt konsistent
    }));
  }, [petCounts, cats, dogs, petsTotal]);

  /* ---------- adjust cat/dog arrays to counts ---------- */
  useEffect(() => {
    setCats((prev) => {
      const target = petCounts.cats;
      const copy = [...prev];
      while (copy.length < target) copy.push(makePet());
      while (copy.length > target) copy.pop();
      return copy;
    });
  }, [petCounts.cats]);

  useEffect(() => {
    setDogs((prev) => {
      const target = petCounts.dogs;
      const copy = [...prev];
      while (copy.length < target) copy.push(makePet());
      while (copy.length > target) copy.pop();
      return copy;
    });
  }, [petCounts.dogs]);

  /* ---------- generic change handler ---------- */
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 6));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  /* ---------- submit ---------- */
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!resolvedDogId) {
    alert("Fehler: dogId fehlt in der URL. Öffne das Formular über einen Hund (Route mit /.../:dogId).");
    return;
  }

  try {
    const payload = {
      ...formData,
      dog_id: Number(resolvedDogId),
    };

    const res = await fetch("http://localhost:5001/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const json = await res.json().catch(() => null);

    if (!res.ok) {
      console.error("Backend error:", json);
      throw new Error(json?.error || "Submit failed");
    }

    navigate(`/applications/${json.id}`);
  } catch (err) {
    console.error("Submit fehlgeschlagen:", err);
    alert(err.message || "Bewerbung konnte nicht abgeschickt werden.");
  }
};


  /* ---------- dynamic children/pets helpers ---------- */

  const handleChildrenCountChange = (e) => {
    const c = clampInt(e.target.value);
    setFormData((prev) => ({ ...prev, children_count: String(c) }));

    setChildrenAges((prev) => {
      const copy = [...prev];
      while (copy.length < c) copy.push("");
      while (copy.length > c) copy.pop();
      return copy;
    });
  };

  const setChildAge = (idx, val) => {
    setChildrenAges((prev) => {
      const copy = [...prev];
      copy[idx] = val;
      return copy;
    });
  };

  const setPetCount = (key, val) => {
    const n = clampInt(val);
    setPetCounts((prev) => ({ ...prev, [key]: n }));
  };

  const setCatField = (idx, field, val) => {
    setCats((prev) => {
      const copy = [...prev];
      copy[idx] = { ...copy[idx], [field]: val };
      return copy;
    });
  };

  const setDogField = (idx, field, val) => {
    setDogs((prev) => {
      const copy = [...prev];
      copy[idx] = { ...copy[idx], [field]: val };
      return copy;
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
      <h1>Adoptionsformular – Schritt {step} von 6</h1>

      {/* Progress */}
      <div className="w-full bg-gray-200 h-2 rounded-full mb-8">
        <div
          className="bg-black h-2 rounded-full transition-all"
          style={{ width: `${(step / 6) * 100}%` }}
        />
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* STEP 1 */}
        {step === 1 && (
          <section className="space-y-6">
            <h2>Persönliche Daten</h2>
            <Field label="Vorname" name="first_name" value={formData.first_name} onChange={handleChange} />
            <Field label="Nachname" name="last_name" value={formData.last_name} onChange={handleChange} />
            <Field label="E-Mail-Adresse" name="email_address" value={formData.email_address} onChange={handleChange} />
            <Field label="Telefonnummer" name="phone_number" value={formData.phone_number} onChange={handleChange} />

            <Select
              label="Geschlecht"
              name="gender"
              value={formData.gender}
              options={{ female: "Weiblich", male: "Männlich", diverse: "Divers" }}
              onChange={handleChange}
            />

            <Field label="Geburtsdatum" name="birth_date" type="date" value={formData.birth_date} onChange={handleChange} />
            <Field label="Beruf" name="profession" value={formData.profession} onChange={handleChange} />
            <Field label="Arbeitsstunden pro Woche" name="working_hours_per_week" value={formData.working_hours_per_week} onChange={handleChange} />
            <Field label="Stunden außer Haus pro Tag" name="hours_outside_per_day" value={formData.hours_outside_per_day} onChange={handleChange} />
            <Field label="Monatliches Einkommen (€)" name="monthly_income_euro" value={formData.monthly_income_euro} onChange={handleChange} />

            <Checkbox
              label="Ich möchte mit meinem im Haushalt lebenden Partner zusammen den Hund adoptieren"
              name="has_partner"
              checked={formData.has_partner}
              onChange={handleChange}
            />

            {formData.has_partner && (
              <>
                <Field label="Beruf Partner" name="partner_profession" value={formData.partner_profession} onChange={handleChange} />
                <Field label="Einkommen Partner (€)" name="partner_monthly_income" value={formData.partner_monthly_income} onChange={handleChange} />
                <Field label="Arbeitsstunden Partner" name="partner_working_hours_per_week" value={formData.partner_working_hours_per_week} onChange={handleChange} />
                <Field label="Stunden außer Haus Partner" name="partner_hours_outside_per_day" value={formData.partner_hours_outside_per_day} onChange={handleChange} />
              </>
            )}

            <Checkbox label="Ich habe ein Auto" name="has_car" checked={formData.has_car} onChange={handleChange} />
            <Field label="Beste Zeit für Rückruf" name="best_time_for_call" value={formData.best_time_for_call} onChange={handleChange} />
          </section>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <section className="space-y-6">
            <h2>Wohnsituation</h2>

            <Field label="Land" name="country" value={formData.country} onChange={handleChange} />
            <Field label="Stadt" name="city" value={formData.city} onChange={handleChange} />
            <Field label="Straße" name="street" value={formData.street} onChange={handleChange} />
            <Field label="Hausnummer" name="house_number" value={formData.house_number} onChange={handleChange} />
            <Field label="PLZ" name="zip_code" value={formData.zip_code} onChange={handleChange} />
            <Field label="Lage (Stadt / Land)" name="location" value={formData.location} onChange={handleChange} />
            <Field label="Verkehrssituation" name="traffic_situation" value={formData.traffic_situation} onChange={handleChange} />

            <Select
              label="Wohnform"
              name="housing_type"
              value={formData.housing_type}
              options={{
                Einfamilienhaus: "Einfamilienhaus",
                Doppelhaushälfte: "Doppelhaushälfte",
                Reihenhaus: "Reihenhaus",
                Bauernhof: "Bauernhof / Hof",
                Wohnung: "Wohnung",
                Dachgeschosswohnung: "Dachgeschosswohnung",
                Maisonettewohnung: "Maisonettewohnung",
                "Souterrain / EG": "Souterrain / Erdgeschoss",
                Penthouse: "Penthouse",
                Sonstiges: "Sonstiges",
              }}
              onChange={handleChange}
            />

            <Field label="Wohnfläche (m²)" name="housing_size_m2" value={formData.housing_size_m2} onChange={handleChange} />

            {housingCategory.isApartment && (
              <div className="space-y-6 rounded-lg border p-4">
                <p className="text-sm font-medium">Details zur Wohnung</p>
                <Field label="Etage" name="apartment_floor" value={formData.apartment_floor} onChange={handleChange} />
                <Checkbox label="Aufzug vorhanden" name="has_elevator" checked={formData.has_elevator} onChange={handleChange} />
              </div>
            )}

            {housingCategory.isHouseLike && (
              <div className="space-y-6 rounded-lg border p-4">
                <p className="text-sm font-medium">Details zum Haus / Maisonette</p>
                <Field label="Stockwerke im Haus" name="house_stories" value={formData.house_stories} onChange={handleChange} />
                <Checkbox
                  label="Gibt es innerhalb des Hauses eine steile Treppe?"
                  name="steep_staircase"
                  checked={formData.steep_staircase}
                  onChange={handleChange}
                />
              </div>
            )}

            <Checkbox label="Privater Garten" name="private_garden" checked={formData.private_garden} onChange={handleChange} />
            {formData.private_garden && (
              <Field label="Gartengröße (m²)" name="garden_size_m2" value={formData.garden_size_m2} onChange={handleChange} />
            )}

            <Select
              label="Eigentum oder Miete"
              name="owned_or_rented"
              value={formData.owned_or_rented}
              options={{ Miete: "Miete", Eigentum: "Eigentum" }}
              onChange={handleChange}
            />

            {formData.owned_or_rented === "Miete" && (
              <Field
                label="Erlaubnis zur Hundehaltung liegt vor (Miete)"
                name="pet_permission_if_rented"
                value={formData.pet_permission_if_rented}
                onChange={handleChange}
              />
            )}

            {formData.owned_or_rented === "Eigentum" && (
              <Field
                label="Erlaubnis zur Hundehaltung liegt vor (Eigentum)"
                name="pet_permission_if_owned"
                value={formData.pet_permission_if_owned}
                onChange={handleChange}
              />
            )}

            <Checkbox label="Umzug geplant" name="planning_to_move" checked={formData.planning_to_move} onChange={handleChange} />
          </section>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <section className="space-y-6">
            <h2>Haushalt & Kinder</h2>

            <Field label="Personen im Haushalt" name="household_people_count" value={formData.household_people_count} onChange={handleChange} />

            <NumberField
              label="Wie viele Kinder leben im Haushalt?"
              name="children_count"
              value={formData.children_count}
              onChange={handleChildrenCountChange}
              min={0}
            />

            {clampInt(formData.children_count) > 0 && (
              <div className="space-y-4 rounded-lg border p-4">
                <p className="text-sm font-medium">Alter der Kinder</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {childrenAges.map((age, idx) => (
                    <Field
                      key={idx}
                      label={`Alter Kind ${idx + 1}`}
                      name={`children_age_${idx}`}
                      value={age}
                      onChange={(e) => setChildAge(idx, e.target.value)}
                    />
                  ))}
                </div>
              </div>
            )}

            <Checkbox label="Allergietest durchgeführt" name="fur_allergy_tested" checked={formData.fur_allergy_tested} onChange={handleChange} />
          </section>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <section className="space-y-6">
            <h2>Tiererfahrung</h2>

            {/* Anzeige: Gesamtzahl wird aus Counts berechnet */}
            <Field
              label="Wie viele weitere Tiere leben aktuell im Haushalt?"
              name="pets_in_household"
              value={formData.pets_in_household}
              onChange={() => {}}
              readOnly
            />

            <div className="rounded-lg border p-4 space-y-4">
              <p className="text-sm font-medium">Anzahl pro Tierart</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <NumberField label="Katzen" name="cats_count" value={petCounts.cats} onChange={(e) => setPetCount("cats", e.target.value)} />
                <NumberField label="Hunde" name="dogs_count" value={petCounts.dogs} onChange={(e) => setPetCount("dogs", e.target.value)} />
                <NumberField label="Nagetiere" name="rodents_count" value={petCounts.rodents} onChange={(e) => setPetCount("rodents", e.target.value)} />
                <NumberField label="Reptilien" name="reptiles_count" value={petCounts.reptiles} onChange={(e) => setPetCount("reptiles", e.target.value)} />
                <NumberField label="Andere Tiere" name="others_count" value={petCounts.others} onChange={(e) => setPetCount("others", e.target.value)} />
              </div>
            </div>

            {petCounts.cats > 0 && (
              <div className="rounded-lg border p-4 space-y-6">
                <p className="text-sm font-medium">Details zu Katzen</p>
                {cats.map((cat, idx) => (
                  <div key={idx} className="rounded-lg border p-4 space-y-4">
                    <p className="text-sm font-semibold">Katze {idx + 1}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Alter" name={`cat_${idx}_age`} value={cat.age} onChange={(e) => setCatField(idx, "age", e.target.value)} />
                      <Select
                        label="Geschlecht"
                        name={`cat_${idx}_sex`}
                        value={cat.sex}
                        options={{ female: "Weiblich", male: "Männlich", unknown: "Unbekannt" }}
                        onChange={(e) => setCatField(idx, "sex", e.target.value)}
                      />
                      <Field label="Gewicht (kg)" name={`cat_${idx}_weight`} value={cat.weight_kg} onChange={(e) => setCatField(idx, "weight_kg", e.target.value)} />
                      <label className="flex items-center gap-2">
                        <input type="checkbox" checked={cat.castrated} onChange={(e) => setCatField(idx, "castrated", e.target.checked)} />
                        <span>Kastriert</span>
                      </label>
                      <Field
                        label="Verträglich mit Hunden?"
                        name={`cat_${idx}_compatible`}
                        value={cat.compatible_with_dogs}
                        onChange={(e) => setCatField(idx, "compatible_with_dogs", e.target.value)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {petCounts.dogs > 0 && (
              <div className="rounded-lg border p-4 space-y-6">
                <p className="text-sm font-medium">Details zu Hunden</p>
                {dogs.map((dog, idx) => (
                  <div key={idx} className="rounded-lg border p-4 space-y-4">
                    <p className="text-sm font-semibold">Hund {idx + 1}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Alter" name={`dog_${idx}_age`} value={dog.age} onChange={(e) => setDogField(idx, "age", e.target.value)} />
                      <Select
                        label="Geschlecht"
                        name={`dog_${idx}_sex`}
                        value={dog.sex}
                        options={{ female: "Weiblich", male: "Männlich", unknown: "Unbekannt" }}
                        onChange={(e) => setDogField(idx, "sex", e.target.value)}
                      />
                      <Field label="Gewicht (kg)" name={`dog_${idx}_weight`} value={dog.weight_kg} onChange={(e) => setDogField(idx, "weight_kg", e.target.value)} />
                      <label className="flex items-center gap-2">
                        <input type="checkbox" checked={dog.castrated} onChange={(e) => setDogField(idx, "castrated", e.target.checked)} />
                        <span>Kastriert</span>
                      </label>
                      <Field
                        label="Verträglich mit Hunden?"
                        name={`dog_${idx}_compatible`}
                        value={dog.compatible_with_dogs}
                        onChange={(e) => setDogField(idx, "compatible_with_dogs", e.target.value)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Legacy/optional Zusammenfassung bleibt */}
            <div className="rounded-lg border p-4 space-y-4">
              <p className="text-sm font-medium">Zusammenfassung (optional)</p>
              <Field label="Tierart" name="pet_type" value={formData.pet_type} onChange={handleChange} />
              <Field label="Geschlecht" name="pet_sex" value={formData.pet_sex} onChange={handleChange} />
              <Checkbox label="Kastriert" name="pet_castrated" checked={formData.pet_castrated} onChange={handleChange} />
              <Field label="Alter" name="pet_age" value={formData.pet_age} onChange={handleChange} />
              <Field label="Gewicht (kg)" name="pet_weight_kg" value={formData.pet_weight_kg} onChange={handleChange} />
              <Field label="Verträglichkeit" name="pet_compatibility" value={formData.pet_compatibility} onChange={handleChange} />
            </div>

            <Checkbox label="Hundeerfahrung vorhanden" name="previous_dog_experience" checked={formData.previous_dog_experience} onChange={handleChange} />

            {formData.previous_dog_experience && (
              <>
                <Field label="Rasse" name="previous_dog_breed" value={formData.previous_dog_breed} onChange={handleChange} />
                <Field label="Erfahrungsjahre" name="previous_dog_years" value={formData.previous_dog_years} onChange={handleChange} />
                <Field label="Was wurde aus dem Hund?" name="previous_dog_outcome" value={formData.previous_dog_outcome} onChange={handleChange} />
              </>
            )}

            <Checkbox label="Hundeschule besucht" name="been_to_dog_trainer" checked={formData.been_to_dog_trainer} onChange={handleChange} />
            {formData.been_to_dog_trainer && (
              <Field label="Name Trainer / Schule" name="dog_trainer_name" value={formData.dog_trainer_name} onChange={handleChange} />
            )}

            <Checkbox label="Hund aus dem Tierschutz adoptiert" name="adopted_from_shelter" checked={formData.adopted_from_shelter} onChange={handleChange} />
            {formData.adopted_from_shelter && (
              <Textarea label="Erfahrung Tierschutz" name="shelter_experience_description" value={formData.shelter_experience_description} onChange={handleChange} />
            )}
          </section>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <section className="space-y-6">
            <h2>Vorstellungen</h2>
            <Checkbox label="Bestimmter Hund ausgewählt" name="decided_for_specific_dog" checked={formData.decided_for_specific_dog} onChange={handleChange} />
            <Field label="Geschlecht" name="future_dog_sex" value={formData.future_dog_sex} onChange={handleChange} />
            <Field label="Alter" name="future_dog_age" value={formData.future_dog_age} onChange={handleChange} />
            <Field label="Max. Gewicht" name="future_dog_max_weight" value={formData.future_dog_max_weight} onChange={handleChange} />
            <Field label="Max. Größe" name="future_dog_max_height" value={formData.future_dog_max_height} onChange={handleChange} />
            <Checkbox label="Handicap ok" name="dog_handicap_ok" checked={formData.dog_handicap_ok} onChange={handleChange} />
            <Field label="Verträglichkeit" name="dog_compatibility" value={formData.dog_compatibility} onChange={handleChange} />
            <Checkbox label="Muss stubenrein sein" name="potty_trained" checked={formData.potty_trained} onChange={handleChange} />
            <Field label="Zweck des Hundes" name="dog_purpose" value={formData.dog_purpose} onChange={handleChange} />
            <Field label="Aufenthaltsort des Hundes" name="future_dog_location" value={formData.future_dog_location} onChange={handleChange} />
            <Field label="Schlafplatz" name="dog_sleep_location" value={formData.dog_sleep_location} onChange={handleChange} />
            <Field label="Verbotene Bereiche" name="dog_restricted_areas" value={formData.dog_restricted_areas} onChange={handleChange} />
          </section>
        )}

        {/* STEP 6 */}
        {step === 6 && (
          <section className="space-y-6">
            <h2>Verantwortung</h2>
            <Field label="Zeit mit Hund pro Tag (Std.)" name="owner_time_per_day_with_dog" value={formData.owner_time_per_day_with_dog} onChange={handleChange} />
            <Field label="Hund allein pro Tag (Std.)" name="dog_hours_alone_per_day" value={formData.dog_hours_alone_per_day} onChange={handleChange} />
            <Field label="Futterart" name="food_type" value={formData.food_type} onChange={handleChange} />
            <Textarea label="Gute Erziehung bedeutet" name="good_dog_training_description" value={formData.good_dog_training_description} onChange={handleChange} />
            <Textarea label="Stubenreinheit" name="potty_training_method" value={formData.potty_training_method} onChange={handleChange} />
            <Textarea label="Typischer Tag" name="typical_day_description" value={formData.typical_day_description} onChange={handleChange} />
            <Textarea label="Eingewöhnung" name="settling_dog_description" value={formData.settling_dog_description} onChange={handleChange} />
            <Textarea label="Notfallplan" name="dog_backup_plan" value={formData.dog_backup_plan} onChange={handleChange} />
            <Textarea label="Abgabegründe" name="giving_up_reasons" value={formData.giving_up_reasons} onChange={handleChange} />
            <Textarea label="Alleinbleiben-Problem" name="dog_alone_problem_solution" value={formData.dog_alone_problem_solution} onChange={handleChange} />
            <Textarea label="Bellen" name="dog_barking_solution" value={formData.dog_barking_solution} onChange={handleChange} />
            <Textarea label="Zerstörung" name="dog_damage_solution" value={formData.dog_damage_solution} onChange={handleChange} />
            <Field label="Tierarztkosten/Jahr (€)" name="annual_vet_costs_euro" value={formData.annual_vet_costs_euro} onChange={handleChange} />
            <Field label="Sonstige Kosten (€)" name="other_costs_euro" value={formData.other_costs_euro} onChange={handleChange} />
            <Field label="Nächste Auslaufmöglichkeit" name="nearest_dog_park" value={formData.nearest_dog_park} onChange={handleChange} />
            <Field label="Urlaub nach Adoption möglich?" name="time_off_after_adoption" value={formData.time_off_after_adoption} onChange={handleChange} />
            <Field label="Fahrbereitschaft (km)" name="willing_to_drive_km" value={formData.willing_to_drive_km} onChange={handleChange} />
            <Textarea label="Weitere Informationen" name="additional_info" value={formData.additional_info} onChange={handleChange} />
          </section>
        )}

        {/* NAV */}
        <div className="flex justify-between pt-6">
          {step > 1 && (
            <button type="button" onClick={prevStep} className="button-secondary">
              Zurück
            </button>
          )}

          {step < 6 ? (
            <button type="button" onClick={nextStep} className="button-primary">
              Weiter
            </button>
          ) : (
            <button type="submit" className="button-primary">
              Absenden
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

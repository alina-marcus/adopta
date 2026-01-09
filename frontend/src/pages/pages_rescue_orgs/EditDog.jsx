import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditDog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [imageFile, setImageFile] = useState(null);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    dog_name: "",
    chip_number: "",
    passport_number: "",
    gender: "",
    birth_date: "",
    height_cm: "",
    weight_kg: "",
    color: "",
    unique_features: "",
    illness_description: "",
    energy_level: "",
    additional_notes: "",
    shelter_org_name: "",
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
    training_needed: false,
    available_for_adoption: false,
    available_as_foster: false,
    looking_for_sponsorship: false,
  });

      {/*DATEN LADEN */}
  
  useEffect(() => {
    async function loadDog() {
      try {
        const res = await fetch(`http://localhost:5001/dogs/${id}`);
        if (!res.ok) throw new Error("Fehler beim Laden");

        const data = await res.json();
        setFormData((prev) => ({ ...prev, ...data }));
      } catch (err) {
        console.error(err);
        alert("Hund konnte nicht geladen werden");
      } finally {
        setLoading(false);
      }
    }

    loadDog();
  }, [id]);

  {/* FORM HANDLING */}
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "number"
          ? value === "" ? "" : Number(value)
          : value,
    }));
  };

  {/* VALIDIERUNG */}
  const validate = () => {
    const newErrors = {};
    if (!formData.dog_name) newErrors.dog_name = "Pflichtfeld";
    if (!formData.chip_number) newErrors.chip_number = "Pflichtfeld";
    if (!formData.case_manager_email) newErrors.case_manager_email = "Pflichtfeld";

    if (formData.has_illnesses && !formData.illness_description) {
      newErrors.illness_description = "Bitte beschreiben";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  {/* SUBMIT */}
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const data = new FormData();
    data.append("data", JSON.stringify(formData));
    if (imageFile) data.append("image", imageFile);

    try {
      const res = await fetch(`http://localhost:5001/dogs/${id}`, {
        method: "PUT",
        body: data,
      });

      if (!res.ok) throw new Error("Update fehlgeschlagen");

      navigate(`/dogs/${id}`);
    } catch (err) {
      console.error(err);
      alert("Fehler beim Speichern");
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Lade Hundedaten…</p>;
  }

    {/* FORMULAR RENDERN */}
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow space-y-8"
    >
      <h1 className="text-3xl font-bold">Hund bearbeiten</h1>

      {/* FOTO */}
      <section>
        <label className="block font-semibold mb-1">Neues Profilfoto</label>
        <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} />
      </section>

      {/*  GRUNDDATEN  */}
      <TwoCols>
        <Field label="Name" name="dog_name" value={formData.dog_name} onChange={handleChange} error={errors.dog_name} />
        <Field label="Chipnummer" name="chip_number" value={formData.chip_number} onChange={handleChange} error={errors.chip_number} />
        <Field label="EU-Heimtierausweis" name="passport_number" value={formData.passport_number} onChange={handleChange} />
        <Field label="Geburtsdatum" type="date" name="birth_date" value={formData.birth_date} onChange={handleChange} />
        <Field label="Schulterhöhe (cm)" type="number" name="height_cm" value={formData.height_cm} onChange={handleChange} />
        <Field label="Gewicht (kg)" type="number" name="weight_kg" value={formData.weight_kg} onChange={handleChange} />
      </TwoCols>

      {/*  CHECKBOXEN  */}
      <TwoCols>
        <Checkbox name="neutered" label="Kastriert" checked={formData.neutered} onChange={handleChange} />
        <Checkbox name="vaccinated" label="Geimpft" checked={formData.vaccinated} onChange={handleChange} />
        <Checkbox name="is_blind" label="Blind" checked={formData.is_blind} onChange={handleChange} />
        <Checkbox name="is_deaf" label="Taub" checked={formData.is_deaf} onChange={handleChange} />
      </TwoCols>

      {/*  KONTAKT  */}
      <TwoCols>
        <Field label="Tierschutzverein" name="shelter_org_name" value={formData.shelter_org_name} onChange={handleChange} />
        <Field label="Vermittler:in" name="case_manager_name" value={formData.case_manager_name} onChange={handleChange} />
        <Field label="E-Mail Vermittler:in" name="case_manager_email" value={formData.case_manager_email} onChange={handleChange} error={errors.case_manager_email} />
      </TwoCols>

      <button className="px-8 py-3 bg-black text-white rounded-lg">
        Änderungen speichern
      </button>
    </form>
  );
}

/* HELFER */

function TwoCols({ children }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>;
}

function Field({ label, error, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input {...props} className={`w-full border p-2 rounded ${error ? "border-red-500" : ""}`} />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}

function Checkbox({ name, label, checked, onChange }) {
  return (
    <label className="flex items-center gap-2">
      <input type="checkbox" name={name} checked={checked} onChange={onChange} />
      {label}
    </label>
  );
}

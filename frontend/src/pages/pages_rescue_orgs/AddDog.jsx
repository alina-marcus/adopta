import { useState } from "react";

export default function DogForm() {
  const [formData, setFormData] = useState({
    dog_name: "",
    chip_number: "",
    passport_number: "",
    gender: "Female",
    birth_date: "",
    height_cm: "",
    weight_kg: "",
    color: "",
    unique_features: "",
    has_illnesses: false,
    illness_description: "",
    treatment_costs_covered: false,
    has_characteristics: false,
    characteristics_description: "",
    neutered: false,
    vaccinated: false,
    can_climb_stairs: true,
    needs_elevator: false,
    has_handicap: false,
    is_blind: false,
    is_deaf: false,
    is_house_trained: true,
    can_be_alone_hours: "",
    is_good_with_kids: false,
    is_good_with_males: false,
    is_good_with_females: false,
    is_good_with_cats: false,
    is_good_with_other_animals: false,
    needs_garden: false,
    needs_fence: false,
    needs_experienced_owner: false,
    barks_much: false,
    guarding_instinct: false,
    hunting_instinct: false,
    can_live_in_city: false,
    transport_tolerant: false,
    energy_level: "Medium",
    training_needed: false,
    additional_notes: "",
    available_for_adoption: false,
    available_as_foster: false,
    looking_for_sponsorship: false,
    shelter_org_name: "",
    case_manager_name: "",
    case_manager_email: "",
    current_country: "",
    current_location_type: "Shelter",
    current_location_description: "",
  });

  // Berechnete Felder
  const calcAgeFlags = (birthDate) => {
    if (!birthDate) return { is_senior: false, is_puppy: false };
    const birth = new Date(birthDate);
    const ageYears = (Date.now() - birth) / (1000 * 60 * 60 * 24 * 365);
    return {
      is_senior: ageYears >= 8,
      is_puppy: ageYears < 1,
    };
  };

  const { is_senior, is_puppy } = calcAgeFlags(formData.birth_date);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

  const url = "http://localhost:8001/api/dogs";
  try {
    const response = await fetch(url, {
      method: "POST",
      mode: 'cors',
      headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(formData),
    });
    console.log('function ran');
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-6"
    >
      <h1 className="text-2xl font-bold mb-4">🐾 Hund hinzufügen</h1>

      {/* Grunddaten */}
      <section>
        <h2 className="font-semibold text-lg mb-2">Allgemeine Informationen</h2>
        <div className="grid grid-cols-2 gap-4">
          <input name="dog_name" placeholder="Name des Hundes" value={formData.dog_name} onChange={handleChange} className="border p-2 rounded" />
          <input name="chip_number" placeholder="Mikrochipnummer" value={formData.chip_number} onChange={handleChange} className="border p-2 rounded" />
          <input name="passport_number" placeholder="EU-Heimtierausweisnummer" value={formData.passport_number} onChange={handleChange} className="border p-2 rounded" />
          <select name="gender" value={formData.gender} onChange={handleChange} className="border p-2 rounded">
            <option value="Male">Männlich</option>
            <option value="Female">Weiblich</option>
          </select>
          <input type="date" name="birth_date" value={formData.birth_date} onChange={handleChange} className="border p-2 rounded" />
          <input type="number" name="height_cm" placeholder="Schulterhöhe (cm)" value={formData.height_cm} onChange={handleChange} className="border p-2 rounded" />
          <input type="number" name="weight_kg" placeholder="Gewicht (kg)" value={formData.weight_kg} onChange={handleChange} className="border p-2 rounded" />
        </div>
      </section>

      {/* Beschreibungen */}
      <section>
        <h2 className="font-semibold text-lg mb-2">Beschreibung</h2>
        <textarea name="color" placeholder="Farbbeschreibung" value={formData.color} onChange={handleChange} className="border p-2 rounded w-full" />
        <textarea name="unique_features" placeholder="Alleinstellungsmerkmale" value={formData.unique_features} onChange={handleChange} className="border p-2 rounded w-full" />
      </section>

      {/* Gesundheit */}
<section>
  <h2 className="font-semibold text-lg mb-2">Gesundheit</h2>

  <div className="grid grid-cols-2 gap-2">
    {/* Checkbox: Hat bekannte Krankheiten */}
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        name="has_illnesses"
        checked={formData.has_illnesses}
        onChange={handleChange}
      />
      <span>Hat bekannte Krankheiten?</span>
    </label>

    {/* Behandlungskosten: nur anzeigen, wenn Krankheiten bekannt */}
    {formData.has_illnesses && (
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="treatment_costs_covered"
          checked={formData.treatment_costs_covered}
          onChange={handleChange}
        />
        <span>Behandlungskosten werden übernommen?</span>
      </label>
    )}

    {/* Weitere Gesundheits-Checkboxen */}
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        name="neutered"
        checked={formData.neutered}
        onChange={handleChange}
      />
      <span>Ist kastriert?</span>
    </label>

    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        name="vaccinated"
        checked={formData.vaccinated}
        onChange={handleChange}
      />
      <span>Ist geimpft?</span>
    </label>

    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        name="has_handicap"
        checked={formData.has_handicap}
        onChange={handleChange}
      />
      <span>Hat körperliche Einschränkung?</span>
    </label>

    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        name="is_blind"
        checked={formData.is_blind}
        onChange={handleChange}
      />
      <span>Ist blind?</span>
    </label>

    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        name="is_deaf"
        checked={formData.is_deaf}
        onChange={handleChange}
      />
      <span>Ist taub?</span>
    </label>
  </div>

  {/* Beschreibung der Krankheiten */}
  {formData.has_illnesses && (
    <textarea
      name="illness_description"
      placeholder="Beschreibung der Krankheiten"
      value={formData.illness_description}
      onChange={handleChange}
      className="border p-2 rounded w-full mt-2"
    />
  )}
</section>


      {/* Charakter & Verhalten */}
      <section>
        <h2 className="font-semibold text-lg mb-2">Charakter & Verhalten</h2>
        <div className="grid grid-cols-2 gap-2">
          {[
            ["is_house_trained", "Stubenrein"],
            ["can_climb_stairs", "Kann Treppen steigen"],
            ["needs_elevator", "Braucht Aufzug"],
            ["is_good_with_kids", "Verträglich mit Kindern"],
            ["is_good_with_males", "Verträglich mit Rüden"],
            ["is_good_with_females", "Verträglich mit Hündinnen"],
            ["is_good_with_cats", "Verträglich mit Katzen"],
            ["is_good_with_other_animals", "Verträglich mit anderen Tieren"],
            ["barks_much", "Bellt viel"],
            ["guarding_instinct", "Hat Hütetrieb"],
            ["hunting_instinct", "Hat Jagdtrieb"],
            ["can_live_in_city", "Stadttauglich"],
            ["transport_tolerant", "Verträgt Autofahrten"],
          ].map(([name, label]) => (
            <label key={name} className="flex items-center space-x-2">
              <input type="checkbox" name={name} checked={formData[name]} onChange={handleChange} />
              <span>{label}</span>
            </label>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 mt-3">
          <input type="number" name="can_be_alone_hours" placeholder="Wie viele Stunden kann der Hund allein bleiben" value={formData.can_be_alone_hours} onChange={handleChange} className="border p-2 rounded" />
        </div>
        <div className="mb-4">
  <label htmlFor="energy_level" className="block font-medium mb-1">
    Energielevel
  </label>
  <select
    id="energy_level"
    name="energy_level"
    value={formData.energy_level}
    onChange={handleChange}
    className="border p-2 rounded w-full"
  >
    <option value="">Bitte wählen...</option>
    <option value="Low">Niedrig</option>
    <option value="Medium">Mittel</option>
    <option value="High">Hoch</option>
  </select>
</div>

      </section>

      {/* Vermittlungsstatus */}
      <section>
        <h2 className="font-semibold text-lg mb-2">Vermittlung</h2>
        <div className="grid grid-cols-2 gap-2">
          {[
            ["available_for_adoption", "Zur Adoption freigegeben"],
            ["available_as_foster", "Als Pflegehund verfügbar"],
            ["looking_for_sponsorship", "Sucht Patenschaft"],
          ].map(([name, label]) => (
            <label key={name} className="flex items-center space-x-2">
              <input type="checkbox" name={name} checked={formData[name]} onChange={handleChange} />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </section>

      {/* Vermittlerdaten */}
      <section>
        <h2 className="font-semibold text-lg mb-2">Vermittler / Standort</h2>
        <div className="grid grid-cols-2 gap-4">
          <input name="shelter_org_name" placeholder="Name des Tierschutzvereins" value={formData.shelter_org_name} onChange={handleChange} className="border p-2 rounded" />
          <input name="case_manager_name" placeholder="Name des Vermittlers" value={formData.case_manager_name} onChange={handleChange} className="border p-2 rounded" />
          <input name="case_manager_email" placeholder="E-Mail des Vermittlers" type="email" value={formData.case_manager_email} onChange={handleChange} className="border p-2 rounded" />
          <input name="current_country" placeholder="Aktuelles Land" value={formData.current_country} onChange={handleChange} className="border p-2 rounded" />
          <select name="current_location_type" value={formData.current_location_type} onChange={handleChange} className="border p-2 rounded">
            <option value="Shelter">Tierheim</option>
            <option value="Kill Shelter">Tötungsstation</option>
            <option value="Foster Home">Pflegestelle</option>
            <option value="Adopted">Adoptiert</option>
            <option value="Other">Andere</option>
          </select>
        </div>
        <textarea name="current_location_description" placeholder="Ortsbeschreibung" value={formData.current_location_description} onChange={handleChange} className="border p-2 rounded w-full mt-2" />
      </section>

      {/* Berechnete Felder */}
      <div className="text-gray-600 text-sm">
        <p>🐶 Senior: {is_senior ? "Ja" : "Nein"}</p>
        <p>🐾 Welpe: {is_puppy ? "Ja" : "Nein"}</p>
      </div>

      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
        Speichern
      </button>
    </form>
  );
}

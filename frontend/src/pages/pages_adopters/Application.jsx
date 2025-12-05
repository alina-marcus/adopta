import React, { useState } from "react";

export default function AdoptionForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    // Schritt 1 – Persönliche Daten
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

    // Schritt 2 – Wohnsituation
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

    // Schritt 3 – Haushalt & Kinder
    household_people_count: "",
    children_count: "",
    children_age: "",
    fur_allergy_tested: false,

    // Schritt 4 – Tiererfahrung
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

    // Schritt 5 – Vorstellungen & Wünsche
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

    // Schritt 6 – Verantwortung & Abschluss
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
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 6));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("🐶 Adoptionsformular JSON:", formData);
    alert("Hello David! More data to post to thr API");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Adoptionsformular – Schritt {step} von 6
      </h1>

      {/* Fortschrittsbalken */}
      <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
        <div
          className="bg-green-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(step / 6) * 100}%` }}
        />
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* ===================== STEP 1 ===================== */}
        {step === 1 && (
          <section>
            <h2 className="text-xl font-semibold mb-2">Persönliche Angaben</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                name="first_name"
                placeholder="Vorname"
                value={formData.first_name}
                onChange={handleChange}
                className="border p-2 rounded"
                required
              />
              <input
                name="last_name"
                placeholder="Nachname"
                value={formData.last_name}
                onChange={handleChange}
                className="border p-2 rounded"
                required
              />
              <input
                type="email"
                name="email_address"
                placeholder="E-Mail-Adresse"
                value={formData.email_address}
                onChange={handleChange}
                className="border p-2 rounded col-span-2"
                required
              />
              <input
                name="phone_number"
                placeholder="Telefonnummer"
                value={formData.phone_number}
                onChange={handleChange}
                className="border p-2 rounded col-span-2"
              />
              <input
                type="date"
                name="birth_date"
                value={formData.birth_date}
                onChange={handleChange}
                className="border p-2 rounded col-span-2"
              />
            </div>

            <label className="flex items-center space-x-2 mt-4">
              <input
                type="checkbox"
                name="has_partner"
                checked={formData.has_partner}
                onChange={handleChange}
              />
              <span>Ich habe einen Partner</span>
            </label>

            {formData.has_partner && (
              <div className="grid grid-cols-2 gap-4 mt-2">
                <input
                  name="partner_profession"
                  placeholder="Beruf des Partners"
                  value={formData.partner_profession}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
                <input
                  type="number"
                  name="partner_monthly_income"
                  placeholder="Einkommen Partner (€)"
                  value={formData.partner_monthly_income}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
              </div>
            )}
          </section>
        )}

        {/* ===================== STEP 2 ===================== */}
        {step === 2 && (
          <section>
            <h2 className="text-xl font-semibold mb-2">Wohnsituation</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                name="country"
                placeholder="Land"
                value={formData.country}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <input
                name="city"
                placeholder="Stadt"
                value={formData.city}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <input
                name="street"
                placeholder="Straße"
                value={formData.street}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <input
                name="house_number"
                placeholder="Hausnummer"
                value={formData.house_number}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <input
                name="zip_code"
                placeholder="Postleitzahl"
                value={formData.zip_code}
                onChange={handleChange}
                className="border p-2 rounded"
              />
            </div>

            <label className="flex items-center space-x-2 mt-4">
              <input
                type="checkbox"
                name="private_garden"
                checked={formData.private_garden}
                onChange={handleChange}
              />
              <span>Privater Garten vorhanden?</span>
            </label>

            {formData.private_garden && (
              <input
                type="number"
                name="garden_size_m2"
                placeholder="Größe des Gartens (m²)"
                value={formData.garden_size_m2}
                onChange={handleChange}
                className="border p-2 rounded mt-2"
              />
            )}
          </section>
        )}

        {/* ===================== STEP 3 ===================== */}
        {step === 3 && (
          <section>
            <h2 className="text-xl font-semibold mb-2">Haushalt & Kinder</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                name="household_people_count"
                placeholder="Anzahl Personen im Haushalt"
                value={formData.household_people_count}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <input
                type="number"
                name="children_count"
                placeholder="Anzahl Kinder"
                value={formData.children_count}
                onChange={handleChange}
                className="border p-2 rounded"
              />
            </div>
            <input
              type="text"
              name="children_age"
              placeholder="Alter der Kinder"
              value={formData.children_age}
              onChange={handleChange}
              className="border p-2 rounded w-full mt-2"
            />
            <label className="flex items-center space-x-2 mt-2">
              <input
                type="checkbox"
                name="fur_allergy_tested"
                checked={formData.fur_allergy_tested}
                onChange={handleChange}
              />
              <span>Haushalt auf Tierhaarallergie getestet?</span>
            </label>
          </section>
        )}

        {/* ===================== STEP 4 ===================== */}
        {step === 4 && (
          <section>
            <h2 className="text-xl font-semibold mb-2">Tiererfahrung</h2>
            <label className="flex items-center space-x-2 mb-2">
              <input
                type="checkbox"
                name="previous_dog_experience"
                checked={formData.previous_dog_experience}
                onChange={handleChange}
              />
              <span>Hast du Hundeerfahrung?</span>
            </label>

            {formData.previous_dog_experience && (
              <input
                name="previous_dog_breed"
                placeholder="Vorherige Hunderasse"
                value={formData.previous_dog_breed}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            )}
          </section>
        )}

        {/* ===================== STEP 5 ===================== */}
        {step === 5 && (
          <section>
            <h2 className="text-xl font-semibold mb-2">Wunschhund</h2>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="decided_for_specific_dog"
                checked={formData.decided_for_specific_dog}
                onChange={handleChange}
              />
              <span>Ich habe mich für einen bestimmten Hund entschieden</span>
            </label>

            {!formData.decided_for_specific_dog && (
              <div className="grid grid-cols-2 gap-4 mt-2">
                <select
                  name="future_dog_sex"
                  value={formData.future_dog_sex}
                  onChange={handleChange}
                  className="border p-2 rounded"
                >
                  <option value="">Geschlecht</option>
                  <option value="männlich">männlich</option>
                  <option value="weiblich">weiblich</option>
                </select>
                <input
                  name="future_dog_age"
                  placeholder="Alter (z. B. Welpe, Erwachsen)"
                  value={formData.future_dog_age}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
              </div>
            )}
          </section>
        )}

        {/* ===================== STEP 6 ===================== */}
        {step === 6 && (
          <section>
            <h2 className="text-xl font-semibold mb-2">
              Verantwortung & Abschluss
            </h2>
            <textarea
              name="additional_info"
              placeholder="Gibt es noch etwas, das du mitteilen möchtest?"
              value={formData.additional_info}
              onChange={handleChange}
              className="border p-2 rounded w-full h-24"
            />
          </section>
        )}

        {/* Navigation */}
        <div className="flex justify-between pt-4">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 bg-gray-200 rounded-lg"
            >
              Zurück
            </button>
          )}
          {step < 6 ? (
            <button
              type="button"
              onClick={nextStep}
              className="ml-auto px-4 py-2 bg-green-600 text-white rounded-lg"
            >
              Weiter
            </button>
          ) : (
            <button
              type="submit"
              className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Formular abschließen
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

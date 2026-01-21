import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


/* ---------- Helper Components ---------- */

const Field = ({ label, name, type = "text", value, onChange }) => (
  <div className="space-y-1">
    <label className="text-sm font-medium">{label}</label>
    <input
      type={type}
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
      {Object.entries(options).map(([val, label]) => (
        <option key={val} value={val}>
          {label}
        </option>
      ))}
    </select>
  </div>
);




/* ---------- Main Component ---------- */

export default function AdoptionForm() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const { dogId } = useParams();

  const [formData, setFormData] = useState({
    dog_id: Number(dogId),
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

    household_people_count: "",
    children_count: "",
    children_age: "",
    fur_allergy_tested: false,

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

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5001/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text);
    }

    const result = await res.json();
    navigate(`/applications/${result.id}`);
  } catch (err) {
    console.error("Submit fehlgeschlagen:", err);
    alert("Bewerbung konnte nicht abgeschickt werden.");
  }
};


  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
      <h1>Adoptionsformular – Schritt {step} von 6</h1>

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
            <Field label="Geburtsdatum" name="birth_date" type="date" value={formData.birth_date} onChange={handleChange} />
            <Field label="Beruf" name="profession" value={formData.profession} onChange={handleChange} />
            <Field label="Arbeitsstunden pro Woche" name="working_hours_per_week" value={formData.working_hours_per_week} onChange={handleChange} />
            <Field label="Stunden außer Haus pro Tag" name="hours_outside_per_day" value={formData.hours_outside_per_day} onChange={handleChange} />
            <Field label="Monatliches Einkommen (€)" name="monthly_income_euro" value={formData.monthly_income_euro} onChange={handleChange} />
            <Checkbox label="Ich möchte mit meinem im Haushalt lebenden Partner zusammen den Hund adoptieren" name="has_partner" checked={formData.has_partner} onChange={handleChange} />
            {formData.has_partner && (
              <>
                <Field label="Beruf Partner" name="partner_profession" value={formData.partner_profession} onChange={handleChange} />
                <Field label="Einkommen Partner (€)" name="partner_monthly_income" value={formData.partner_monthly_income} onChange={handleChange} />
                <Field label="Arbeitsstunden Partner" name="partner_working_hours_per_week" value={formData.partner_working_hours_per_week} onChange={handleChange} />
                <Field label="Stunden außer Haus Partner" name="partner_hours_outside_per_day" value={formData.partner_hours_outside_per_day} onChange={handleChange} />
              </>
            )}
            <Checkbox label="Auto vorhanden" name="has_car" checked={formData.has_car} onChange={handleChange} />
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
            <Field label="Wohnform" name="housing_type" value={formData.housing_type} onChange={handleChange} />
            <Field label="Wohnfläche (m²)" name="housing_size_m2" value={formData.housing_size_m2} onChange={handleChange} />
            <Field label="Etage" name="apartment_floor" value={formData.apartment_floor} onChange={handleChange} />
            <Checkbox label="Aufzug vorhanden" name="has_elevator" checked={formData.has_elevator} onChange={handleChange} />
            <Field label="Stockwerke im Haus" name="house_stories" value={formData.house_stories} onChange={handleChange} />
            <Checkbox label="Steile Treppe" name="steep_staircase" checked={formData.steep_staircase} onChange={handleChange} />
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
              <Field label="Tierhaltung erlaubt (Miete)" name="pet_permission_if_rented" value={formData.pet_permission_if_rented} onChange={handleChange} />
            )}
            {formData.owned_or_rented === "Eigentum" && ( 
                <Field label="Tierhaltung erlaubt (Eigentum)" name="pet_permission_if_owned" value={formData.pet_permission_if_owned} onChange={handleChange} />
            )} 
             <Checkbox label="Umzug geplant" name="planning_to_move" checked={formData.planning_to_move} onChange={handleChange} />
          </section>
        )}
              
        {/* STEP 3 */}
        {step === 3 && (
          <section className="space-y-6">
            <h2>Haushalt & Kinder</h2>
            <Field label="Personen im Haushalt" name="household_people_count" value={formData.household_people_count} onChange={handleChange} />
            <Field label="Kinderanzahl" name="children_count" value={formData.children_count} onChange={handleChange} />
            {formData.children_count > 0 && (
              <Field label="Alter der Kinder" name="children_age" value={formData.children_age} onChange={handleChange} />
            )}
            
            <Checkbox label="Allergietest durchgeführt" name="fur_allergy_tested" checked={formData.fur_allergy_tested} onChange={handleChange} />
          </section>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <section className="space-y-6">
            <h2>Tiererfahrung</h2>
            <Field
              label="Welche Tiere leben aktuell im Haushalt?"
              name="pets_in_household"
              value={formData.pets_in_household}
              onChange={handleChange}
            />
            {formData.pets_in_household && (
              <>
                <Field label="Tierart" name="pet_type" value={formData.pet_type} onChange={handleChange} />
                <Field label="Geschlecht" name="pet_sex" value={formData.pet_sex} onChange={handleChange} />
                <Checkbox label="Kastriert" name="pet_castrated" checked={formData.pet_castrated} onChange={handleChange} />
                <Field label="Alter" name="pet_age" value={formData.pet_age} onChange={handleChange} />
                <Field label="Gewicht (kg)" name="pet_weight_kg" value={formData.pet_weight_kg} onChange={handleChange} />
                <Field label="Verträglichkeit" name="pet_compatibility" value={formData.pet_compatibility} onChange={handleChange} />
              </>
            )}
            
            <Checkbox label="Hundeerfahrung vorhanden" name="previous_dog_experience" checked={formData.previous_dog_experience} onChange={handleChange} />
            {formData.previous_dog_experience && (
              <>
                <Field label="Rasse" name="previous_dog_breed" value={formData.previous_dog_breed} onChange={handleChange} />
                <Field label="Erfahrungsjahre" name="previous_dog_years" value={formData.previous_dog_years} onChange={handleChange} />
                <Field label="Was wurde aus dem Hund?" name="previous_dog_outcome" value={formData.previous_dog_outcome} onChange={handleChange} />
                <Checkbox label="Hundeschule besucht" name="been_to_dog_trainer" checked={formData.been_to_dog_trainer} onChange={handleChange} />
                <Field label="Name Trainer / Schule" name="dog_trainer_name" value={formData.dog_trainer_name} onChange={handleChange} />
                <Checkbox label="Hund aus dem Tierschutz adoptiert" name="adopted_from_shelter" checked={formData.adopted_from_shelter} onChange={handleChange} />
                <Textarea label="Erfahrung Tierschutz" name="shelter_experience_description" value={formData.shelter_experience_description} onChange={handleChange} />
              </>
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

        <div className="flex justify-between pt-6">
          {step > 1 && <button type="button" onClick={prevStep} className="button-secondary">Zurück</button>}
          {step < 6 ? (
            <button
              type="button"
              onClick={nextStep}
              className="button-primary"
            >
              Weiter
            </button>

          ) : (
            <button type="submit" className="button-primary">Absenden</button>
          )}
        </div>
      </form>
    </div>
  );
}

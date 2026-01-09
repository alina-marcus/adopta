import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FIELD_LABELS = {
  first_name: "Vorname",
  last_name: "Nachname",
  email_address: "E-Mail",
  phone_number: "Telefonnummer",
  birth_date: "Geburtsdatum",

  has_partner: "Partner vorhanden",
  partner_profession: "Beruf Partner",
  partner_monthly_income: "Einkommen Partner",

  country: "Land",
  city: "Stadt",
  street: "Straße",
  house_number: "Hausnummer",
  zip_code: "PLZ",

  private_garden: "Privater Garten",
  garden_size_m2: "Gartengröße (m²)",

  household_people_count: "Personen im Haushalt",
  children_count: "Kinder",
  children_age: "Alter der Kinder",

  previous_dog_experience: "Hundeerfahrung",
  previous_dog_breed: "Frühere Hunderasse",

  decided_for_specific_dog: "Bestimmter Hund gewählt",

  additional_info: "Zusätzliche Angaben",
};

const formatValue = (value) => {
  if (typeof value === "boolean") return value ? "Ja" : "Nein";
  if (value === null || value === "") return "—";
  return value.toString();
};

export default function ReviewApplication() {
  const { id } = useParams();
  const [application, setApplication] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5001/api/applications/${id}`)
      .then((res) => res.json())
      .then(setApplication);
  }, [id]);

  if (!application) return <p>Lade Bewerbung…</p>;

  const data = application.application_data;

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">
        Bewerbung für {application.dog_name}
      </h1>

      <table className="w-full border border-gray-300 text-sm">
        <tbody>
          {Object.entries(data).map(([key, value]) => (
            <tr key={key} className="border-b">
              <td className="p-2 font-semibold align-top w-1/3">
                {FIELD_LABELS[key] || key}
              </td>
              <td className="p-2">
                {formatValue(value)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex gap-3 mt-6">
        <button className="border px-4 py-2 rounded">
          Request Home Check
        </button>
        <button className="border px-4 py-2 rounded">
          Reject Application
        </button>
        <button className="border px-4 py-2 rounded">
          Report Applicant
        </button>
      </div>
    </>
  );
}

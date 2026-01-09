import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

/* Labels */
const LABELS = {
  dog_name: "Name",
  chip_number: "Chipnummer",
  passport_number: "EU-Heimtierausweis",
  gender: "Geschlecht",
  birth_date: "Geburtsdatum",
  height_cm: "Schulterhöhe (cm)",
  weight_kg: "Gewicht (kg)",
  color: "Farbe",
  unique_features: "Besondere Merkmale",
  energy_level: "Energielevel",
  additional_notes: "Zusätzliche Hinweise",
  shelter_org_name: "Tierschutzverein",
  case_manager_name: "Vermittler:in",
  case_manager_email: "E-Mail Vermittler:in",
  current_country: "Aktuelles Land",
  current_location_type: "Unterkunftsart",
  current_location_description: "Details zur Unterkunft",

  has_illnesses: "Krankheiten vorhanden",
  illness_description: "Beschreibung der Krankheiten",
  treatment_costs_covered: "Behandlungskosten übernommen",
  neutered: "Kastriert",
  vaccinated: "Geimpft",
  has_handicap: "Körperliche Einschränkung",
  is_blind: "Blind",
  is_deaf: "Taub",

  is_house_trained: "Stubenrein",
  is_good_with_kids: "Kinderfreundlich",
  is_good_with_males: "Mit Rüden verträglich",
  is_good_with_females: "Mit Hündinnen verträglich",
  is_good_with_cats: "Mit Katzen verträglich",
  is_good_with_other_animals: "Mit anderen Tieren verträglich",

  needs_garden: "Benötigt Garten",
  needs_experienced_owner: "Nur für erfahrene Halter",
  guarding_instinct: "Hütetrieb",
  hunting_instinct: "Jagdtrieb",
  can_live_in_city: "Stadttauglich",
  transport_tolerant: "Transportverträglich",
  can_climb_stairs: "Kann Treppen steigen",

  available_for_adoption: "Zur Adoption freigegeben",
  available_as_foster: "Als Pflegehund verfügbar",
  looking_for_sponsorship: "Sucht Patenschaft",
};

/* Keys, die NICHT in der Tabelle erscheinen sollen */
const EXCLUDED_KEYS = [
  "id",
  "image_url",
  "created_at",
  "updated_at",
];

export default function DogProfile() {
  const { id } = useParams();
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDog() {
      try {
        const res = await fetch(`http://localhost:5001/dogs/${id}`);
        const data = await res.json();
        setDog(data);
      } catch (err) {
        console.error("Fehler beim Laden des Hundes:", err);
      } finally {
        setLoading(false);
      }
    }

    loadDog();
  }, [id]);

  if (loading) {
    return <div className="p-6 pt-24 text-center">Lade Hund…</div>;
  }

  if (!dog) {
    return <div className="p-6 pt-24 text-center">Hund nicht gefunden</div>;
  }

  return (
    <div className="p-6 pt-24 max-w-3xl mx-auto">
      {/* Bild */}
      {dog.image_url && (
        <div className="relative w-full max-w-md mx-auto">
          <img
            src={dog.image_url}
            alt={dog.dog_name}
            className="w-full h-auto rounded-lg"
          />

          <div className="absolute bottom-0 left-0 right-0 flex justify-around p-4 gap-2">
            <InfoBox label="Gewicht" value={`${dog.weight_kg ?? "–"} kg`} />
            <InfoBox label="Größe" value={`${dog.height_cm ?? "–"} cm`} />
            <InfoBox label="Geschlecht" value={dog.gender || "–"} />
          </div>
        </div>
      )}

      {/* Header */}
      <h1 className="text-3xl font-bold mt-6 mb-2">{dog.dog_name}</h1>
      <p className="text-gray-600 mb-6">
        {dog.current_country} | {dog.current_location_type}
      </p>

      {/* Aktionen */}
      <div className="flex gap-4 mb-10">
        <Link to={`/dogs/${dog.id}/edit`}>
          <button className="px-6 py-3 rounded-xl font-semibold shadow bg-gray-200 hover:bg-gray-300">
            Bearbeiten
          </button>
        </Link>
        <button className="px-4 py-2 rounded-md bg-[#3C9A6B] text-white hover:bg-[#2f7752]">
          Teilen
        </button>
      </div>

      {/* Dynamische Tabelle */}
      <h2 className="text-2xl font-semibold mb-4">Alle Angaben</h2>

      <table className="table-auto border-collapse border border-gray-300 w-full">
        <tbody>
          {Object.entries(dog)
            .filter(
              ([key, value]) =>
                !EXCLUDED_KEYS.includes(key) &&
                value !== null &&
                value !== ""
            )
            .map(([key, value]) => (
              <tr key={key}>
                <td className="border px-4 py-2 font-medium">
                  {LABELS[key] || key}
                </td>
                <td className="border px-4 py-2">
                  {formatValue(value)}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

/* ---------- HELFER ---------- */

function InfoBox({ label, value }) {
  return (
    <div className="bg-white bg-opacity-80 text-black rounded p-2 text-sm shadow text-center">
      {label}:<br />
      {value}
    </div>
  );
}

function formatValue(value) {
  if (typeof value === "boolean") {
    return value ? "Ja" : "Nein";
  }

  return String(value);
}

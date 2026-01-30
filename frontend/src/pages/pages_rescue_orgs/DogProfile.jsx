import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

/* ---------- KONFIG ---------- */

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200";

const FALLBACK_DESCRIPTION =
  "Für diesen Hund liegt aktuell noch keine ausführliche Beschreibung vor. Melde dich gern bei uns, um mehr zu erfahren.";

/* Keys, die NIE angezeigt werden */
const EXCLUDED_KEYS = [
  "id",
  "image_url",
  "created_at",
  "updated_at",
  "case_manager_email",
  "chip_number",
  "passport_number",
  "rescue_org_id",
];

const LABELS_DE = {
  breed: "Rasse",
  gender: "Geschlecht",
  height_cm: "Schulterhöhe (cm)",
  weight_kg: "Gewicht (kg)",
  color: "Farbe",
  unique_features: "Besondere Merkmale",

  energy_level: "Energielevel",

  is_house_trained: "Stubenrein",
  is_good_with_kids: "Kinderfreundlich",
  is_good_with_males: "Mit Rüden verträglich",
  is_good_with_females: "Mit Hündinnen verträglich",
  is_good_with_cats: "Mit Katzen verträglich",
  is_good_with_other_animals: "Mit anderen Tieren verträglich",

  needs_garden: "Benötigt Garten",
  needs_experienced_owner: "Nur für erfahrene Halter",
  guarding_instinct: "Wach-/Schutztrieb",
  hunting_instinct: "Jagdtrieb",
  can_live_in_city: "Stadttauglich",
  transport_tolerant: "Transportverträglich",
  can_climb_stairs: "Kann Treppen steigen",

  has_illnesses: "Bekannte Vorerkrankungen vorhanden",
  illness_description: "Beschreibung der Krankheiten",
  treatment_costs_covered: "Behandlungskosten werden vom Verein übernommen",
  neutered: "Kastriert",
  vaccinated: "Geimpft",
  has_handicap: "Bekannte körperliche Einschränkungen",
  is_blind: "Blind",
  is_deaf: "Taub",

  available_for_adoption: "Zur Adoption freigegeben",
  available_as_foster: "Als Pflegehund verfügbar",
  looking_for_sponsorship: "Sucht Patenschaft",

  shelter_org_name: "Tierschutzverein",
  current_country: "Aktueller Aufenthaltsort",
  current_location_description: "Details zur Unterkunft",
};


/* ---------- SEKTIONEN ---------- */

const SECTIONS = [
  {
    title: "Grunddaten",
    keys: [
      "breed",
      "gender",
      "height_cm",
      "weight_kg",
      "color",
      "unique_features",
    ],
  },
  {
    title: "Angaben zum Charakter",
    keys: [
      "energy_level",
      "is_house_trained",
      "is_good_with_kids",
      "is_good_with_males",
      "is_good_with_females",
      "is_good_with_cats",
      "is_good_with_other_animals",
      "needs_garden",
      "needs_experienced_owner",
      "guarding_instinct",
      "hunting_instinct",
      "can_live_in_city",
      "transport_tolerant",
      "can_climb_stairs",
    ],
  },
  {
    title: "Medizinische Informationen",
    keys: [
      "has_illnesses",
      "illness_description",
      "treatment_costs_covered",
      "neutered",
      "vaccinated",
      "has_handicap",
      "is_blind",
      "is_deaf",
    ],
  },
  {
    title: "Vermittlungsstatus",
    keys: [
      "available_for_adoption",
      "available_as_foster",
      "looking_for_sponsorship",
    ],
  },
  {
    title: "Verein & Aufenthaltsort",
    keys: [
      "shelter_org_name",
      "current_location_description",
    ],
  },
];


/* ---------- KOMPONENTE ---------- */

export default function DogProfile() {
  const { id } = useParams();
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDog() {
      try {
        const res = await fetch(`http://localhost:5001/dogs/${id}`);
        if (!res.ok) {
          setDog(null);
          return;
        }
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
    <main className="p-6 pt-24 max-w-4xl mx-auto space-y-10">
      {/* ---------- BILD ---------- */}
      <img
        src={dog.image_url || FALLBACK_IMAGE}
        alt={dog.dog_name}
        onError={(e) => (e.currentTarget.src = FALLBACK_IMAGE)}
        className="w-full max-h-[420px] object-cover rounded-2xl"
      />

      {/* ---------- HEADER ---------- */}
      <section className="space-y-4">
        <h1>{dog.dog_name}</h1>

        <p className="text-gray-600">
          📍 {dog.current_country} | {dog.current_location_type}
        </p>

        <div className="flex flex-wrap gap-3">
          <Link to={`/bewerbung/${dog.id}`} className="button-primary">
            Jetzt bewerben
          </Link>
          <Link to={`/tsv/hund/${dog.id}/bearbeiten`} className="button-primary">
            Bearbeiten
          </Link>

          <button className="button-secondary">Teilen</button>
        </div>
      </section>

      {/* ---------- QUICK FACTS ---------- */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <FactBox label="Alter" value={formatAge(dog.birth_date)} />
        <FactBox label="Rasse" value={dog.breed || "–"} />
        <FactBox label="Gewicht" value={dog.weight_kg ? `${dog.weight_kg} kg` : "–"} />
        <FactBox label="Geschlecht" value={dog.gender || "–"} />
      </section>

      {/* ---------- BESCHREIBUNG ---------- */}
      <section className="bg-white rounded-2xl p-6 shadow-sm">
        <p className="text-gray-700 leading-relaxed">
          {dog.description || FALLBACK_DESCRIPTION}
        </p>
      </section>

      {/* ---------- DETAILSEKTIONEN ---------- */}
      {SECTIONS.map((section) => (
        <DetailSection
          key={section.title}
          title={section.title}
          dog={dog}
          keys={section.keys}
        />
      ))}

      {/* ---------- FOOTER CTA ---------- */}
      <div className="pt-6 text-center">
        <Link to={`/bewerbung/${dog.id}`} className="button-primary">
          Anfrage für {dog.dog_name} senden
        </Link>
      </div>
    </main>
  );
}

/* ---------- UI KOMPONENTEN ---------- */

function FactBox({ label, value }) {
  return (
    <div className="bg-white rounded-xl p-4 text-center shadow-sm">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  );
}

function DetailSection({ title, dog, keys }) {
  const entries = keys.filter(
    (key) =>
      !EXCLUDED_KEYS.includes(key) &&
      dog[key] !== null &&
      dog[key] !== ""
  );

  if (entries.length === 0) return null;

  return (
    <section className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
      <h2>{title}</h2>

      <div className="grid sm:grid-cols-2 gap-3">
        {entries.map((key) => (
          <DetailRow key={key} labelKey={key} value={dog[key]} />
        ))}

      </div>
    </section>
  );
}

function DetailRow({ labelKey, value }) {
  return (
    <div className="flex justify-between items-center border-b py-2 text-sm">
      <span className="text-gray-600">
        {LABELS_DE[labelKey] ?? labelKey}
      </span>
      <span className="font-medium">{formatValue(value)}</span>
    </div>
  );
}


/* ---------- HELFER ---------- */

function formatValue(value) {
  if (typeof value === "boolean") {
    return value ? "✔️" : "✖️";
  }
  return String(value);
}

function humanize(key) {
  return key
    .replace(/_/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

function formatAge(birthDate) {
  if (!birthDate) return "–";
  const years =
    new Date().getFullYear() - new Date(birthDate).getFullYear();
  return years > 0 ? `${years} Jahre` : "unter 1 Jahr";
}

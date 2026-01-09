import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

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

          {/* Overlay Infos */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-around p-4 gap-2">
            <InfoBox label="Gewicht" value={`${dog.weight_kg ?? "–"} kg`} />
            <InfoBox label="Größe" value={`${dog.height_cm ?? "–"} cm`} />
            <InfoBox label="Geschlecht" value={dog.gender || "–"} />
          </div>
        </div>
      )}

      {/* Header */}
      <h1 className="text-3xl font-bold mt-6 mb-2">{dog.dog_name}</h1>
      <p className="text-gray-600 mb-4">
        {dog.current_country} | {dog.current_location_type}
      </p>

      {/* Aktionen */}
      <div className="flex gap-4 mb-8">
        <Link to={`/dogs/${dog.id}/edit`}>
          <button className="px-6 py-3 rounded-xl font-semibold shadow bg-gray-200 hover:bg-gray-300">
            Bearbeiten
          </button>
        </Link>
        <button className="px-4 py-2 rounded-md bg-[#3C9A6B] text-white hover:bg-[#2f7752]">
          Teilen
        </button>
      </div>

      {/* Eigenschaften */}
      <h2 className="text-2xl font-semibold mb-4">Eigenschaften</h2>

      <table className="table-auto border-collapse border border-gray-300 w-full">
        <tbody>
          <Row label="Stubenrein" value={bool(dog.is_house_trained)} />
          <Row label="Kinderfreundlich" value={bool(dog.is_good_with_kids)} />
          <Row label="Mit Katzen verträglich" value={bool(dog.is_good_with_cats)} />
          <Row label="Blind" value={bool(dog.is_blind)} />
          <Row label="Taub" value={bool(dog.is_deaf)} />
          <Row label="Kastriert" value={bool(dog.neutered)} />
          <Row label="Geimpft" value={bool(dog.vaccinated)} />
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

function Row({ label, value }) {
  return (
    <tr>
      <td className="border px-4 py-2 font-medium">{label}</td>
      <td className="border px-4 py-2">{value}</td>
    </tr>
  );
}

function bool(value) {
  if (value === true) return "Ja";
  if (value === false) return "Nein";
  return "–";
}

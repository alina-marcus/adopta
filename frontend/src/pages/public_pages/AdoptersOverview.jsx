import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FooterLoggedOut from "../../components/footers/FooterLoggedOut.jsx";

export default function AdoptersOverview() {
const [dogs, setDogs] = useState(null);
  const [loading, setLoading] = useState(true);
  
useEffect(() => {
    async function loadDogs() {
      try {
        const res = await fetch(`http://localhost:5001/dogs`);
        const data = await res.json();
        setDogs(data);
      } catch (err) {
        console.error("Fehler beim Laden der Hunde:", err);
      } finally {
        setLoading(false);
      }
    }

    loadDogs();
  },[]);

  if (loading) {
    return <div className="p-6 pt-24 text-center">Lade Hunde…</div>;
  }

  if (!dogs) {
    return <div className="p-6 pt-24 text-center">Hunde nicht gefunden</div>;
  }

  return (
    <>
      {/* Main heading */}
      <h1>Hund aus dem Tierschutz adoptieren</h1>

      {/* Search bar (UI only for now) */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Suche…"
          className="w-full max-w-md px-4 py-2 border rounded-md"
        />
      </div>

      {/* Filter + Result count */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-2">
          <button className="px-4 py-2 border rounded-md">
            Filtern
          </button>
          <button className="px-4 py-2 border rounded-md">
            Sortieren
          </button>
        </div>
        <p className="text-gray-600">{dogs.length} Ergebnisse</p>
      </div>

      {/* Dogs grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {dogs.map((dog) => (
          <div
            key={dog.id}
            className="border rounded-lg overflow-hidden bg-white"
          >
            <img
              src={dog.profile_image_url}
              alt={dog.dog_name}
              className="w-full h-56 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1">
                {dog.dog_name}
              </h2>

              <p className="text-gray-600 mb-4">
                {dog.current_location_type} · {dog.current_country}
              </p>

              <Link
                to={`/dogs/${dog.id}`}
                className="inline-block px-4 py-2 border rounded-md hover:bg-black hover:text-white transition"
              >
                Ansehen
              </Link>
            </div>
          </div>
        ))}
      </div>

      <FooterLoggedOut />
    </>
  );
}

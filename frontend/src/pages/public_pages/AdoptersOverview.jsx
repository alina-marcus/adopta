import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FooterLoggedOut from "../../components/footers/FooterLoggedOut.jsx";

export default function AdoptersOverview() {
  const [dogs, setDogs] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDogs() {
      try {
        const res = await fetch("http://localhost:5001/dogs");
        const data = await res.json();
        setDogs(data);
      } catch (err) {
        console.error("Fehler beim Laden der Hunde:", err);
      } finally {
        setLoading(false);
      }
    }

    loadDogs();
  }, []);

  if (loading) {
    return <div className="p-6 pt-24 text-center">Lade Hunde…</div>;
  }

  if (!dogs) {
    return <div className="p-6 pt-24 text-center">Hunde nicht gefunden</div>;
  }

  return (
    <>
      <h1>Hund aus dem Tierschutz adoptieren</h1>

      {/* Suche */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Nach Namen oder Ort suchen…"
          className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Filter / Count */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex gap-3">
          <button className="button-secondary">Filtern</button>
          <button className="button-secondary">Sortieren</button>
        </div>
        <p className="text-gray-500">{dogs.length} Hunde gefunden</p>
      </div>

      {/* GRID */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        {dogs.map((dog) => (
          <div
            key={dog.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
          >
            {/* Bild */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={dog.image || "https://images.unsplash.com/photo-1558788353-f76d92427f16"}
                alt={dog.dog_name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Inhalt */}
            <div className="p-5 flex flex-col gap-3">
              <h2 className="text-xl font-semibold">{dog.dog_name}</h2>

              <p className="text-sm text-gray-500">
                {dog.current_location_type?.trim() ? dog.current_location_type : "Auf Pflegestelle"} |{" "}
                {dog.breed?.trim() ? dog.breed : "Unbekannt"}
              </p>

              <div className="mt-3">
                <Link
                  to={`/tsv/hund/${dog.id}`}
                  className="inline-block button-primary text-sm"
                >
                  Profil ansehen
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <FooterLoggedOut />
    </>
  );
}

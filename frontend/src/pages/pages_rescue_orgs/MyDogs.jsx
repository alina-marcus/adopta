import DogCard from "../../components/DogCard.jsx";
import FooterLoggedOut from "../../components/footers/FooterLoggedOut.jsx";
import { useEffect, useState } from "react";
  

export default function MyDogs() {

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
      <h1 className="text-3xl font-bold mb-4">Meine Hunde</h1>

      {/* Search bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search dogs..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#fa6a02]"
        />
      </div>

      {/* Filter + Sort bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition">
            Filter
          </button>
          <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition">
            Sort
          </button>
        </div>
        <p className="text-gray-600">{dogs.length} results</p>
      </div>

      {/* Page header + Add New */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">My Dogs</h2>
        <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#fa6a02] text-white font-medium shadow hover:bg-[#a34502] transition">
          {/* Plus icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Add New
        </button>
      </div>

      {/* Dogs grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {dogs.map((dog) => (
          <DogCard key={dog.id} dog={dog} />
        ))}
      </div>

      <FooterLoggedOut />
    </>
  );
}

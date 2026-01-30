import { ShareIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200";

export default function DogCard({ dog }) {
  return (
    <div className="card bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={dog.image || FALLBACK_IMAGE}
        alt={dog.dog_name}
        onError={(e) => (e.currentTarget.src = FALLBACK_IMAGE)}
        className="w-full max-h-[420px] object-cover rounded-2xl"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{dog.dog_name}</h2>
        <p className="text-gray-600 mb-2">
          {dog.current_location_type} | {dog.current_country}
        </p>
        <p className="text-gray-600 mb-4">
          {dog.applications} applications
        </p>

        <div className="flex justify-center gap-4">
          {/* View Details Button */}
          <Link to={`/tsv/hund/${dog.id}`}>
            <button className="button-primary">
              Ansehen
            </button>
          </Link>
          {/* Share Button */}
          <button className="flex items-center gap-2 px-5 py-2 button-secondary">
            <ShareIcon className="w-5 h-5" />
            Teilen
          </button>
        </div>
      </div>
    </div>
  );
}

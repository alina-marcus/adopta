import { ShareIcon } from "@heroicons/react/24/outline";

export default function DogCard({ dog }) {
  return (
    <div className="card bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={dog.imageUrl}
        alt={dog.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{dog.name}</h2>
        <p className="text-gray-600 mb-2">
          {dog.housing} | {dog.location}
        </p>
        <p className="text-gray-600 mb-4">
          {dog.applications} applications
        </p>

        <div className="flex justify-center gap-4">
          {/* View Details Button */}
          <button className="flex items-center px-5 py-2 rounded-full bg-[#fa6a02] text-white font-medium shadow hover:bg-[#a34502] transition">
            Ansehen
          </button>

          {/* Share Button */}
          <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#3C9A6B] text-white font-medium shadow hover:bg-[#2f7752] transition">
            <ShareIcon className="w-5 h-5" />
            Teilen
          </button>
        </div>
      </div>
    </div>
  );
}

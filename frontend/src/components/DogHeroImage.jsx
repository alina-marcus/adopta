export default function DogHeroImage() {
return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Bild */}
      <img
        src="https://via.placeholder.com/400x300"
        alt="Beispiel"
        className="w-full h-auto rounded-lg"
      />

      {/* Container für die Kästchen */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-around p-4 gap-2">
        {/* Kästchen 1 */}
        <div className="bg-white bg-opacity-80 text-black rounded p-2 text-sm shadow">
          Text 1
        </div>
        {/* Kästchen 2 */}
        <div className="bg-white bg-opacity-80 text-black rounded p-2 text-sm shadow">
          Text 2
        </div>
        {/* Kästchen 3 */}
        <div className="bg-white bg-opacity-80 text-black rounded p-2 text-sm shadow">
          Text 3
        </div>
        {/* Kästchen 4 */}
        <div className="bg-white bg-opacity-80 text-black rounded p-2 text-sm shadow">
          Text 4
        </div>
      </div>
    </div>
  );
};

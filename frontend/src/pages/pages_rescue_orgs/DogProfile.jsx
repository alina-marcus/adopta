// Dummy-Daten für Demo
const dog = {
  id: 1,
  name: "Pip",
  location: "Köln, Deutschland",
  housing: "auf Pflegestelle",
  age: 8,
  height: 42,
  weight: 10,
  sex: "männlich",
  applications: 0,
  imageUrl:
    "https://hips.hearstapps.com/hmg-prod/images/small-dogs-norwich-terrier-6626b4b68616b.jpg?crop=0.532xw:0.916xh;0.162xw,0",
  updates: [
    {
      date: "June 20, 2025",
      text: "Pip has now settled in nicely in his foster home. He enjoys playing with the other dogs. Sometimes he gets anxious, but we are working on it.",
    },
    {
      date: "January 7, 2025",
      text: "Pip was found near a gas station in Málaga, Spain. He's very shy but with some patience will make a good family dog.",
    },
  ],
  characteristics: {
    neutered: "Yes",
    cats: "No",
    handicaps: "No",
  },
};

// Labels für die Tabelle (freundliche Namen statt Keys)
const labels = {
  neutered: "Neutered",
  cats: "Compatible with Cats",
  handicaps: "Handicaps",
};

export default function DogProfile() {
  return (
    <>
    <div className="p-6 pt-24 max-w-3xl mx-auto">
    <div className="relative w-full max-w-md mx-auto">
      {/* Bild */}
      <img
        src={dog.imageUrl}
        alt={dog.name}
        className="w-full h-auto rounded-lg"
      />

      {/* Container für die Kästchen */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-around p-4 gap-2">
        {/* Kästchen 1 */}
        <div className="bg-white bg-opacity-80 text-black rounded p-2 text-sm shadow">
          Alter:<br/>{dog.age} Jahre
        </div>
        {/* Kästchen 2 */}
        <div className="bg-white bg-opacity-80 text-black rounded p-2 text-sm shadow">
          Gewicht:<br/>{dog.weight} kg
        </div>
        {/* Kästchen 3 */}
        <div className="bg-white bg-opacity-80 text-black rounded p-2 text-sm shadow">
          Größe:<br/>{dog.height} cm
        </div>
        {/* Kästchen 4 */}
        <div className="bg-white bg-opacity-80 text-black rounded p-2 text-sm shadow">
          Geschlecht:<br/>{dog.sex}
        </div>
      </div>
    </div>

      {/* Header */}
      <h1 className="text-3xl font-bold mb-2">{dog.name}</h1>
      <p className="text-gray-600 mb-4">
        {dog.housing} | {dog.location}
      </p>

      {/* Aktionen */}
      <div className="flex justify-center gap-4">
        <button className="px-4 py-2 rounded-md bg-[#fa6a02] text-white hover:bg-[#a34502] transition">
          Edit
        </button>
        <button className="px-4 py-2 rounded-md bg-[#3C9A6B] text-white hover:bg-[#2f7752] transition">
          Share
        </button>
      </div>

      {/* Description / Timeline */}
      <h2 className="text-2xl font-semibold mb-2">Description</h2>
      <ul className="space-y-4 mb-8">
        {dog.updates.map((entry, idx) => (
          <li key={idx}>
            <p className="font-semibold">{entry.date}</p>
            <p>{entry.text}</p>
          </li>
        ))}
      </ul>

      {/* Characteristics */}
      <h2 className="text-2xl font-semibold mb-2">Characteristics</h2>
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <tbody>
          {Object.entries(dog.characteristics).map(([key, value], idx) => (
            <tr key={idx}>
              <td className="border border-gray-300 px-4 py-2 font-medium">
                {labels[key] || key}
              </td>
              <td className="border border-gray-300 px-4 py-2">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {/* <FooterLoggedOut /> */}
    </>
  );
}

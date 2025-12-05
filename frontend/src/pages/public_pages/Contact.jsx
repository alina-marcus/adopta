export default function Contact() {
  return (
    
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-6">Kontakt</h1>
      <p className="mb-8 text-gray-700">
        Du hast Fragen oder brauchst Unterstützung?  
        Schreib uns einfach eine Nachricht – wir melden uns so schnell wie möglich.
      </p>

      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Dein Name
          </label>
          <input
            id="name"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3C9A6B] focus:ring-[#3C9A6B]"
            placeholder="Max Mustermann"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Deine E-Mail
          </label>
          <input
            id="email"
            type="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3C9A6B] focus:ring-[#3C9A6B]"
            placeholder="max@beispiel.de"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Deine Nachricht
          </label>
          <textarea
            id="message"
            rows="4"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3C9A6B] focus:ring-[#3C9A6B]"
            placeholder="Schreib uns dein Anliegen..."
          />
        </div>

        <button
          type="submit"
          className="bg-[#fa6a02] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#a34502]"
        >
          Absenden
        </button>
      </form>
    </div>
    
  );
}

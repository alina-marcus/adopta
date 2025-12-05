import React, { useState } from "react";

export default function SignUpRescueOrg() {
  const [formData, setFormData] = useState({
    vereinName: "",
    ansprechpartner: "",
    email: "",
    telefon: "",
    adresse: "",
    plz: "",
    ort: "",
    website: "",
    gruendungsjahr: "",
    mitgliederzahl: "",
    beschreibung: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📋 Tierschutzverein registriert:", formData);
    alert("Anmeldung erfolgreich! (siehe Konsole)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Registrierung für Tierschutzvereine
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="vereinName" className="block font-semibold mb-1">
              Vereinsname
            </label>
            <input
              type="text"
              id="vereinName"
              name="vereinName"
              value={formData.vereinName}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="ansprechpartner" className="block font-semibold mb-1">
              Ansprechpartner
            </label>
            <input
              type="text"
              id="ansprechpartner"
              name="ansprechpartner"
              value={formData.ansprechpartner}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block font-semibold mb-1">
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>

            <div>
              <label htmlFor="telefon" className="block font-semibold mb-1">
                Telefonnummer
              </label>
              <input
                type="tel"
                id="telefon"
                name="telefon"
                value={formData.telefon}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
          </div>

          <div>
            <label htmlFor="adresse" className="block font-semibold mb-1">
              Adresse
            </label>
            <input
              type="text"
              id="adresse"
              name="adresse"
              value={formData.adresse}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="plz" className="block font-semibold mb-1">
                PLZ
              </label>
              <input
                type="text"
                id="plz"
                name="plz"
                value={formData.plz}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="ort" className="block font-semibold mb-1">
                Ort
              </label>
              <input
                type="text"
                id="ort"
                name="ort"
                value={formData.ort}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
          </div>

          <div>
            <label htmlFor="website" className="block font-semibold mb-1">
              Webseite
            </label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="gruendungsjahr" className="block font-semibold mb-1">
                Gründungsjahr
              </label>
              <input
                type="number"
                id="gruendungsjahr"
                name="gruendungsjahr"
                value={formData.gruendungsjahr}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>

            <div>
              <label htmlFor="mitgliederzahl" className="block font-semibold mb-1">
                Mitgliederzahl
              </label>
              <input
                type="number"
                id="mitgliederzahl"
                name="mitgliederzahl"
                value={formData.mitgliederzahl}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
          </div>

          <div>
            <label htmlFor="beschreibung" className="block font-semibold mb-1">
              Kurzbeschreibung
            </label>
            <textarea
              id="beschreibung"
              name="beschreibung"
              rows={4}
              value={formData.beschreibung}
              onChange={handleChange}
              placeholder="Beschreibe kurz den Zweck und die Aktivitäten des Vereins..."
              className="w-full border rounded-lg px-3 py-2"
            ></textarea>
          </div>

          <div className="pt-4 text-center">
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg shadow"
            >
              Jetzt registrieren
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

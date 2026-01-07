import { useState } from "react";

export default function HomeCheckReviewDetail() {
    const [formData, setFormData] = useState({
        homecheck_agreed: false,
        homecheck_date: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const applicant = {
        name: "Luisa Bauer",
        email: "luisabauer@gmail.com",
        phone: "015781774576",
    };

    const contactPerson = {
        name: "Gila Riehl",
        email: "gila.riehl@hundehilfe-grenzenlos.de",
        phone: "01701234567",
    };

    const address = {
        street: "Pillauer Straße 8",
        city: "12047 Berlin",
    };

    const fullAddress = `${address.street}, ${address.city}`;

    const copyToClipboard = async (value, successMessage) => {
        try {
            await navigator.clipboard.writeText(value);
            alert(successMessage);
        } catch {
            alert("Kopieren fehlgeschlagen.");
        }
    };

    const documents = {
        application: {
            label: "Bewerbung ansehen",
            url: "/documents/bewerbung-bina.pdf",
        },
        homecheck: {
            label: "Vorkontrollbogen ansehen",
            url: "/documents/vorkontrollbogen-bina.pdf",
        },
    };

    return (
        <main className="min-h-screen flex flex-col items-center px-4 space-y-8">
            <div className="w-full max-w-2xl space-y-8">
                <h1 className="text-2xl font-bold text-center">
                    Vorkontrolle für Bina
                </h1>

                {/* Tabelle */}
                <div className="overflow-x-auto">
                    <table className="w-full border border-white rounded-lg">
                        <thead>
                            <tr>
                                <th className="text-left px-4 py-3 font-medium">
                                    Interessent:in
                                </th>
                                <th className="text-left px-4 py-3 font-medium">
                                    {applicant.name}
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y">
                            <tr>
                                <td className="text-left px-4 py-3 font-medium">
                                    Kontakt (Interessent:in)
                                </td>
                                <td className="text-left px-4 py-3 space-y-3">
                                    <p>{applicant.email}</p>
                                    <p>{applicant.phone}</p>

                                    <div className="flex flex-col sm:flex-row gap-2">
                                        <button
                                            onClick={() =>
                                                copyToClipboard(
                                                    applicant.email,
                                                    "E-Mail-Adresse kopiert!"
                                                )
                                            }
                                            className="px-4 py-2 text-sm bg-gray-200 rounded-lg"
                                        >
                                            ✉️ E-Mail kopieren
                                        </button>

                                        <button
                                            onClick={() =>
                                                copyToClipboard(
                                                    applicant.phone,
                                                    "Telefonnummer kopiert!"
                                                )
                                            }
                                            className="px-4 py-2 text-sm bg-gray-200 rounded-lg"
                                        >
                                            📞 Telefonnummer kopieren
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className="text-left px-4 py-3 font-medium">
                                    Adresse
                                </td>
                                <td className="text-left px-4 py-3 space-y-3">
                                    <p>{address.street}</p>
                                    <p>{address.city}</p>

                                    <div className="flex flex-col sm:flex-row gap-2">
                                        <a
                                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg text-center"
                                        >
                                            📍 In Google Maps öffnen
                                        </a>

                                        <button
                                            onClick={() =>
                                                copyToClipboard(
                                                    fullAddress,
                                                    "Adresse kopiert!"
                                                )
                                            }
                                            className="px-4 py-2 text-sm bg-gray-200 rounded-lg"
                                        >
                                            📋 Adresse kopieren
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className="text-left px-4 py-3 font-medium">
                                    Ansprechpartner:in
                                </td>
                                <td className="text-left px-4 py-3">
                                    {contactPerson.name}
                                </td>
                            </tr>

                            <tr>
                                <td className="text-left px-4 py-3 font-medium">
                                    Kontakt (Verein)
                                </td>
                                <td className="text-left px-4 py-3 space-y-3">
                                    <p>{contactPerson.email}</p>
                                    <p>{contactPerson.phone}</p>

                                    <div className="flex flex-col sm:flex-row gap-2">
                                        <button
                                            onClick={() =>
                                                copyToClipboard(
                                                    contactPerson.email,
                                                    "E-Mail-Adresse kopiert!"
                                                )
                                            }
                                            className="px-4 py-2 text-sm bg-gray-200 rounded-lg"
                                        >
                                            ✉️ E-Mail kopieren
                                        </button>

                                        <button
                                            onClick={() =>
                                                copyToClipboard(
                                                    contactPerson.phone,
                                                    "Telefonnummer kopiert!"
                                                )
                                            }
                                            className="px-4 py-2 text-sm bg-gray-200 rounded-lg"
                                        >
                                            📞 Telefonnummer kopieren
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-left px-4 py-3 font-medium">
                                    Bewerbung
                                </td>
                                <td className="px-4 py-3">
                                    <a
                                        href={documents.application.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-4 py-2 text-sm bg-gray-200 rounded-lg hover:bg-gray-300"
                                    >
                                        📄 {documents.application.label}
                                    </a>
                                </td>
                            </tr>

                            <tr>
                                <td className="text-left px-4 py-3 font-medium">
                                    Vorkontrollbogen
                                </td>
                                <td className="px-4 py-3">
                                    <a
                                        href={documents.homecheck.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-4 py-2 text-sm bg-gray-200 rounded-lg hover:bg-gray-300"
                                    >
                                        📝 {documents.homecheck.label}
                                    </a>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

                {/* To-Dos */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">To-Dos</h2>
                    <div className="text-left ">
                        <p>Danke, dass du die Vorkontrolle übernimmst! Bitte mach als nächstes Folgendes: </p>
                        <ol>
                            <li>Schau dir den Interessentenbogen an</li>
                            <li>Vereinbare einen Termin mit den Interessenten</li>
                            <li>Gib dem Verein über den Button unten Bescheid, wann der Termin stattfindet</li>
                        </ol>
                    </div>
                    <Checkbox
                        name="homecheck_agreed"
                        label="Die Vorkontrolle wurde vereinbart"
                        checked={formData.homecheck_agreed}
                        onChange={handleChange}
                    />

                    <Field
                        label="Datum der Vorkontrolle"
                        name="homecheck_date"
                        type="date"
                        value={formData.homecheck_date}
                        onChange={handleChange}
                    />

                    <button className="px-8 py-3 bg-black text-white rounded-lg">
                        Termin an Tierschutzverein melden
                    </button>

                    <p className="text-sm text-gray-600">
                        Du bist verhindert und kannst die Vorkontrolle doch nicht durchführen? <br/>
                        Bitte gib dem Verein hier so schnell wie möglich Bescheid:
                    </p>

                    <button className="px-8 py-3 bg-white border border-gray-300 rounded-lg">
                        Absage an Tierschutzverein senden
                    </button>
                </section>
            </div>
        </main>
    );
}

function Checkbox({ name, label, checked, onChange }) {
  return (
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
}

function Field({ label, name, value, onChange, error, ...rest }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        {...rest}
        className={`w-full border p-2 rounded ${
          error ? "border-red-500" : ""
        }`}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
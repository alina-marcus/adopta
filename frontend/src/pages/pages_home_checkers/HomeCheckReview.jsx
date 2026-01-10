export default function HomeCheckReview() {
    const address = {
        street: "Pillauer Straße 8",
        city: "12047 Berlin",
    };

    const fullAddress = `${address.street}, ${address.city}`;

    const copyAddress = async () => {
        try {
            await navigator.clipboard.writeText(fullAddress);
            alert("Adresse wurde kopiert!");
        } catch {
            alert("Adresse konnte nicht kopiert werden.");
        }
    };

    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-2xl space-y-6">
                <h1>Vorkontrolle gesucht!</h1>

                <div className="overflow-x-auto">
                    <table className="w-full border border-white rounded-lg">
                        <thead>
                            <tr>
                                <th className="text-left px-4 py-3 font-medium">
                                    Name des Hundes
                                </th>
                                <th className="text-left px-4 py-3 font-medium">
                                    Bina
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y">
                            <tr>
                                <td className="text-left px-4 py-3 font-medium">
                                    Adresse
                                </td>
                                <td className="text-left px-4 py-3 space-y-3">
                                    <div>
                                        <p>{address.street}</p>
                                        <p>{address.city}</p>
                                    </div>

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
                                            onClick={copyAddress}
                                            className="px-4 py-2 text-sm bg-gray-200 rounded-lg"
                                        >
                                            📋 Adresse kopieren
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className="text-left px-4 py-3 font-medium">
                                    Deadline
                                </td>
                                <td className="text-left px-4 py-3">
                                    20.10.2026
                                </td>
                            </tr>

                            <tr>
                                <td className="text-left px-4 py-3 font-medium">
                                    Tierschutzverein
                                </td>
                                <td className="text-left px-4 py-3">
                                    Hundehilfe Grenzenlos e.V.
                                </td>
                            </tr>

                            <tr>
                                <td className="text-left px-4 py-3 font-medium">
                                    Zusätzliche Informationen
                                </td>
                                <td className="text-left px-4 py-3">
                                    Bitte darauf achten, dass die etwas ältere
                                    Interessentin noch gut mobil ist, um mit
                                    dem Hund noch gut Gassi gehen zu können.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="flex flex-col gap-3">
                    <button className="px-8 py-3 bg-black text-white rounded-lg">
                        Ich übernehme die Kontrolle
                    </button>

                    <button className="px-8 py-3 bg-white border border-gray-300 rounded-lg">
                        Diesmal nicht
                    </button>
                </div>
            </div>
        </main>
    );
}

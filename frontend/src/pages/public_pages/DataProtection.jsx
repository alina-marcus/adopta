export default function DataProtection() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>

      <p className="mb-4">
        Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Ihre Daten werden
        vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften
        sowie dieser Datenschutzerklärung behandelt.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Verantwortliche Stelle</h2>
      <p className="mb-4">
        Max Mustermann<br />
        Musterstraße 1<br />
        12345 Musterstadt<br />
        E-Mail: info@beispiel.de
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Erhebung und Verwendung von Daten</h2>
      <p className="mb-4">
        Wir erheben personenbezogene Daten nur, soweit dies zur Bereitstellung einer
        funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Ihre Rechte</h2>
      <p className="mb-4">
        Sie haben das Recht auf Auskunft über die bei uns gespeicherten Daten sowie
        ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie
        zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit
        an uns wenden.
      </p>

      <p className="mt-8 text-sm text-gray-600">
        Stand: {new Date().toLocaleDateString("de-DE")}
      </p>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function RescueOrgOverview() {
  return (
    <main className="px-6 py-8">
      <h1>Zeit sparen für deinen Tierschutzverein</h1>
      <p className="text-center max-w-2xl mx-auto mb-6">
        Tierschutzvereinsarbeit war noch nie so einfach. Mit Adopta sparst du Zeit, Nerven und deine Schützlinge finden sicher das richtige Zuhause.
      </p>

      <div className="text-center mb-12">
        <Link
          to="/tierschutzvereine/registrieren" 
          className="button-primary"
        >
          Jetzt anmelden
        </Link>
      </div>

      {/* Vorteile */}
      <section className="py-16 max-w-6xl mx-auto text-center">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-2 text-[#fa6a02]">Schneller Prozess</h3>
            <p>Vollständig digitalisiert an einem Ort</p>
          </div>
          <div className="p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-2 text-[#fa6a02]">DSGVO</h3>
            <p>Datenschutzkonform</p>
          </div>
          <div className="p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-2 text-[#fa6a02]">Von Tierschützern entwickelt</h3>
            <p>Mit Liebe für die Tiere</p>
          </div>
        </div>
      </section>

      {/* Funktionen */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2>Diese Funktionen bietet Adopta</h2>
        <ul className="space-y-4">
          <li>
            <h3>Mitgliederverwaltung</h3>
            <p>Mitglieder hinzufügen, entfernen, Hunden zuweisen.</p>
          </li>
          <li>
            <h3>Verwaltung von Hunden in der Vermittlung</h3>
            <p>Hunde hinzufügen, bearbeiten, entfernen, Profile inklusive Updates teilen, Mitgliedern zuweisen.</p>
          </li>
          <li>
            <h3>Interessentenbogen versenden</h3>
            <p>
              Standardisierte Online-Formulare, die sich leicht am PC, Tablet oder Handy öffnen und ausfüllen lassen.
              Kein Hin und Her per WhatsApp, E-Mail und Messenger mehr, alle Daten werden DSGVO-konform gespeichert und lassen sich leicht abrufen.
            </p>
          </li>
          <li>
            <h3>Vor- und Nachkontrollen finden</h3>
            <p>Deutschlandweites Netzwerk an Vor- und Nachkontrolleur:innen</p>
          </li>
          <li>
            <h3>Besser informierte Interessenten</h3>
            <p>lorem ipsum</p>
          </li>
        </ul>
      </section>
    </main>
  );
}

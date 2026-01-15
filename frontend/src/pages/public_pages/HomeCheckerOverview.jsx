import { Link } from "react-router-dom";

export default function HomeCheckerOverview() {
  return (
    <main className="px-6 py-10 max-w-4xl mx-auto text-black">
      {/* Header */}
      <header className="mb-10">
        <h1>
          Vor- und Nachkontrolleur:innen
        </h1>
        <p className="text-lg">
          Vor- und Nachkontrollen sind ein zentraler Bestandteil eines
          verantwortungsvollen Adoptionsprozesses. Als freiwillige:r
          Kontrolleur:in hilfst du dabei, Hunde in sichere und passende
          Lebensumstände zu vermitteln.
        </p>
      </header>

      {/* What is it */}
      <section className="mb-10">
        <h2>
          Was ist eine Vor- und Nachkontrolle?
        </h2>
        <p className="mb-3">
          Bei einer <strong>Vorkontrolle</strong> wird das zukünftige Zuhause
          eines Hundes vor der Adoption besucht oder online geprüft.
          Ziel ist es sicherzustellen, dass alle Angaben aus dem
          Adoptionsantrag korrekt sind und der Hund dort gut aufgehoben wäre.
        </p>
        <p>
          Eine <strong>Nachkontrolle</strong> findet nach der Adoption statt.
          Sie dient dazu, zu sehen, wie sich Hund und Mensch eingelebt haben
          und ob weiterer Unterstützungsbedarf besteht.
        </p>
      </section>

      {/* Process */}
      <section className="mb-10">
        <h2>Dein Ablauf als Kontrolleur:in</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Du erhältst eine Anfrage über Adopta.</li>
          <li>Du siehst die Angaben aus dem Adoptionsantrag.</li>
          <li>
            Du prüfst diese Punkte vor Ort oder per Video und markierst sie als
            <em>zutreffend</em>, <em>nicht zutreffend</em> oder
            <em> nicht geprüft</em>.
          </li>
          <li>
            Dein Bericht wird an den zuständigen Tierschutzverein übermittelt.
          </li>
        </ol>
      </section>

      {/* Why volunteer */}
      <section className="mb-10">
        <h2>
          Warum Vor- und Nachkontrollen so wichtig sind
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Schutz der Tiere vor ungeeigneten Haltungsbedingungen</li>
          <li>Unterstützung der Adoptant:innen bei offenen Fragen</li>
          <li>Transparenz und Vertrauen im Adoptionsprozess</li>
          <li>Langfristig erfolgreiche Vermittlungen</li>
        </ul>
      </section>

      {/* CTA */}
            <section className="border-t pt-8 text-center">
              <h2>
                Möchtest du helfen?
              </h2>
              <p className="mb-6">
                Vor- und Nachkontrolleur:innen arbeiten ehrenamtlich und leisten einen
                entscheidenden Beitrag zum Tierschutz. Du kannst selbst entscheiden,
                wie viele Kontrollen du übernehmen möchtest.
              </p>

              <Link
                to="/ehrenamt-im-tierschutz/registrieren"
                className="button-primary"
              >
                Als Vor- und Nachkontrolleur:in anmelden
              </Link>
            </section>
          </main>
        );
      }

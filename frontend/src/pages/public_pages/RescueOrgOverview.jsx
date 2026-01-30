import { Link } from "react-router-dom";

export default function RescueOrgOverview() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="px-6 pt-10 pb-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Copy */}
            <div>

              <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#4A2F1B] sm:text-5xl">
                Vermittlung organisieren - ohne Chaos in WhatsApp, E-Mails & Excel.
              </h1>

              <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#4A2F1B]/80">
                Adopta bündelt Hunde, Interessent:innen, Formulare und Aufgaben und ein deutschlandweites Netzwerk von Vor- und Nachkontrolleur:innen in einem System - damit ihr weniger
                Verwaltungsarbeit habt und eure Schützlinge schneller ins passende Zuhause finden.
              </p>

              {/* CTA + reassurance */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/tierschutzvereine/registrieren"
                  className="inline-flex items-center justify-center rounded-lg bg-[#fa6a02] px-5 py-3 text-base font-semibold text-white no-underline shadow-sm transition hover:brightness-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#fa6a02]/20"
                >
                  Jetzt kostenlos starten
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </Link>

                
              </div>

              {/* Proof / highlights */}
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <Highlight
                  title="Zeit sparen"
                  text="Weniger Copy/Paste, weniger Rückfragen."
                  icon={<IconClock className="h-5 w-5" />}
                />
                <Highlight
                  title="DSGVO-konform"
                  text="Daten sicher & zentral verwalten."
                  icon={<IconShield className="h-5 w-5" />}
                />
                <Highlight
                  title="Für Teams"
                  text="Mitglieder, Rollen & Zuweisungen."
                  icon={<IconUsers className="h-5 w-5" />}
                />
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-[#FFD8B3]/50" />
              <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1400&q=80"
                  alt="Hund schaut freundlich in die Kamera"
                  className="h-[320px] w-full object-cover sm:h-[380px]"
                  loading="lazy"
                />
              
              </div>
            </div>
            {/* end image */}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="px-6 pb-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-black/10 bg-white p-5">
          <div className="grid gap-4 md:grid-cols-3">
            <TrustItem
              title="Standardisierte Abläufe"
              text="Einheitliche Formulare & Schritte - weniger Fehler, weniger Nachfragen."
              icon={<IconFlow className="h-5 w-5" />}
            />
            <TrustItem
              title="Weniger Hin & Her"
              text="Alle Infos zu Hund & Interessent sind dort, wo sie hingehören."
              icon={<IconInbox className="h-5 w-5" />}
            />
            <TrustItem
              title="Transparenz im Team"
              text="Zuständigkeiten, Aufgaben und Status für alle sichtbar."
              icon={<IconClipboard className="h-5 w-5" />}
            />
          </div>
        </div>
      </section>

      {/* FEATURES (better organized) */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-[#4A2F1B]">
              Funktionen, die euch im Alltag wirklich entlasten
            </h2>
            <p className="mt-3 text-lg text-[#4A2F1B]/80">
              Nicht „noch ein Tool“, sondern ein klarer Ablauf von Hund → Anfrage → Prüfung → Vor-/Nachkontrolle → Adoption.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <FeatureCard
              title="Hunde in Vermittlung verwalten"
              text="Profile anlegen, Updates hinzufügen, Zuständigkeiten vergeben und alles sauber dokumentieren - ohne Suchen in Chats."
              icon={<IconPaw className="h-5 w-5" />}
            />
            <FeatureCard
              title="Mitglieder & Rollen"
              text="Teammitglieder hinzufügen, Aufgaben zuweisen und Zuständigkeiten transparent halten."
              icon={<IconUsers className="h-5 w-5" />}
            />
            <FeatureCard
              title="Interessentenbogen als Link"
              text="Standardisierte Online-Formulare, mobil ausfüllbar. Daten werden zentral gespeichert und bleiben nachvollziehbar."
              icon={<IconLink className="h-5 w-5" />}
            />
            <FeatureCard
              title="Vor- & Nachkontrollen einfacher organisieren"
              text="Schneller passende Kontrolleur:innen finden und den Status der Kontrollen im Blick behalten."
              icon={<IconMapPin className="h-5 w-5" />}
            />
            <FeatureCard
              title="Besser informierte Interessenten"
              text="Klare Infos, strukturierte Fragen und vollständige Unterlagen - das reduziert Absprünge und spart euch Rückfragen."
              icon={<IconInfo className="h-5 w-5" />}
            />
            <FeatureCard
              title="Datenschutz & Dokumentation"
              text="Alles an einem Ort, nachvollziehbar und DSGVO-bewusst organisiert."
              icon={<IconShield className="h-5 w-5" />}
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (CRO: process clarity) */}
      <section className="px-6 py-12 bg-[#FFD8B3]/35">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-[#4A2F1B]">So startet ihr in 3 Schritten</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <Step
              n="1"
              title="Registrieren"
              text="Verein anlegen und Teammitglieder einladen."
              icon={<IconUserPlus className="h-5 w-5" />}
            />
            <Step
              n="2"
              title="Hunde anlegen"
              text="Hundeprofile erstellen und Zuständigkeiten definieren."
              icon={<IconPaw className="h-5 w-5" />}
            />
            <Step
              n="3"
              title="Anfragen digital abwickeln"
              text="Interessentenbogen versenden, prüfen und Kontrollen koordinieren."
              icon={<IconCheck className="h-5 w-5" />}
            />
          </div>

          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Link
              to="/tierschutzvereine/registrieren"
              className="inline-flex items-center justify-center rounded-lg bg-[#fa6a02] px-5 py-3 text-base font-semibold text-white no-underline shadow-sm transition hover:brightness-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#fa6a02]/20"
            >
              Jetzt anmelden
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>
            <div className="text-sm text-[#4A2F1B]/70">
              Tipp: Starte mit einem Hundprofil - du siehst sofort den Flow.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (CRO: objection handling) */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-[#4A2F1B]">Häufige Fragen</h2>
            <p className="mt-3 text-lg text-[#4A2F1B]/80">
              Kurz beantwortet, damit ihr entscheiden könnt.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Faq
              q="Ist Adopta auch für kleine Vereine geeignet?"
              a="Ja. Gerade kleine Teams profitieren von klaren Abläufen und zentraler Dokumentation."
            />
            <Faq
              q="Brauchen Interessenten ein Konto?"
              a="Nein. Der Interessentenbogen kommt als Link und kann am Handy ausgefüllt werden."
            />
            <Faq
              q="Wie schnell können wir starten?"
              a="In wenigen Minuten: registrieren, Team einladen, ersten Hund anlegen."
            />
            <Faq
              q="Wie ist das mit Datenschutz?"
              a="Daten werden strukturiert gespeichert, statt unkontrolliert über Messenger und andere Apps verteilt zu sein."
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-14">
        <div className="mx-auto max-w-6xl rounded-3xl bg-white border border-black/10 p-8 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-[#4A2F1B]">
                Weniger Verwaltung. Mehr Zeit für die Tiere.
              </h2>
              <p className="mt-3 text-lg text-[#4A2F1B]/80">
                Starte jetzt und bring Struktur in Vermittlung, Kommunikation und Teamarbeit.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Link
                to="/tierschutzvereine/registrieren"
                className="inline-flex items-center justify-center rounded-lg bg-[#fa6a02] px-5 py-3 text-base font-semibold text-white no-underline shadow-sm transition hover:brightness-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#fa6a02]/20"
              >
                Jetzt kostenlos starten →
              </Link>
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center rounded-lg border border-black/10 bg-white px-5 py-3 text-base font-semibold text-[#4A2F1B] no-underline transition hover:bg-black/5 focus:outline-none focus-visible:ring-4 focus-visible:ring-black/10"
              >
                Demo anfragen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------------- Small UI building blocks ---------------- */

function Highlight({ title, text, icon }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white p-4">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFD8B3] text-[#4A2F1B]">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-sm font-semibold text-[#4A2F1B]">{title}</div>
        <div className="text-sm text-[#4A2F1B]/70">{text}</div>
      </div>
    </div>
  );
}

function TrustItem({ title, text, icon }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFD8B3] text-[#4A2F1B]">
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold text-[#4A2F1B]">{title}</div>
        <div className="text-sm text-[#4A2F1B]/70">{text}</div>
      </div>
    </div>
  );
}

function FeatureCard({ title, text, icon }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFD8B3] text-[#4A2F1B]">
          {icon}
        </div>
        <div>
          <div className="text-lg font-semibold text-[#4A2F1B]">{title}</div>
          <div className="mt-1 text-[#4A2F1B]/75">{text}</div>
        </div>
      </div>
    </div>
  );
}

function Step({ n, title, text, icon }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fa6a02] text-white">
          {icon}
        </div>
        <div className="text-sm font-semibold text-[#4A2F1B]/60">Schritt {n}</div>
      </div>
      <div className="mt-4 text-lg font-semibold text-[#4A2F1B]">{title}</div>
      <div className="mt-1 text-[#4A2F1B]/75">{text}</div>
    </div>
  );
}

function Faq({ q, a }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5">
      <div className="text-base font-semibold text-[#4A2F1B]">{q}</div>
      <div className="mt-2 text-[#4A2F1B]/75">{a}</div>
    </div>
  );
}

/* ---------------- Icons (inline, inherit currentColor) ---------------- */

function IconClock({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 8v5l3 2" />
      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function IconShield({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
      <path d="M12 3l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V7l8-4Z" />
      <path d="M9 12l2 2 4-5" />
    </svg>
  );
}

function IconUsers({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M16 11a4 4 0 1 0-8 0" />
      <path d="M4 20a6 6 0 0 1 16 0" />
      <path d="M17.5 7.5a3 3 0 1 1 0 6" />
    </svg>
  );
}

function IconSparkle({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
      <path d="M12 2l1.2 4.2L17 7.4l-3.8 1.2L12 13l-1.2-4.4L7 7.4l3.8-1.2L12 2Z" />
      <path d="M19 11l.7 2.3L22 14l-2.3.7L19 17l-.7-2.3L16 14l2.3-.7L19 11Z" />
    </svg>
  );
}

function IconCheck({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function IconMapPin({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11Z" />
      <path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </svg>
  );
}

function IconFlow({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 6h6v6H6zM12 12h6v6h-6z" />
      <path d="M12 9h3a3 3 0 0 1 3 3v0" />
    </svg>
  );
}

function IconInbox({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16v12H4z" />
      <path d="M4 16l4-5h3l1 2h4l1-2h3l4 5" />
    </svg>
  );
}

function IconClipboard({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 4h6l1 2h3v16H5V6h3l1-2Z" />
      <path d="M9 8h6" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
    </svg>
  );
}

function IconPaw({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 14c-3 0-5 2-5 4 0 1 1 2 2 2h6c1 0 2-1 2-2 0-2-2-4-5-4Z" />
      <path d="M9 10a1.6 1.6 0 1 0-3.2 0A1.6 1.6 0 0 0 9 10Z" />
      <path d="M18.2 10a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 3.2 0Z" />
    </svg>
  );
}

function IconLink({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.1 0l1.4-1.4a5 5 0 0 0 0-7.1 5 5 0 0 0-7.1 0L10.8 6" />
      <path d="M14 11a5 5 0 0 0-7.1 0L5.5 12.4a5 5 0 0 0 0 7.1 5 5 0 0 0 7.1 0L13.2 18" />
    </svg>
  );
}

function IconInfo({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 18v-6" />
      <path d="M12 8h.01" />
      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function IconUserPlus({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M16 21a6 6 0 0 0-12 0" />
      <path d="M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M19 8v6" />
      <path d="M22 11h-6" />
    </svg>
  );
}

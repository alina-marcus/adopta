import { Link } from "react-router-dom";

export default function HomeCheckerOverview() {
  return (
    <main className="bg-white text-[#4A2F1B]">
      {/* HERO */}
      <section className="px-6 pt-10 pb-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Copy */}
            <div>

              <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                Hilf mit, dass Hunde in ein wirklich passendes Zuhause kommen.
              </h1>

              <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#4A2F1B]/80">
                Als Vor- oder Nachkontrolleur:in schaust du hin, wo es zählt: Du prüfst die
                Haltungsbedingungen, gibst Sicherheit - und unterstützt Tierschutzvereine dabei,
                verantwortungsvoll zu vermitteln.
              </p>

              {/* CTA + reassurance */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/ehrenamt-im-tierschutz/registrieren"
                  className="inline-flex items-center justify-center rounded-lg bg-[#fa6a02] px-5 py-3 text-base font-semibold text-white no-underline shadow-sm transition hover:brightness-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#fa6a02]/20"
                >
                  Jetzt als Kontrolleur:in anmelden
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </Link>

                <div className="text-sm text-[#4A2F1B]/70">
                  Flexibel • Du entscheidest selbst, wie oft du hilfst
                </div>
              </div>

              {/* Value bullets */}
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <Highlight
                  title="Sinnvolles Ehrenamt"
                  text="Direkter Impact für Tier & Mensch."
                  icon={<IconHeart className="h-5 w-5" />}
                />
                <Highlight
                  title="Klare Checkliste"
                  text="Strukturierte Punkte statt Bauchgefühl."
                  icon={<IconChecklist className="h-5 w-5" />}
                />
                <Highlight
                  title="Sicher & nachvollziehbar"
                  text="Bericht digital an den Verein."
                  icon={<IconShield className="h-5 w-5" />}
                />
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-[#FFD8B3]/50" />
              <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1400&q=80"
                  alt="Hund und Mensch in einer ruhigen, vertrauensvollen Situation"
                  className="h-[320px] w-full object-cover sm:h-[380px]"
                  loading="lazy"
                />
              </div>

              
            </div>
            {/* end image */}
          </div>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold">Was ist eine Vor- und Nachkontrolle?</h2>
            <p className="mt-3 text-lg text-[#4A2F1B]/80">
              Kontrollen geben Tierschutzvereinen Sicherheit und helfen Adoptant:innen, gut vorbereitet zu sein.
              Das Ziel ist nicht „perfekt“, sondern passend und verantwortungsvoll.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <InfoCard
              title="Vorkontrolle (vor der Adoption)"
              text="Du prüfst das zukünftige Zuhause - vor Ort oder online - und gleichen die Angaben aus dem Antrag ab. So lassen sich Missverständnisse früh klären."
              icon={<IconSearch className="h-5 w-5" />}
            />
            <InfoCard
              title="Nachkontrolle (nach der Adoption)"
              text="Du schaust nach, wie es Mensch und Hund geht, ob alles gut klappt und ob es Unterstützungsbedarf gibt. Das stärkt langfristige Vermittlungen."
              icon={<IconPaw className="h-5 w-5" />}
            />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-12 bg-[#FFD8B3]/35">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold">So läuft es für dich ab</h2>
            <p className="mt-3 text-lg text-[#4A2F1B]/80">
              Klarer Ablauf, wenig Aufwand: Du bekommst eine Anfrage, prüfst anhand einer Checkliste und sendest deinen Bericht digital zurück.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-4">
            <Step
              n="1"
              title="Anfrage erhalten"
              text="Ein Verein fragt dich über Adopta an."
              icon={<IconInbox className="h-5 w-5" />}
            />
            <Step
              n="2"
              title="Infos ansehen"
              text="Du entscheidest, ob du Zeit für die Kontrolle hast."
              icon={<IconDoc className="h-5 w-5" />}
            />
            <Step
              n="3"
              title="Prüfen & markieren"
              text="Vor Ort: Checkliste abhaken."
              icon={<IconChecklist className="h-5 w-5" />}
            />
            <Step
              n="4"
              title="Bericht senden"
              text="Digital an den zuständigen Verein."
              icon={<IconSend className="h-5 w-5" />}
            />
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold">Warum das so wichtig ist</h2>
            <p className="mt-3 text-lg text-[#4A2F1B]/80">
              Kontrollen schützen Tiere, vermeiden Fehlvermittlungen und geben Adoptant:innen Rückhalt.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Benefit
              title="Schutz der Tiere"
              text="Ungeeignete Haltungsbedingungen werden früh erkannt."
              icon={<IconShield className="h-5 w-5" />}
            />
            <Benefit
              title="Sicherheit für Adoptant:innen"
              text="Offene Fragen klären, passende Lösungen finden."
              icon={<IconInfo className="h-5 w-5" />}
            />
            <Benefit
              title="Transparenz für Vereine"
              text="Nachvollziehbare, strukturierte Berichte statt Bauchgefühl."
              icon={<IconClipboard className="h-5 w-5" />}
            />
            <Benefit
              title="Langfristig erfolgreiche Vermittlungen"
              text="Mehr Stabilität, weniger Rückgaben, mehr Vertrauen."
              icon={<IconCheck className="h-5 w-5" />}
            />
          </div>
        </div>
      </section>

      {/* OBJECTIONS / FAQ */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold">Häufige Fragen</h2>
            <p className="mt-3 text-lg text-[#4A2F1B]/80">
              Damit du genau weißt, worauf du dich einlässt.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Faq
              q="Muss ich das oft machen?"
              a="Nein. Du entscheidest selbst, wie viele Anfragen du annimmst. Auch einzelne Kontrollen helfen."
            />
            <Faq
              q="Brauche ich Erfahrung?"
              a="Hilfreich, aber kein Muss. Du arbeitest mit klaren Punkten und kannst Rückfragen an den Verein stellen."
            />
            <Faq
              q="Wie lange dauert eine Kontrolle?"
              a="Im Normalfall benötigst du für eine Vor- oder Nachkontrolle ca. 30 - 45 Minuten."
            />
            <Faq
              q="Ist das sicher?"
              a="Du nimmst nur an, was sich gut anfühlt. Adopta sorgt für strukturierte Infos und klare Kommunikation."
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-14">
        <div className="mx-auto max-w-6xl rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold">Möchtest du helfen?</h2>
              <p className="mt-3 text-lg text-[#4A2F1B]/80">
                Vor- und Nachkontrolleur:innen leisten einen entscheidenden Beitrag zum Tierschutz.
                Du bestimmst dein Tempo - wir geben dir Struktur.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Link
                to="/ehrenamt-im-tierschutz/registrieren"
                className="inline-flex items-center justify-center rounded-lg bg-[#fa6a02] px-5 py-3 text-base font-semibold text-white no-underline shadow-sm transition hover:brightness-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#fa6a02]/20"
              >
                Als Kontrolleur:in anmelden →
              </Link>
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center rounded-lg border border-black/10 bg-white px-5 py-3 text-base font-semibold text-[#4A2F1B] no-underline transition hover:bg-black/5 focus:outline-none focus-visible:ring-4 focus-visible:ring-black/10"
              >
                Fragen stellen
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
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFD8B3]">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-sm text-[#4A2F1B]/70">{text}</div>
      </div>
    </div>
  );
}

function InfoCard({ title, text, icon }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFD8B3]">
          {icon}
        </div>
        <div>
          <div className="text-lg font-semibold">{title}</div>
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
      <div className="mt-4 text-lg font-semibold">{title}</div>
      <div className="mt-1 text-[#4A2F1B]/75">{text}</div>
    </div>
  );
}

function Benefit({ title, text, icon }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFD8B3]">
          {icon}
        </div>
        <div>
          <div className="text-lg font-semibold">{title}</div>
          <div className="mt-1 text-[#4A2F1B]/75">{text}</div>
        </div>
      </div>
    </div>
  );
}

function Faq({ q, a }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5">
      <div className="text-base font-semibold">{q}</div>
      <div className="mt-2 text-[#4A2F1B]/75">{a}</div>
    </div>
  );
}

/* ---------------- Icons (inline, inherit currentColor) ---------------- */

function IconHeart({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.5 8.5c0 6-8.5 11-8.5 11S3.5 14.5 3.5 8.5a4.5 4.5 0 0 1 8.5-2 4.5 4.5 0 0 1 8.5 2Z" />
    </svg>
  );
}

function IconChecklist({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 6h11M9 12h11M9 18h11" />
      <path d="M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2" />
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

function IconHome({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l9-8 9 8" />
      <path d="M5 10v10h14V10" />
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

function IconClock({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 8v5l3 2" />
      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function IconSearch({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" />
      <path d="M16.5 16.5 21 21" />
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

function IconInbox({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16v12H4z" />
      <path d="M4 16l4-5h3l1 2h4l1-2h3l4 5" />
    </svg>
  );
}

function IconDoc({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 3h7l3 3v15H7z" />
      <path d="M14 3v4h4" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
    </svg>
  );
}

function IconSend({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
    </svg>
  );
}

function IconClipboard({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 4h6l1 2h3v16H5V6h3l1-2Z" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
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

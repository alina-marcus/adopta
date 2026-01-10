import FooterLoggedOut from "../../components/footers/FooterLoggedOut";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="text-[#1E1E1E] font-sans">
      {/* Hero Section */}
      <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1>Adopta</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Ein transparenter, sicherer und einfacher Adoptionsprozess - für Tierschutzvereine, Interessenten und Pflegestellen.
            </p>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://www.petsmont.com/blogs/pets/common-issues-with-a-dog-snout?srsltid=AfmBOoqQRDe80VCOfjPcP6Kt3Ufy13SS9g4sbBR94sBb6lRcwlX7TQNt" alt="dog snout"/>
        </div>                
    </div>
</section>
      <section className="py-20 text-center">
        {/* Button container with flex */}
        <div className="flex justify-center gap-4">
          <Link to="/tierschutzvereine">
            <button className="px-6 py-3 rounded-xl font-semibold shadow hover:bg-[#a34502]">
              Für Tierschutzvereine
            </button>
          </Link>
          <Link to="/adoptanten">
            <button className="px-6 py-3 rounded-xl font-semibold shadow hover:bg-[#a34502]">
              Hunde suchen
            </button>
          </Link>
          <Link to="/ehrenamt-im-tierschutz">
            <button className="px-6 py-3 rounded-xl font-semibold shadow hover:bg-[#a34502]">
              Vor- und Nachkontrolleur:in werden
            </button>
          </Link>
        </div>
      </section>

      {/* Why Adopta */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2>Warum Adopta?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl shadow">
            <h3>Schneller Prozess</h3>
            <p>Vereinfachte Bewerbungen reduzieren Zeit und Verwirrung.</p>
          </div>
          <div className="p-6 rounded-xl shadow">
            <h3>Transparent</h3>
            <p>Verifizierte Vorkontrollen für maximale Sicherheit im Adoptionsprozess.</p>
          </div>
          <div className="p-6 rounded-xl shadow">
            <h3>Bessere Matches</h3>
            <p>Mit Sicherheit das richtige Zuhause für Hunde - für immer.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2>So funktioniert es</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-[#FFD8B3] p-6 rounded-xl shadow">
            <div className="text-[#fa6a02] text-4xl mb-2">1</div>
            <h3>Bewerbung</h3>
            <p className="text-sm">Umfangreiche Bewerbungsformulare online.</p>
          </div>
          <div className="bg-[#FFD8B3] p-6 rounded-xl shadow">
            <div className="text-[#fa6a02] text-4xl mb-2">2</div>
            <h3>Vorkontrolle</h3>
            <p className="text-sm">Sorgfältige Überprüfung der Interessenten.</p>
          </div>
          <div className="bg-[#FFD8B3] p-6 rounded-xl shadow">
            <div className="text-[#fa6a02] text-4xl mb-2">3</div>
            <h3>Bestätigung</h3>
            <p className="text-sm">Bewerbungen werden fair und schnell geprüft.</p>
          </div>
          <div className="bg-[#FFD8B3] p-6 rounded-xl shadow">
            <div className="text-[#fa6a02] text-4xl mb-2">4</div>
            <h3>Adoption</h3>
            <p className="text-sm">Immer alles im Blick für das perfekte Zuhause.</p>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2>Für wen ist Adopta?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-[#FFD8B3] rounded-xl shadow hover:shadow-lg">
            <h3>Adoptanten & Pflegestellen</h3>
            <p className="text-sm">
              Einfach online bewerben für einen klaren Prozess von Anfang bis Ende.
            </p>
          </div>
          <div className="p-6 bg-[#FFD8B3] rounded-xl shadow hover:shadow-lg">
            <h3>Tierschutzvereine</h3>
            <p className="text-sm">
              Bewerbungen, Vor- und Nachkontrollen und Hunde verwalten - alles an einem Ort, ohne Papierkram.
            </p>
          </div>
          <div className="p-6 bg-[#FFD8B3] rounded-xl shadow hover:shadow-lg">
            <h3>Vor- und Nachkontrolleure</h3>
            <p className="text-sm">
              Die schönste Freiwilligenarbeit: Hunden helfen, das perfekte Zuhause zu finden.
            </p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <FooterLoggedOut />
    </div>
  );
}

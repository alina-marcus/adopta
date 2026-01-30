import { Link } from "react-router-dom";

export default function FooterLoggedOut() {
  return (
    <footer className="bg-gray-100 text-gray-900 px-10 py-14 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        
        {/* Logo + Claim */}
        <div className="space-y-2">
          <p className="font-bold text-xl tracking-tight">Adopta</p>
          <p className="text-sm text-gray-600">
            Aus der Not ins Für-Immer-Zuhause
          </p>
        </div>

        {/* Services */}
        <div>
          <h6 className="font-semibold text-sm uppercase tracking-wide mb-4 text-gray-700">
            Services
          </h6>
          <ul className="list-none space-y-3 text-sm text-left">
            <li>
              <Link
                to="/services/tierschutz"
                className="text-gray-600 hover:text-black transition"
              >
                Tierschutzvereine
              </Link>
            </li>
            <li>
              <Link
                to="/services/adoptanten"
                className="text-gray-600 hover:text-black transition"
              >
                Adoptanten
              </Link>
            </li>
            <li>
              <Link
                to="/services/kontrolle"
                className="text-gray-600 hover:text-black transition"
              >
                Vor- & Nachkontrolleur:innen
              </Link>
            </li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h6 className="font-semibold text-sm uppercase tracking-wide mb-4 text-gray-700">
            Über Adopta
          </h6>
          <ul className="list-none space-y-3 text-sm text-left">
            <li>
              <Link to="/kontakt" className="text-gray-600 hover:text-black transition">
                Kontakt
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-gray-600 hover:text-black transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/ueber" className="text-gray-600 hover:text-black transition">
                Über uns
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="font-semibold text-sm uppercase tracking-wide mb-4 text-gray-700">
            Rechtliches
          </h6>
          <ul className="list-none space-y-3 text-sm text-left">
            <li>
              <Link to="/impressum" className="text-gray-600 hover:text-black transition">
                Impressum
              </Link>
            </li>
            <li>
              <Link to="/datenschutz" className="text-gray-600 hover:text-black transition">
                Datenschutz
              </Link>
            </li>
            <li>
              <Link to="/agb" className="text-gray-600 hover:text-black transition">
                AGB
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-14 pt-6 border-t border-gray-200 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Adopta · Alle Rechte vorbehalten
      </div>
    </footer>
  );
}

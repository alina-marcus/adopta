import { Link } from "react-router-dom";

export default function FooterLoggedOut() {
  return (
    <footer className="bg-gray-100 text-gray-900 px-10 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Logo + Claim */}
        <div>
          <p className="font-bold text-lg">Adopta</p>
          <p className="text-sm">Forever homes</p>
        </div>

        {/* Services */}
        <div>
          <h6 className="font-semibold mb-3">Services</h6>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services/tierschutz" className="hover:underline">Tierschutzvereine</Link></li>
            <li><Link to="/services/adoptanten" className="hover:underline">Adoptanten</Link></li>
            <li><Link to="/services/kontrolle" className="hover:underline">Vor- und Nachkontrolleur:innen</Link></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h6 className="font-semibold mb-3">Über Adopta</h6>
          <ul className="space-y-2 text-sm">
            <li><Link to="/kontakt" className="hover:underline">Kontakt</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link to="/ueber" className="hover:underline">Über uns</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="font-semibold mb-3">Legal</h6>
          <ul className="space-y-2 text-sm">
            <li><Link to="/impressum" className="hover:underline">Impressum</Link></li>
            <li><Link to="/datenschutz" className="hover:underline">Datenschutz</Link></li>
            <li><Link to="/agb" className="hover:underline">AGB</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Adopta. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}

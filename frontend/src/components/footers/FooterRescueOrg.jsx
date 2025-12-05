import { Link } from "react-router-dom";

export default function FooterRescueOrg() {
  return (
    <nav>
      <Link to="/ueberblick" className="link link-hover">HOME</Link>
      <Link to="/tsv/meine-hunde" className="link link-hover">HUNDE</Link>
      <Link to="/profil" className="link link-hover">PROFIL</Link>
    </nav>
  );
}



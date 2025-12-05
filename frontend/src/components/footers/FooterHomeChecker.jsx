import { Link } from "react-router-dom";

export default function FooterHomeChecker() {
  return (
    <nav>
      <Link to="/vor-und-nachkontrollen" className="link link-hover">HOME</Link>
      <Link to="/adoptanten" className="link link-hover">PROFILE</Link>
    </nav>
  );
}

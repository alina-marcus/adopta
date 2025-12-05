import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Seite nicht gefunden</p>
      <Link
        to="/"
        className="bg-[#fa6a02] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#a34502]"
      >
        Zur Startseite
      </Link>
    </div>
  );
}

import { useEffect, useMemo, useState } from "react";
import Footer from "../../components/footers/FooterRescueOrg";

const rescueOrgId = 1; // TODO: später aus Auth / Context

export default function RescueOrgDash() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    async function loadApplications() {
      try {
        const res = await fetch("http://localhost:5001/applications");
        const data = await res.json();

        const filtered = data.filter(
          (app) => app.dog?.rescue_org_id === rescueOrgId
        );

        setApplications(filtered);
      } catch (err) {
        console.error("Fehler beim Laden der Bewerbungen", err);
      } finally {
        setLoading(false);
      }
    }

    loadApplications();
  }, []);

  const visibleItems = useMemo(() => {
    switch (filter) {
      case "applications":
        return applications;
      case "pre":
        return []; // TODO: Vorkontrollen
      case "post":
        return []; // TODO: Nachkontrollen
      default:
        return applications;
    }
  }, [filter, applications]);

  function timeAgo(dateString) {
    const diff =
      (Date.now() - new Date(dateString)) / (1000 * 60 * 60 * 24);

    if (diff < 1) return "heute";
    if (diff < 2) return "gestern";
    return `vor ${Math.floor(diff)} Tagen`;
  }

  return (
    <>
      <h1>Aufgaben</h1>

      {/* Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setFilter("all")}
          className={filter === "all" ? "pill-primary" : "pill-secondary"}
        >
          Alle
        </button>

        <button
          onClick={() => setFilter("applications")}
          className={
            filter === "applications"
              ? "pill-primary"
              : "pill-secondary"
          }
        >
          Bewerbungen
        </button>

        <button
          onClick={() => setFilter("pre")}
          className={filter === "pre" ? "pill-primary" : "pill-secondary"}
        >
          Vorkontrollen
        </button>

        <button
          onClick={() => setFilter("post")}
          className={filter === "post" ? "pill-primary" : "pill-secondary"}
        >
          Nachkontrollen
        </button>
      </div>

      {loading && <p>Lade Aufgaben…</p>}

      {!loading && visibleItems.length === 0 && (
        <p className="text-gray-600">Keine Aufgaben vorhanden</p>
      )}

      {/* Liste */}
      <ul className="space-y-4">
        {visibleItems.map((app) => (
          <li
            key={app.id}
            className="flex items-center justify-between p-4 bg-white shadow rounded-lg"
          >
            {/* Links */}
            <div className="flex items-center gap-4">
              <img
                src={app.dog?.profile_image_url || "/placeholder-dog.jpg"}
                alt={app.dog?.dog_name}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="font-semibold text-black">
                    Neue Bewerbung
                  </span>
                  <span>{timeAgo(app.created_at)}</span>
                </div>
                <p className="text-sm text-gray-800">
                  {app.dog?.dog_name} hat eine neue Bewerbung
                </p>
              </div>
            </div>

            {/* Rechts */}
            <button className="pill-primary">Ansehen</button>
          </li>
        ))}

        {/*
        =================================
        ZUKÜNFTIG: HOME CHECK FEEDBACK
        =================================

        <li className="flex items-center justify-between p-4 bg-white shadow rounded-lg">
          <div>Vorkontrolle abgeschlossen</div>
          <button className="pill-secondary">Ansehen</button>
        </li>
        */}
      </ul>

      <Footer />
    </>
  );
}

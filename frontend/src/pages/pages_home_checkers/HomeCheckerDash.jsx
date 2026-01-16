import { useEffect, useMemo, useState } from "react";

export default function HomeCheckerDash() {
  const [calls, setCalls] = useState([]);
  const [filter, setFilter] = useState("all"); // all | pre | post
  const [loading, setLoading] = useState(true);

  // Mock data for home checker
  const homeChecker = {
    postal_code: "12051",
    city: "Berlin",
  };

  useEffect(() => {
    async function loadCalls() {
      const res = await fetch("http://localhost:5001/home-check-calls");
      const data = await res.json();
      setCalls(data);
      setLoading(false);
    }

    loadCalls();
  }, []);

  function daysAgo(dateString) {
    const created = new Date(dateString);
    const now = new Date();
    const diffDays = Math.floor((now - created) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "heute";
    if (diffDays === 1) return "gestern";
    return `vor ${diffDays} Tagen`;
  }

  function isExpired(call) {
    const created = new Date(call.created_at);
    const now = new Date();
    const diffDays = (now - created) / (1000 * 60 * 60 * 24);
    return diffDays > 3 || call.status !== "open";
  }

  // FILTERN + SORTIEREN
  const visibleCalls = useMemo(() => {
    return calls
      .filter(
        (c) =>
          c.dog.postal_code === homeChecker.postal_code &&
          c.dog.city === homeChecker.city
      )
      .filter((c) => (filter === "all" ? true : c.type === filter))
      .sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
  }, [calls, filter]);

  if (loading) {
    return <p className="text-center mt-10">Lade Aufgaben…</p>;
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <h1>Aufgaben</h1>

      {/* FILTER */}
      <div className="flex gap-2 mb-8">
        {[
          { key: "all", label: "Alle" },
          { key: "pre", label: "Vorkontrollen" },
          { key: "post", label: "Nachkontrollen" },
        ].map((btn) => (
          <button
            key={btn.key}
            onClick={() => setFilter(btn.key)}
            className={`px-4 py-2 rounded-md transition ${
              filter === btn.key
                ? "bg-black text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* LISTE */}
      <ul className="space-y-4">
        {visibleCalls.map((call) => {
          const expired = isExpired(call);

          return (
            <li
              key={call.id}
              className={`flex items-center gap-4 p-4 rounded-xl border transition ${
                expired
                  ? "bg-gray-100 opacity-50"
                  : "bg-white hover:shadow-md"
              }`}
            >
              {/* FOTO */}
              <img
                src={call.dog.image_url}
                alt={call.dog.name}
                className="w-16 h-16 rounded-full object-cover"
              />

              {/* TEXT */}
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <p className="font-semibold">
                    {call.type === "pre"
                      ? "Vorkontrolle gesucht"
                      : "Nachkontrolle gesucht"}
                  </p>
                  <span className="text-sm text-gray-500">
                    {daysAgo(call.created_at)}
                  </span>
                </div>

                <p className="text-gray-600">
                  {call.dog.postal_code} {call.dog.city}
                </p>
              </div>

              {/* BUTTON */}
              <button
                disabled={expired}
                className={`button-primary ${
                  expired ? "cursor-not-allowed bg-gray-400" : ""
                }`}
              >
                {expired ? "abgelaufen" : "Ansehen"}
              </button>
            </li>
          );
        })}

        {visibleCalls.length === 0 && (
          <p className="text-center text-gray-500">
            Aktuell keine passenden Aufgaben
          </p>
        )}
      </ul>
    </main>
  );
}

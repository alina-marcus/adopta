import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomeCheckerSignup() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  }



  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("http://localhost:5001/home_checkers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      alert("Registrierung erfolgreich");
      navigate(`/vor-und-nachkontrollen/${result.id}`);

      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
      });
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <main className="max-w-xl mx-auto px-6 py-10">
      <h1>Anmeldung als Vor- und Nachkontrolleur:in</h1>

      {success && (
        <p className="mb-4">
          Vielen Dank! Deine Anmeldung wurde erfolgreich übermittelt.
        </p>
      )}

      {error && <p className="mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Vorname *</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Nachname *</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">E-Mail</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Telefonnummer</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-3 border border-black rounded hover:bg-black hover:text-white transition"
        >
          Anmeldung absenden
        </button>
      </form>
    </main>
  );
}

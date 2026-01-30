import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpRescueOrg() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    org_name: "",
    contact_name: "",
    contact_email: "",
    contact_phone: "",
    address_line: "",
    postal_code: "",
    city: "",
    website: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5001/rescue-organizations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          is_nonprofit: true,
          has_animal_protection_license: false,
        }),
      });

      if (!res.ok) {
        throw new Error(`Response ${res.status}`);
      }

      await res.json();

      alert("Registrierung erfolgreich!");
      navigate("/tsv/meine-hunde");
    } catch (err) {
      console.error(err);
      alert("Error while saving rescue organization");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Registrierung für Tierschutzvereine
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="Vereinsname" name="org_name" value={formData.org_name} onChange={handleChange} />
          <Input label="Ansprechpartner" name="contact_name" value={formData.contact_name} onChange={handleChange} />
          <Input label="E-Mail" type="email" name="contact_email" value={formData.contact_email} onChange={handleChange} />
          <Input label="Telefonnummer" name="contact_phone" value={formData.contact_phone} onChange={handleChange} />
          <Input label="Adresse" name="address_line" value={formData.address_line} onChange={handleChange} />
          <Input label="PLZ" name="postal_code" value={formData.postal_code} onChange={handleChange} />
          <Input label="Ort" name="city" value={formData.city} onChange={handleChange} />
          <Input label="Webseite" name="website" value={formData.website} onChange={handleChange} />

          <div>
            <label className="block font-semibold mb-1">Kurzbeschreibung</label>
            <textarea
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="button-primary"
          >
            Jetzt registrieren
          </button>
        </form>
      </div>
    </div>
  );
}

/* ---------- HELPER ---------- */
function Input({ label, ...props }) {
  return (
    <div>
      <label className="block font-semibold mb-1">{label}</label>
      <input {...props} className="w-full border rounded-lg px-3 py-2" />
    </div>
  );
}

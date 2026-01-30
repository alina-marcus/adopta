// /Users/alinamarcus/adopta/frontend/src/components/navbars/InternalNavRescueOrg.jsx
import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router-dom";

const BRAND_ORANGE = "#fa6a02";
const BRAND_BROWN = "#4A2F1B";

export default function InternalNavRescueOrg() {
  const [open, setOpen] = useState(false);
  const buttonId = useId();
  const menuId = useId();
  const wrapperRef = useRef(null);

  useEffect(() => {
    function onPointerDown(e) {
      if (!open) return;
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setOpen(false);
    }
    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  useEffect(() => {
    function onKeyDown(e) {
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const items = [
    { label: "Meine Hunde", to: "/tsv/meine-hunde", icon: IconPaw },
    { label: "Aufgaben", to: "/tsv/ueberblick", icon: IconChecklist },
    { label: "Einstellungen", to: "/einstellungen", icon: IconGear },
  ];

  return (
    <div ref={wrapperRef} className="relative">
      {/* Burger: no bg, no border, no hover, no visible focus ring */}
      <button
        type="button"
        id={buttonId}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className="p-0 m-0 bg-transparent border-0 outline-none focus:outline-none"
        style={{ color: BRAND_BROWN }}
      >
        <span className="sr-only">Menü öffnen</span>
        <IconBurgerLines className="h-6 w-6" />
      </button>

      {/* Desktop flyout */}
      <div
        id={menuId}
        role="menu"
        aria-labelledby={buttonId}
        className={[
          "absolute right-0 top-[calc(100%+0.5rem)] z-50",
          "hidden md:block",
          open
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-1",
          "transition-all duration-150 ease-out",
        ].join(" ")}
      >
        <div className="w-80 overflow-hidden rounded-xl bg-white shadow-lg">
          <MenuContent items={items} onNavigate={() => setOpen(false)} />
        </div>
      </div>

      {/* Mobile bottom sheet */}
      <div
        className={[
          "md:hidden fixed inset-0 z-50",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
          "transition-opacity duration-150",
        ].join(" ")}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />

        <div
          role="dialog"
          aria-modal="true"
          className={[
            "absolute bottom-0 left-0 right-0",
            "bg-white rounded-t-2xl shadow-2xl",
            "p-4",
            open ? "translate-y-0" : "translate-y-full",
            "transition-transform duration-200 ease-out",
          ].join(" ")}
        >
          <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-black/10" />
          <div className="overflow-hidden rounded-xl">
            <MenuContent items={items} onNavigate={() => setOpen(false)} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuContent({ items, onNavigate }) {
  return (
    <nav className="p-3 flex flex-col gap-1">
      {items.map((it) => {
        const Icon = it.icon;
        return (
          <Link
            key={it.label}
            to={it.to}
            onClick={onNavigate}
            className={[
              "flex items-center gap-3",
              "px-3 py-3",
              "text-lg",
              "rounded-lg",
              "no-underline",
              "transition",
              // palette coupling:
              "text-[#4A2F1B]",
              "hover:bg-[#FFD8B3]/60", // subtle orange tint
            ].join(" ")}
          >
            <Icon className="h-5 w-5 opacity-80 shrink-0" />
            <span className="truncate">{it.label}</span>
          </Link>
        );
      })}

      <div className="my-2 h-px bg-black/10" />

      {/* CTA: orange, contained, no overflow */}
      <Link
        to="/tsv/hinzufuegen"
        onClick={onNavigate}
        className={[
          "w-full min-w-0 overflow-hidden",
          "flex items-center justify-between gap-3",
          "px-3 py-3",
          "text-lg font-semibold",
          "rounded-lg",
          "no-underline",
          "text-white",
          "transition",
        ].join(" ")}
        style={{ backgroundColor: BRAND_ORANGE }}
      >
        <span className="flex items-center gap-2 min-w-0">
          <IconPlus className="h-5 w-5 shrink-0" />
          <span className="truncate">Hund hinzufügen</span>
        </span>
        <IconArrowRight className="h-5 w-5 shrink-0 opacity-95" />
      </Link>

      {/* CTA hover (inline, without extra libs) */}
      <style>{`
        a[data-cta="true"]:hover { filter: brightness(0.95); }
      `}</style>
    </nav>
  );
}

/* ---------------- Icons (inherit currentColor) ---------------- */

function IconBurgerLines({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function IconPaw({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 14c-3 0-5 2-5 4 0 1 1 2 2 2h6c1 0 2-1 2-2 0-2-2-4-5-4Z" />
      <path d="M8.7 11.3c-.8.4-1.8.1-2.2-.7-.4-.8-.1-1.8.7-2.2.8-.4 1.8-.1 2.2.7.4.8.1 1.8-.7 2.2Z" />
      <path d="M15.3 11.3c.8.4 1.8.1 2.2-.7.4-.8.1-1.8-.7-2.2-.8-.4-1.8-.1-2.2.7-.4.8-.1 1.8.7 2.2Z" />
    </svg>
  );
}

function IconChecklist({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 6h11M9 12h11M9 18h11" />
      <path d="M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2" />
    </svg>
  );
}

function IconGear({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3.5" />
      <path d="M19 12a7 7 0 0 0-.1-1l2-1-2-4-2 1a7 7 0 0 0-2-1V3h-4v2a7 7 0 0 0-2 1l-2-1-2 4 2 1a7 7 0 0 0 0 2l-2 1 2 4 2-1a7 7 0 0 0 2 1v2h4v-2a7 7 0 0 0 2-1l2 1 2-4-2-1c.1-.3.1-.7.1-1Z" />
    </svg>
  );
}

function IconPlus({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function IconArrowRight({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

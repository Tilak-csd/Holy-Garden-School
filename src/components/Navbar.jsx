import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Menu, X } from "lucide-react";

const notices = [
  "📢  Admission Open for Academic Year 2082 B.S. — Apply Now!",
  "🌿  Eco-Club Tree Plantation Drive — Join us this Saturday!",
];

const links = ["Home", "About", "Staff", "Gallery", "Events", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const tickerText = notices.join("     •     ");
  const doubled = tickerText + "     •     " + tickerText;

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, width: "100%" }}>

      {/* Notice Ticker */}
      <div style={{ background: "#1E40AF", padding: "6px 0", overflow: "hidden", whiteSpace: "nowrap" }}>
        <span
          style={{
            display: "inline-block",
            color: "#FCD34D",
            fontSize: 13,
            fontWeight: 500,
            animation: "ticker 32s linear infinite",
          }}
        >
          {doubled}
        </span>
      </div>

      {/* Main Nav */}
      <nav
        style={{
          background: "rgba(255,255,255,0.72)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(255,255,255,0.4)",
          padding: "0 24px",
          boxShadow: scrolled ? "0 4px 24px rgba(30,64,175,0.12)" : "none",
          transition: "box-shadow 0.3s",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 68,
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img src="./holy-garden-boarding-high-school.png" alt="" style={{ height: "60px", width: "auto"}} />
          </div>

          {/* Desktop Nav Links */}
          {!isMobile && (
            <ul style={{ display: "flex", gap: 4, listStyle: "none", alignItems: "center", margin: 0, padding: 0 }}>
              {links.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    style={{ padding: "8px 16px", borderRadius: 8, color: "#1e293b", fontWeight: 600, fontSize: 14, textDecoration: "none", display: "block", transition: "all 0.2s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#1E40AF"; e.currentTarget.style.background = "#EFF6FF"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#1e293b"; e.currentTarget.style.background = "transparent"; }}
                  >{l}</a>
                </li>
              ))}
            </ul>
          )}

          {/* CTA + Hamburger */}
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {!isMobile && (
              <a
                href="#contact"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#DC2626", color: "#fff", padding: "9px 20px", borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none", boxShadow: "0 4px 12px rgba(220,38,38,0.3)", transition: "all 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#b91c1c"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#DC2626"; e.currentTarget.style.transform = "none"; }}
              >Enroll Now</a>
            )}
            {isMobile && (
              <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", padding: 6 }}>
                {open ? <X size={24} color="#1E40AF" /> : <Menu size={24} color="#1E40AF" />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {open && isMobile && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{ overflow: "hidden", borderTop: "1px solid rgba(30,64,175,0.1)" }}
            >
              <ul style={{ listStyle: "none", padding: "12px 0", margin: 0 }}>
                {links.map((l) => (
                  <li key={l}>
                    <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
                      style={{ display: "block", padding: "10px 16px", color: "#1e293b", fontWeight: 600, textDecoration: "none", fontSize: 15 }}
                    >{l}</a>
                  </li>
                ))}
                <li style={{ padding: "8px 16px" }}>
                  <a href="#contact" onClick={() => setOpen(false)}
                    style={{ display: "block", background: "#DC2626", color: "#fff", padding: "10px 16px", borderRadius: 8, fontWeight: 700, textAlign: "center", textDecoration: "none" }}
                  >Enroll Now</a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <style>{`@keyframes ticker { 0%{ transform: translateX(0); } 100%{ transform: translateX(-50%); } }`}</style>
    </header>
  );
}
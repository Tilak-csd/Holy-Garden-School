import { GraduationCap, MapPin, Phone, Mail, ChevronRight, CheckCircle, Facebook, Instagram, Youtube, Twitter, ArrowRight } from "lucide-react";

const quickLinks = ["About Us", "Admission", "Academics", "Gallery", "Events", "Contact"];
const programs = ["ECD", "Primary Level (Gr. 1-5)", "Lower Secondary (Gr. 6-8)", "Secondary (Gr. 9–10"];
const socials = [Facebook, Instagram, Youtube, Twitter];

const contactItems = [
  { icon: <MapPin size={16} />, label: "Address", value: "Ring Road, Balaju, Kathmandu, Bagmati Province, Nepal" },
  { icon: <Phone size={16} />, label: "Phone", value: "+977-1-4350123 / 4350456" },
  { icon: <Mail size={16} />, label: "Email", value: "info@holygarden.edu.np" },
];

export default function Footer() {
  return (
    <footer id="contact" style={{ background: "#0F172A", color: "#fff" }}>

      {/* CTA Banner */}
      <div
        style={{
          background: "linear-gradient(90deg,#1E40AF,#15803D)",
          padding: "48px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(22px,4vw,34px)", fontWeight: 900, marginBottom: 12 }}>
            Begin Your Child's Journey at Holy Garden
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, marginBottom: 28, fontWeight: 500 }}>
            Seats are limited. Secure your child's future in one of Kathmandu's finest boarding institutions.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="#"
              style={{
                background: "#DC2626", color: "#fff", padding: "13px 28px",
                borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none",
                boxShadow: "0 8px 24px rgba(220,38,38,0.4)",
                display: "inline-flex", alignItems: "center", gap: 8,
              }}
            >
              Apply Now <ArrowRight size={16} />
            </a>
            <a
              href="tel:+977-1-4350123"
              style={{
                background: "rgba(255,255,255,0.15)", color: "#fff",
                padding: "13px 28px", borderRadius: 10, fontWeight: 700, fontSize: 14,
                textDecoration: "none", border: "1px solid rgba(255,255,255,0.3)",
                display: "inline-flex", alignItems: "center", gap: 8,
              }}
            >
              <Phone size={16} /> Call Admissions
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 24px 40px" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.5fr", gap: 48, marginBottom: 48 }}
          className="footer-grid"
        >

          {/* Brand Column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <img
                src="./holy-garden-boarding-high-school.png" alt=""
                style={{
                  width: 52, height: 52, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }} />

              <div>
                <div style={{ color: "#fff", fontWeight: 800, fontSize: 15 }}>Holy Garden</div>
                <div style={{ color: "#94a3b8", fontWeight: 600, fontSize: 11, letterSpacing: 1 }}>
                  BOARDING HIGH SCHOOL
                </div>
              </div>
            </div>

            <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.75, marginBottom: 24, fontWeight: 500 }}>
              Nurturing compassionate leaders since 1996. An institution built on love, service, and
              academic excellence in the heart of Kathmandu.
            </p>

            <div style={{ color: "#FCD34D", fontStyle: "italic", fontWeight: 700, fontSize: 16, marginBottom: 24 }}>
              "Love · Serve · All"
            </div>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: 10 }}>
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: "rgba(255,255,255,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    border: "1px solid rgba(255,255,255,0.1)",
                    transition: "all 0.2s",
                    color: "#94a3b8",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#1E40AF";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.color = "#94a3b8";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 800, fontSize: 15, marginBottom: 20 }}>Quick Links</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {quickLinks.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    style={{
                      color: "#94a3b8", fontSize: 14, textDecoration: "none", fontWeight: 500,
                      transition: "color 0.2s", display: "flex", alignItems: "center", gap: 6,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#93C5FD")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                  >
                    <ChevronRight size={12} /> {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 800, fontSize: 15, marginBottom: 20 }}>Programs</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {programs.map((p) => (
                <li key={p}>
                  <a
                    href="#"
                    style={{
                      color: "#94a3b8", fontSize: 13, textDecoration: "none", fontWeight: 500,
                      transition: "color 0.2s", display: "flex", alignItems: "center", gap: 6,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#93C5FD")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                  >
                    <CheckCircle size={11} color="#15803D" /> {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 800, fontSize: 15, marginBottom: 20 }}>Contact Us</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {contactItems.map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 12 }}>
                  <div style={{ color: "#15803D", flexShrink: 0, marginTop: 2 }}>{c.icon}</div>
                  <div>
                    <div style={{ color: "#cbd5e1", fontSize: 13, fontWeight: 500, lineHeight: 1.5 }}>
                      {c.value}
                    </div>
                  </div>
                </div>
              ))}

              {/* Map container */}
              <div
                style={{
                  marginTop: 8,
                  borderRadius: 12,
                  overflow: "hidden",
                  height: 100, // Increased height so the map is actually visible
                  background: "linear-gradient(135deg,rgba(30,64,175,0.3),rgba(21,128,61,0.3))",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  color: "#94a3b8",
                  fontSize: 13,
                }}
              >
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95196.90948510704!2d85.23117750690477!3d27.740096540266805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18dc925125ad%3A0x40f12c087ec35f90!2sHoly%20Garden%20Boarding%20High%20School!5e1!3m2!1sen!2snp!4v1774265142543!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }} // Corrected style object
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 28,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ color: "#475569", fontSize: 13, fontWeight: 500 }}>
            © 2026 Holy Garden Boarding High School. All rights reserved. Developed By <a href="https://www.unifiedsolutions.com.np" target="_blank">Unified Solutions</a>
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Use", "Sitemap"].map((l) => (
              <a key={l} href="#" style={{ color: "#475569", fontSize: 13, textDecoration: "none", fontWeight: 500 }}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid { grid-template-columns: 2fr 1fr 1fr 1.5fr; }
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 640px)  { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}

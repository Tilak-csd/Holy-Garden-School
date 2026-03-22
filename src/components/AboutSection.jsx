import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Heart, GraduationCap, BookOpen, Microscope, Music,
  Trophy, ArrowRight, Wifi, Library, Users,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const milestones = [
  { year: "1996", label: "Founded by Salesian Missionaries" },
  { year: "2005", label: "First National Board Topper" },
  { year: "2015", label: "ISO Certified Smart Campus" },
  { year: "2024", label: "28 Years of Academic Excellence" },
];

const pillars = [
  { icon: <GraduationCap size={18} />, text: "NEB-affiliated with Science, Management & Humanities streams" },
  { icon: <Wifi size={18} />, text: "Fully digital campus with smart classrooms & e-library" },
  { icon: <Library size={18} />, text: "10,000+ volume physical library with reading halls" },
  { icon: <Users size={18} />, text: "Dedicated house parents and 24/7 pastoral care" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.18 });

  return (
    <section
      id="about"
      style={{
        padding: "96px 24px",
        background: "linear-gradient(135deg,#F8FAFF 0%,#F0FDF4 100%)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          ref={ref}
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}
          className="about-grid"
        >

          {/* ── Left — Visual ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ position: "relative" }}
          >
            {/* Green decorative background shape */}
            <div
              style={{
                width: "80%",
                height: 380,
                position: "absolute",
                bottom: -24,
                left: -24,
                zIndex: 0,
                background: "linear-gradient(135deg, #15803D 0%, #166534 100%)",
                borderRadius: 32,
              }}
            />

            {/* Main card overlapping the shape */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                background: "#fff",
                borderRadius: 24,
                overflow: "hidden",
                boxShadow: "0 24px 64px rgba(30,64,175,0.2)",
                border: "4px solid #fff",
              }}
            >
              {/* Illustration area */}
              <div
                style={{
                  width: "100%",
                  height: 320,
                  background: "linear-gradient(160deg,#EFF6FF,#DCFCE7)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 16,
                  padding: 32,
                }}
              >
                <div style={{ display: "flex", gap: 16 }}>
                  {[BookOpen, Microscope, Music, Trophy].map((Icon, i) => (
                    <div
                      key={i}
                      style={{
                        width: 56, height: 56,
                        background: "#fff",
                        borderRadius: 16,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                      }}
                    >
                      <Icon size={22} color={["#1E40AF", "#15803D", "#DC2626", "#D97706"][i]} />
                    </div>
                  ))}
                </div>
                <div style={{ fontWeight: 900, fontSize: 18, color: "#1E40AF", textAlign: "center" }}>
                  Holistic Education Since 1996
                </div>
                <p style={{ color: "#64748b", textAlign: "center", fontSize: 13, lineHeight: 1.6, fontWeight: 500 }}>
                  Where every child discovers their purpose, develops their potential, and serves
                  their community with love.
                </p>
              </div>

              {/* Milestones strip */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 0 }}>
                {milestones.map((m, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "16px 20px",
                      borderTop: "1px solid #f1f5f9",
                      borderRight: i % 2 === 0 ? "1px solid #f1f5f9" : "none",
                    }}
                  >
                    <div style={{ fontSize: 20, fontWeight: 900, color: "#1E40AF" }}>{m.year}</div>
                    <div style={{ fontSize: 12, color: "#64748b", fontWeight: 600, lineHeight: 1.4 }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating stat badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: -20,
                right: -16,
                zIndex: 3,
                background: "#1E40AF",
                borderRadius: 14,
                padding: "12px 18px",
                color: "#fff",
                boxShadow: "0 8px 24px rgba(30,64,175,0.35)",
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 900 }}>28+</div>
              <div style={{ fontSize: 11, opacity: 0.85, fontWeight: 600 }}>Years of Trust</div>
            </motion.div>
          </motion.div>

          {/* ── Right — Content ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div
              variants={fadeUp}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#F0FDF4", border: "1px solid #BBF7D0",
                borderRadius: 100, padding: "6px 16px", marginBottom: 16,
              }}
            >
              <Heart size={14} color="#15803D" fill="#15803D" />
              <span style={{ color: "#15803D", fontSize: 13, fontWeight: 600 }}>Our Story</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              style={{ fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 900, color: "#1E40AF", marginBottom: 16, lineHeight: 1.2 }}
            >
              More Than a School —<br />
              <span style={{ color: "#15803D" }}>A Second Home.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              style={{ color: "#475569", fontSize: 15, lineHeight: 1.8, marginBottom: 16, fontWeight: 500 }}
            >
              Founded in 1996 by Salesian missionaries, Holy Garden Boarding High School was born
              from a simple but powerful conviction: every child, regardless of background, deserves
              access to quality education, loving care, and the opportunity to become their best self.
            </motion.p>

            <motion.p
              variants={fadeUp}
              style={{ color: "#475569", fontSize: 15, lineHeight: 1.8, marginBottom: 28, fontWeight: 500 }}
            >
              Over 28 years, we have grown into one of Kathmandu's most respected institutions,
              blending rigorous academics with rich co-curricular life, within a safe, nurturing
              boarding environment guided by the motto{" "}
              <strong style={{ color: "#1E40AF" }}>"Love, Serve, All."</strong>
            </motion.p>

            <motion.div
              variants={stagger}
              style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}
            >
              {pillars.map((item, i) => (
                <motion.div key={i} variants={fadeUp} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{ color: "#15803D", flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
                  <span style={{ color: "#475569", fontSize: 14, fontWeight: 600 }}>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              variants={fadeUp}
              href="#contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#15803D", color: "#fff", padding: "13px 26px",
                borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none",
                boxShadow: "0 8px 24px rgba(21,128,61,0.35)", transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#166534";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#15803D";
                e.currentTarget.style.transform = "none";
              }}
            >
              Discover Our Campus <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

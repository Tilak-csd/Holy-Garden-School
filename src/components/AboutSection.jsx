import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Heart, GraduationCap, ArrowRight, Wifi, Library, Users,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const pillars = [
  { icon: <GraduationCap size={18} />, text: "Best school in Kathmandu with 49+ years of experience" },
  { icon: <Wifi size={18} />,          text: "Fully digital school with smart classrooms & e-library" },
  { icon: <Library size={18} />,       text: "10,000+ volume physical library with reading halls" },
  { icon: <Users size={18} />,         text: "Dedicated house parents and 24/7 pastoral care" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.18 });

  return (
    <section
      id="about"
      style={{
        padding: "80px 0",
        background: "linear-gradient(135deg,#F8FAFF 0%,#F0FDF4 100%)",
        /* FIX: clip anything that tries to bleed out horizontally */
        overflowX: "hidden",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div ref={ref} className="about-grid">

          {/* ── Left — Visual ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{
              position: "relative",
              /* FIX: enough bottom padding so the green shape doesn't clip */
              paddingBottom: 28,
            }}
          >
            {/* Green decorative shape
                FIX: no negative left/right — use inset values that stay inside */}
            <div
              style={{
                width: "88%",
                height: "90%",
                position: "absolute",
                bottom: 0,
                left: 0,          /* was -24 → caused overflow */
                zIndex: 0,
                background: "linear-gradient(135deg,#15803D 0%,#166534 100%)",
                borderRadius: 28,
              }}
            />

            {/* Main image card */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                background: "#fff",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 20px 56px rgba(30,64,175,0.18)",
                border: "3px solid #fff",
                marginLeft: 16,   /* slight offset so green shape peeks from left */
              }}
            >
              <img
                src="./about-us.jpg"
                alt="About Holy Garden"
                style={{
                  width: "100%",
                  height: "18rem",
                  display: "block",
                  /* fallback background if image is missing */
                  background: "linear-gradient(160deg,#EFF6FF,#DCFCE7)",
                  minHeight: 240,
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Floating badge
                FIX: use right: 0 instead of right: -16 so it never overflows */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: 0,
                right: 0,         /* was -16 → caused overflow on mobile */
                zIndex: 3,
                background: "#1E40AF",
                borderRadius: 14,
                padding: "12px 16px",
                color: "#fff",
                boxShadow: "0 8px 24px rgba(30,64,175,0.35)",
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 900, lineHeight: 1 }}>49+</div>
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
              style={{
                fontSize: "clamp(24px,3.5vw,40px)",
                fontWeight: 900, color: "#1E40AF",
                marginBottom: 16, lineHeight: 1.2,
              }}
            >
              More Than a School —<br />
              <span style={{ color: "#15803D" }}>A Second Home.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              style={{ color: "#475569", fontSize: 15, lineHeight: 1.8, marginBottom: 16, fontWeight: 500 }}
            >
              Founded in 2033, Holy Garden Boarding High School was born
              from a simple but powerful conviction: every child, regardless of background, deserves
              access to quality education, loving care, and the opportunity to become their best self.
            </motion.p>

            <motion.p
              variants={fadeUp}
              style={{ color: "#475569", fontSize: 15, lineHeight: 1.8, marginBottom: 28, fontWeight: 500 }}
            >
              Over 49 years, we have grown into one of Kathmandu's most respected institutions,
              blending rigorous academics with rich co-curricular life, within a safe, nurturing
              boarding environment guided by the motto{" "}
              <strong style={{ color: "#1E40AF" }}>"Love, Serve, All."</strong>
            </motion.p>

            <motion.div
              variants={stagger}
              style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}
            >
              {pillars.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{ display: "flex", alignItems: "flex-start", gap: 12 }}
                >
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
                background: "#15803D", color: "#fff",
                padding: "13px 26px", borderRadius: 10,
                fontWeight: 700, fontSize: 14, textDecoration: "none",
                boxShadow: "0 8px 24px rgba(21,128,61,0.35)",
                transition: "all 0.2s",
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
              Discover Our School <ArrowRight size={16} />
            </motion.a>
          </motion.div>

        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        /* ── Mobile: single column, visual on top ── */
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }

        /* ── Tighten padding on small screens ── */
        @media (max-width: 480px) {
          .about-grid {
            gap: 28px !important;
          }
        }
      `}</style>
    </section>
  );
}
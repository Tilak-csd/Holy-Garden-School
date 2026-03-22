import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap, Star, ArrowRight, ChevronRight,
  BookOpen, Trophy, Music, FlaskConical, Award, Users,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const stats = [
  { value: "28+", label: "Years of Excellence" },
  { value: "98%", label: "Pass Rate" },
  { value: "1200+", label: "Alumni Worldwide" },
  { value: "45+", label: "Expert Faculty" },
];

const highlights = [
  { icon: <BookOpen size={18} />, label: "Academics" },
  { icon: <Trophy size={18} />, label: "Sports" },
  { icon: <Music size={18} />, label: "Arts" },
  { icon: <FlaskConical size={18} />, label: "Science" },
];

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="home"
      style={{
        paddingTop: 130,
        paddingBottom: 80,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "linear-gradient(135deg, #EFF6FF 0%, #F0FDF4 50%, #FEF2F2 100%)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%" }}>
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* ── Left Column ── */}
          <motion.div variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}>
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#EFF6FF",
                border: "1px solid #BFDBFE",
                borderRadius: 100,
                padding: "6px 16px",
                marginBottom: 20,
              }}
            >
              <Star size={14} color="#1E40AF" fill="#1E40AF" />
              <span style={{ color: "#1E40AF", fontSize: 13, fontWeight: 600 }}>
                Nepal's Premier Boarding Institution
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              style={{
                fontSize: "clamp(36px, 5vw, 58px)",
                fontWeight: 900,
                lineHeight: 1.1,
                color: "#1E40AF",
                marginBottom: 12,
              }}
            >
              Love,{" "}
              <span style={{ color: "#DC2626", position: "relative" }}>
                Serve,
                <svg
                  style={{ position: "absolute", bottom: -4, left: 0, width: "100%" }}
                  viewBox="0 0 200 10"
                  fill="none"
                >
                  <path
                    d="M0 6 Q100 0 200 6"
                    stroke="#DC2626"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.4"
                  />
                </svg>
              </span>{" "}
              All.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: 17,
                color: "#475569",
                lineHeight: 1.75,
                marginBottom: 32,
                fontWeight: 500,
                maxWidth: 480,
              }}
            >
              A nurturing home for curious minds. At Holy Garden Boarding High School, we shape
              compassionate leaders who excel academically and contribute meaningfully to society.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 48 }}
            >
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#DC2626",
                  color: "#fff",
                  padding: "14px 28px",
                  borderRadius: 10,
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: "none",
                  boxShadow: "0 8px 24px rgba(220,38,38,0.35)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(220,38,38,0.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(220,38,38,0.35)";
                }}
              >
                Enroll Now <ArrowRight size={16} />
              </a>
              <a
                href="#about"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#fff",
                  color: "#1E40AF",
                  padding: "14px 28px",
                  borderRadius: 10,
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: "none",
                  border: "2px solid #BFDBFE",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#EFF6FF")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
              >
                Learn More <ChevronRight size={16} />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={stagger}
              style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}
              className="stats-grid"
            >
              {stats.map((s, i) => (
                <motion.div key={i} variants={fadeUp} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 26, fontWeight: 900, color: "#1E40AF" }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: "#64748b", fontWeight: 600, lineHeight: 1.3 }}>
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right Column — Animated Frame ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}
            className="hero-image-col"
          >
            {/* Blob background */}
            <div
              style={{
                position: "absolute",
                width: 340,
                height: 340,
                borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
                background: "linear-gradient(135deg, rgba(30,64,175,0.12), rgba(21,128,61,0.10))",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                animation: "blobmorph 8s ease-in-out infinite alternate",
              }}
            />

            
     <img src="./holy-garden-hero-image.png" style={{ zIndex: 40 }} />

            {/* Floating badge — bottom left */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              style={{
                position: "absolute",
                bottom: 40,
                left: -20,
                zIndex: 3,
                background: "#fff",
                borderRadius: 14,
                padding: "10px 16px",
                boxShadow: "0 8px 24px rgba(30,64,175,0.18)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Award size={20} color="#D97706" fill="#FCD34D" />
              <div>
                <div style={{ fontSize: 13, fontWeight: 800, color: "#1E40AF" }}>A+ Grade School</div>
                <div style={{ fontSize: 11, color: "#64748b" }}>Govt. Recognized</div>
              </div>
            </motion.div>

            {/* Floating badge — top right */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              style={{
                position: "absolute",
                top: 40,
                right: -16,
                zIndex: 3,
                background: "#fff",
                borderRadius: 14,
                padding: "10px 16px",
                boxShadow: "0 8px 24px rgba(21,128,61,0.18)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Users size={20} color="#15803D" />
              <div>
                <div style={{ fontSize: 13, fontWeight: 800, color: "#15803D" }}>1200+ Alumni</div>
                <div style={{ fontSize: 11, color: "#64748b" }}>Global Leaders</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes blobmorph {
          0%  { border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%; }
          100%{ border-radius: 40% 60% 30% 70% / 60% 40% 50% 50%; }
        }
        .hero-grid { grid-template-columns: 1fr 1fr; }
        .stats-grid { grid-template-columns: repeat(4,1fr); }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-image-col { display: none !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
}

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BookOpen, Cpu, Heart, Star, Globe, Users,
  Trophy, CheckCircle,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const features = [
  {
    icon: <BookOpen size={28} />,
    color: "#1E40AF", bg: "#EFF6FF",
    title: "Academic Excellence",
    desc: "Rigorous SEE & +2 curriculum guided by NEB, with a 98% board pass rate. Our results-driven faculty ensures every student reaches their full potential.",
    points: ["NEB Affiliated", "98% Pass Rate", "Olympiad Training"],
  },
  {
    icon: <Cpu size={28} />,
    color: "#7C3AED", bg: "#F5F3FF",
    title: "Modern Facilities",
    desc: "State-of-the-art science labs, a 10,000-book library, high-speed Wi-Fi campus, and smart-board equipped digital classrooms for every grade.",
    points: ["Smart Classrooms", "Science & IT Labs", "Digital Library"],
  },
  {
    icon: <Heart size={28} />,
    color: "#15803D", bg: "#F0FDF4",
    title: "Character Building",
    desc: "Inspired by Salesian values, we nurture empathy, leadership, and resilience through clubs, service projects, and spiritual retreats.",
    points: ["Salesian Values", "Leadership Clubs", "Community Service"],
  },
  {
    icon: <Trophy size={28} />,
    color: "#D97706", bg: "#FFFBEB",
    title: "Sports & Arts",
    desc: "Championship-level sports facilities and a vibrant arts program. Our students win national competitions and develop talents beyond the classroom.",
    points: ["Indoor Stadium", "Music & Drama", "National Champions"],
  },
  {
    icon: <Globe size={28} />,
    color: "#DC2626", bg: "#FEF2F2",
    title: "Global Exposure",
    desc: "International exchange programs, MUN conferences, and partnerships with global institutions broaden every student's horizon.",
    points: ["Exchange Programs", "MUN Conferences", "Global Partners"],
  },
  {
    icon: <Users size={28} />,
    color: "#0891B2", bg: "#ECFEFF",
    title: "Safe Boarding Life",
    desc: "24/7 CCTV surveillance, healthy hostel meals, on-campus medical staff, and dedicated house parents ensure a safe, homelike environment.",
    points: ["24/7 Security", "Nutritious Meals", "Medical Staff"],
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.18 });

  return (
    <section id="features" style={{ padding: "96px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ textAlign: "center", marginBottom: 60 }}
        >
          <motion.div
            variants={fadeUp}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#F0FDF4", border: "1px solid #BBF7D0",
              borderRadius: 100, padding: "6px 16px", marginBottom: 16,
            }}
          >
            <CheckCircle size={14} color="#15803D" />
            <span style={{ color: "#15803D", fontSize: 13, fontWeight: 600 }}>Why Choose Holy Garden</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 900, color: "#1E40AF", marginBottom: 16 }}
          >
            Built for Every Dimension of Growth
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{ color: "#64748b", fontSize: 16, maxWidth: 560, margin: "0 auto", fontWeight: 500 }}
          >
            We invest in every aspect of student life — academic, physical, creative, and spiritual —
            to produce well-rounded individuals.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}
          className="features-grid"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8, boxShadow: "0 20px 48px rgba(30,64,175,0.15)" }}
              transition={{ duration: 0.25 }}
              style={{
                background: "#fff",
                borderRadius: 20,
                padding: "32px 28px",
                border: "1px solid #f1f5f9",
                boxShadow: "0 8px 32px rgba(30,64,175,0.10), 0 2px 8px rgba(0,0,0,0.06)",
                cursor: "default",
                transition: "box-shadow 0.25s",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: f.bg,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 20, color: f.color,
                }}
              >
                {f.icon}
              </div>

              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#1e293b", marginBottom: 10 }}>
                {f.title}
              </h3>

              <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.7, marginBottom: 16, fontWeight: 500 }}>
                {f.desc}
              </p>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                {f.points.map((p, j) => (
                  <li
                    key={j}
                    style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600, color: "#475569" }}
                  >
                    <CheckCircle size={14} color={f.color} />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .features-grid { grid-template-columns: repeat(3,1fr); }
        @media (max-width: 1024px) { .features-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 640px)  { .features-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

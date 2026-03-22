import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const testimonials = [
  {
    name: "Sita Maharjan",
    role: "Parent of Grade 10 Student",
    text: "Holy Garden has given my daughter not just education, but confidence, discipline, and a sense of purpose. The teachers truly care, and the boarding facilities are excellent. I couldn't have made a better choice.",
    rating: 5, initials: "SM", color: "#1E40AF",
  },
  {
    name: "Rajan Shrestha",
    role: "Alumni — Class of 2018, Now at TU Medicine",
    text: "The foundation I built at Holy Garden carried me through MBBS entrance. The science lab sessions, the discipline of boarding life, and the mentorship of my teachers were irreplaceable. I owe my success to this school.",
    rating: 5, initials: "RS", color: "#15803D",
  },
  {
    name: "Anita Thapa",
    role: "Grade 12 Student, Science",
    text: "Studying here feels like being part of a family. My friends are from all over Nepal, I've won a national science quiz, and I've learned to manage my time and ambitions. This place is truly special.",
    rating: 5, initials: "AT", color: "#DC2626",
  },
  {
    name: "Bijay Gurung",
    role: "Parent — Dharan, Province 1",
    text: "We sent our son from Dharan because of Holy Garden's reputation. Three years later, he's a changed young man — disciplined, focused, kind. The hostel is safe, the food is nutritious, and the staff are responsive.",
    rating: 5, initials: "BG", color: "#D97706",
  },
];

const stats = [
  { value: "1200+", label: "Happy Alumni" },
  { value: "98%",   label: "Pass Rate" },
  { value: "4.9★",  label: "Parent Rating" },
  { value: "28 Yrs",label: "Of Excellence" },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.18 });
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section
      id="testimonials"
      style={{
        padding: "96px 24px",
        background: "linear-gradient(135deg, #1E3A8A 0%, #1E40AF 60%, #15803D 100%)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <motion.div
            variants={fadeUp}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: 100, padding: "6px 16px", marginBottom: 16,
            }}
          >
            <Star size={14} color="#FCD34D" fill="#FCD34D" />
            <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>Voices of the Garden</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 900, color: "#fff", marginBottom: 12 }}
          >
            What Our Community Says
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, fontWeight: 500 }}
          >
            Real stories from parents, alumni, and students.
          </motion.p>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              style={{
                background: "rgba(255,255,255,0.10)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 24,
                padding: "48px 48px 40px",
                maxWidth: 780,
                margin: "0 auto 40px",
                position: "relative",
              }}
            >
              <Quote
                size={40}
                color="rgba(255,255,255,0.2)"
                style={{ position: "absolute", top: 28, left: 32 }}
              />

              {/* Stars */}
              <div style={{ display: "flex", gap: 6, marginBottom: 20, justifyContent: "center" }}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} color="#FCD34D" fill="#FCD34D" />
                ))}
              </div>

              <p
                style={{
                  color: "#fff", fontSize: 18, lineHeight: 1.8,
                  textAlign: "center", fontWeight: 500, marginBottom: 32, fontStyle: "italic",
                }}
              >
                "{t.text}"
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 14, justifyContent: "center" }}>
                <div
                  style={{
                    width: 48, height: 48, borderRadius: "50%",
                    background: t.color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 16, fontWeight: 800, color: "#fff", flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ color: "#fff", fontWeight: 800, fontSize: 15 }}>{t.name}</div>
                  <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, fontWeight: 500 }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: i === active ? 32 : 10,
                  height: 10,
                  borderRadius: 6,
                  background: i === active ? "#FCD34D" : "rgba(255,255,255,0.35)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, marginTop: 64 }}
          className="testimonial-stats"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 16,
                padding: "24px 16px",
              }}
            >
              <div style={{ fontSize: 28, fontWeight: 900, color: "#FCD34D" }}>{s.value}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", fontWeight: 600 }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .testimonial-stats { grid-template-columns: repeat(4,1fr); }
        @media (max-width: 768px) { .testimonial-stats { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </section>
  );
}

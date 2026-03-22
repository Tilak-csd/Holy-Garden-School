import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, MapPin, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const events = [
  {
    day: "15", month: "Chaitra", year: "2081",
    title: "Annual Sports Day 2024",
    desc: "Celebrate athletic spirit with track & field, football, basketball, and cultural performances. All parents warmly invited.",
    category: "Sports", color: "#DC2626", bg: "#FEF2F2",
    time: "7:00 AM – 4:00 PM", venue: "School Grounds",
  },
  {
    day: "22", month: "Chaitra", year: "2081",
    title: "Science & Innovation Fair",
    desc: "Students from Grade 9–12 showcase groundbreaking projects. Industry judges & prizes for top 3 innovations.",
    category: "Academic", color: "#1E40AF", bg: "#EFF6FF",
    time: "10:00 AM – 3:00 PM", venue: "Science Block",
  },
  {
    day: "5", month: "Baisakh", year: "2082",
    title: "Admission Open Day 2082",
    desc: "Explore our facilities, meet faculty, and learn about admission for Grades 6 to 11 (Sci, Mgmt, Hum).",
    category: "Admission", color: "#15803D", bg: "#F0FDF4",
    time: "9:00 AM – 2:00 PM", venue: "Main Auditorium",
  },
  {
    day: "18", month: "Baisakh", year: "2082",
    title: "Cultural Night & Farewell",
    desc: "A glittering evening of music, dance, drama, and farewells for our Grade 12 graduating batch of 2082.",
    category: "Cultural", color: "#D97706", bg: "#FFFBEB",
    time: "5:00 PM – 9:00 PM", venue: "School Auditorium",
  },
  {
    day: "30", month: "Baisakh", year: "2082",
    title: "Inter-School Debate 2082",
    desc: "20 schools. One stage. Students debate pressing national issues in Nepali & English before expert panelists.",
    category: "Academic", color: "#7C3AED", bg: "#F5F3FF",
    time: "9:00 AM – 5:00 PM", venue: "Main Hall",
  },
  {
    day: "10", month: "Jestha", year: "2082",
    title: "Parent-Teacher Conference",
    desc: "Bi-annual meeting to discuss academic progress, boarding life, and student development plans.",
    category: "Meeting", color: "#0891B2", bg: "#ECFEFF",
    time: "10:00 AM – 4:00 PM", venue: "Classrooms",
  },
];

export default function Events() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.18 });

  return (
    <section id="events" style={{ padding: "96px 24px", background: "#fff" }}>
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
              background: "#EFF6FF", border: "1px solid #BFDBFE",
              borderRadius: 100, padding: "6px 16px", marginBottom: 16,
            }}
          >
            <Calendar size={14} color="#1E40AF" />
            <span style={{ color: "#1E40AF", fontSize: 13, fontWeight: 600 }}>Upcoming Events</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 900, color: "#1E40AF", marginBottom: 16 }}
          >
            What's Happening at Holy Garden
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{ color: "#64748b", fontSize: 16, maxWidth: 520, margin: "0 auto", fontWeight: 500 }}
          >
            From academic fairs to sporting spectacles, our vibrant calendar keeps students engaged year-round.
          </motion.p>
        </motion.div>

        {/* Event Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}
          className="events-grid"
        >
          {events.map((ev, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(30,64,175,0.14)" }}
              transition={{ duration: 0.2 }}
              style={{
                background: "#fff",
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid #f1f5f9",
                boxShadow: "0 8px 32px rgba(30,64,175,0.10), 0 2px 8px rgba(0,0,0,0.06)",
                cursor: "pointer",
              }}
            >
              {/* Colored top strip */}
              <div style={{ height: 6, background: ev.color }} />

              <div style={{ padding: 24 }}>
                {/* Date badge + category */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
                  <div
                    style={{
                      background: "linear-gradient(135deg, #1E40AF, #2563EB)",
                      borderRadius: 12,
                      padding: "10px 14px",
                      textAlign: "center",
                      minWidth: 58,
                    }}
                  >
                    <div style={{ fontSize: 24, fontWeight: 900, color: "#fff", lineHeight: 1 }}>{ev.day}</div>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.85)", fontWeight: 600, letterSpacing: 0.5 }}>{ev.month}</div>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>{ev.year}</div>
                  </div>
                  <span
                    style={{
                      background: ev.bg,
                      color: ev.color,
                      fontSize: 11,
                      fontWeight: 700,
                      padding: "4px 12px",
                      borderRadius: 100,
                      border: `1px solid ${ev.color}33`,
                    }}
                  >
                    {ev.category}
                  </span>
                </div>

                <h3 style={{ fontSize: 16, fontWeight: 800, color: "#1e293b", marginBottom: 8, lineHeight: 1.3 }}>
                  {ev.title}
                </h3>
                <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.65, marginBottom: 16, fontWeight: 500 }}>
                  {ev.desc}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#64748b", fontWeight: 600 }}>
                    <Calendar size={12} color={ev.color} /> {ev.time}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#64748b", fontWeight: 600 }}>
                    <MapPin size={12} color={ev.color} /> {ev.venue}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          style={{ textAlign: "center", marginTop: 48 }}
        >
          <a
            href="#contact"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              border: "2px solid #1E40AF", color: "#1E40AF",
              padding: "12px 28px", borderRadius: 10,
              fontWeight: 700, fontSize: 14, textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1E40AF";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#1E40AF";
            }}
          >
            View Full Calendar <ChevronRight size={16} />
          </a>
        </motion.div>
      </div>

      <style>{`
        .events-grid { grid-template-columns: repeat(3,1fr); }
        @media (max-width: 1024px) { .events-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 640px)  { .events-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

import { useState, useEffect, useRef } from "react";

const testimonials = [
  { name:"Sita Maharjan",   role:"Grade 10 Parent",      rating:5, color:"#1E40AF", init:"SM", text:"Holy Garden gave my daughter confidence, discipline, and purpose. The teachers truly care and boarding facilities are excellent." },
  { name:"Rajan Shrestha",  role:"Alumni, TU Medicine",   rating:5, color:"#15803D", init:"RS", text:"The foundation built here carried me through MBBS entrance. Science labs and the discipline of boarding life were irreplaceable." },
  { name:"Anita Thapa",     role:"Grade 12, Science",     rating:5, color:"#DC2626", init:"AT", text:"Studying here feels like family. Friends from all over Nepal, won a national science quiz, and learned to manage my ambitions." },
  { name:"Bijay Gurung",    role:"Parent, Dharan",        rating:5, color:"#D97706", init:"BG", text:"Sent our son from Dharan. Three years later he is disciplined and focused. The hostel is safe and staff are very responsive." },
  { name:"Priya Tamang",    role:"Grade 11 Student",      rating:5, color:"#7C3AED", init:"PT", text:"Smart classrooms and the library transformed how I study. Extracurricular clubs helped me find my passion for robotics." },
  { name:"Anil Karki",      role:"Alumni 2019, Engineer", rating:5, color:"#0891B2", init:"AK", text:"The structured boarding life taught me time management that I use every single day in my engineering career. Grateful forever." },
  { name:"Maya Rai",        role:"Parent, Pokhara",       rating:4, color:"#15803D", init:"MR", text:"Monthly progress reports and direct access to house parents gives us peace of mind. Communication from the school is excellent." },
  { name:"Suresh Lama",     role:"Grade 12, Management",  rating:5, color:"#1E40AF", init:"SL", text:"MUN conferences and leadership clubs gave me skills no textbook could. I feel ready for the real world after Holy Garden." },
];

const GAP = 16;

function getCardsToShow(width) {
  if (width < 480) return 1;
  if (width < 768) return 2;
  return 3;
}

function Stars({ count }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width={13} height={13} viewBox="0 0 24 24"
          fill={i < count ? "#1E40AF" : "#CBD5E1"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t, cardWidth }) {
  return (
    <div style={{
      width: cardWidth,
      flexShrink: 0,
      background: "#fff",
      border: "1px solid #E2E8F0",
      borderRadius: 14,
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      boxSizing: "border-box",
      boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    }}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap: 8 }}>
        <div style={{ display:"flex", alignItems:"center", gap: 10, minWidth: 0 }}>
          <div style={{
            width: 40, height: 40, borderRadius: "50%", flexShrink: 0,
            background: t.color + "22", color: t.color,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 700, fontSize: 13,
          }}>{t.init}</div>
          <div style={{ minWidth: 0 }}>
            <div style={{
              fontWeight: 700, fontSize: 13, color: "#1e293b",
              whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
            }}>{t.name}</div>
            <div style={{ fontSize: 11, color: "#64748b", marginTop: 1 }}>{t.role}</div>
          </div>
        </div>
        <div style={{ flexShrink: 0 }}>
          <Stars count={t.rating} />
        </div>
      </div>
      <div style={{ borderTop: "1px solid #F1F5F9", paddingTop: 10 }}>
        <p style={{ fontSize: 12, color: "#475569", lineHeight: 1.6, margin: 0 }}>"{t.text}"</p>
      </div>
    </div>
  );
}

function ScrollRow({ items, direction = "left", speed = 50 }) {
  // ── All state lives here, ref is always mounted ──────────────
  const outerRef  = useRef(null);   // always-mounted wrapper
  const trackRef  = useRef(null);   // the moving strip
  const rafRef    = useRef(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const lastTsRef = useRef(null);

  const [cardWidth, setCardWidth] = useState(0);
  const cardWidthRef = useRef(0);

  // ── Measure: runs after mount since outerRef is always rendered ──
  useEffect(() => {
    function measure() {
      if (!outerRef.current) return;
      const w = outerRef.current.offsetWidth;
      const n = getCardsToShow(w);
      const peek = n === 1 ? 20 : 0;
      const cw = Math.floor((w - GAP * (n - 1) - peek) / n);
      cardWidthRef.current = cw;
      setCardWidth(cw);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // ── Animation loop — starts once cardWidth is known ──────────
  useEffect(() => {
    if (!cardWidth || !trackRef.current) return;

    const oneSetPx = items.length * (cardWidth + GAP);

    // initialise offset so reverse row starts at the right position
    if (direction === "right" && offsetRef.current === 0) {
      offsetRef.current = -oneSetPx;
    }

    function step(ts) {
      if (lastTsRef.current === null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      if (!pausedRef.current) {
        if (direction === "left") {
          offsetRef.current -= speed * dt;
          // reset: jump back by exactly one set-width for seamless loop
          if (offsetRef.current <= -oneSetPx) offsetRef.current += oneSetPx;
        } else {
          offsetRef.current += speed * dt;
          if (offsetRef.current >= 0) offsetRef.current -= oneSetPx;
        }
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
        }
      }
      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(rafRef.current);
      lastTsRef.current = null;
    };
  }, [cardWidth, items, direction, speed]);

  // Quadruple items — ensures no gap on any screen at any card size
  const loopItems = [...items, ...items, ...items, ...items];

  return (
    // outerRef is ALWAYS mounted — no conditional rendering that hides the ref
    <div
      ref={outerRef}
      style={{ overflow: "hidden", position: "relative" }}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; lastTsRef.current = null; }}
      onTouchStart={() => { pausedRef.current = true; }}
      onTouchEnd={() => { pausedRef.current = false; lastTsRef.current = null; }}
    >
      {/* Fade edges */}
      <div style={{ position:"absolute",top:0,left:0,bottom:0,width:32,zIndex:2,pointerEvents:"none",
        background:"linear-gradient(to right,#F8FAFF,transparent)" }} />
      <div style={{ position:"absolute",top:0,right:0,bottom:0,width:32,zIndex:2,pointerEvents:"none",
        background:"linear-gradient(to left,#F8FAFF,transparent)" }} />

      {/* Track — only render cards once cardWidth is known */}
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: GAP,
          padding: "8px 0 14px",
          // use px width so the rAF offset arithmetic is exact
          width: cardWidth > 0
            ? `${loopItems.length * (cardWidth + GAP)}px`
            : "max-content",
          willChange: "transform",
        }}
      >
        {cardWidth > 0 && loopItems.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} cardWidth={cardWidth} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const half = Math.ceil(testimonials.length / 2);

  return (
    <section
      id="testimonials"
      style={{
        padding: "72px 0",
        background: "linear-gradient(135deg,#F8FAFF 0%,#F0FDF4 100%)",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div style={{ textAlign:"center", marginBottom: 40, padding: "0 20px" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "#EFF6FF", border: "1px solid #BFDBFE",
          borderRadius: 100, padding: "5px 14px", marginBottom: 12,
        }}>
          <svg width={13} height={13} viewBox="0 0 24 24" fill="#1E40AF">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span style={{ color:"#1E40AF", fontSize:12, fontWeight:600 }}>Student Voices</span>
        </div>

        <h2 style={{
          fontSize: "clamp(22px,5vw,40px)",
          fontWeight: 900, color: "#1E40AF", marginBottom: 10, lineHeight: 1.2,
        }}>
          What Our Community Says
        </h2>
        <p style={{
          color: "#64748b", fontSize: "clamp(13px,2vw,15px)",
          fontWeight: 500, maxWidth: 480, margin: "0 auto", lineHeight: 1.6,
        }}>
          Real stories from parents, students, and alumni across Nepal.
        </p>
      </div>

      {/* Row 1 — scrolls left */}
      <ScrollRow items={testimonials.slice(0, half)} direction="left"  speed={50} />

      {/* Row 2 — scrolls right */}
      <div style={{ marginTop: 14 }}>
        <ScrollRow items={testimonials.slice(half)} direction="right" speed={45} />
      </div>
    </section>
  );
}
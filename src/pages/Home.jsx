import Hero         from "../components/Hero";
import Features     from "../components/Features";
import AboutSection from "../components/AboutSection";
import Events       from "../components/Events";
import Testimonials from "../components/Testimonials";
import OurAim from '../components/OurAim'


export default function Home() {
  return (
    <>
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
        * { font-family: 'Plus Jakarta Sans', sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f1f5f9; }
        ::-webkit-scrollbar-thumb { background: #1E40AF; border-radius: 3px; }
      `}</style>

      <main>
        <Hero />
        <Features />
        <AboutSection />
        <OurAim />
        <Events />
        <Testimonials />
      </main>
    </>
  );
}

import React from 'react';
// Note: npm install lucide-react if you haven't already
import { BookOpen, Users, Star } from 'lucide-react';

const OurAim = () => {
  const containerStyle = {
    padding: '80px 20px',
    backgroundColor: '#F8FAFC',
    fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    textAlign: 'center'
  };

  const headerStyle = {
    color: '#1E40AF', // Royal Blue
    fontSize: '2.5rem',
    fontWeight: '800',
    marginBottom: '10px',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  };

  const underlineStyle = {
    width: '60px',
    height: '4px',
    backgroundColor: '#DC2626', // Crimson Red
    margin: '0 auto 50px auto'
  };

  const gridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const cardStyle = {
    flex: '1 1 300px',
    maxWidth: '350px',
    backgroundColor: '#ffffff',
    padding: '40px 30px',
    borderRadius: '15px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
    borderTop: '6px solid #1E40AF', // Royal Blue accent
    transition: 'transform 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const iconCircle = (bgColor) => ({
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    backgroundColor: bgColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px'
  });

  const titleStyle = {
    color: '#1E40AF',
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '15px'
  };

  const textStyle = {
    color: '#4B5563',
    lineHeight: '1.7',
    fontSize: '1rem',
    textAlign: 'center'
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Our Primary Aims</h2>
      <div style={underlineStyle}></div>

      <div style={gridStyle}>
        {/* Box 1: Academic */}
        <div style={cardStyle}>
          <div style={iconCircle('#E0E7FF')}>
            <BookOpen size={35} color="#1E40AF" />
          </div>
          <h3 style={titleStyle}>Academic Mastery</h3>
          <p style={textStyle}>
            We aim to provide a rigorous, globally-recognized curriculum that encourages 
            critical thinking and intellectual curiosity. Our students are taught to 
            master core subjects while developing the research skills necessary for 
            success in higher education and the modern workforce.
          </p>
        </div>

        {/* Box 2: Social/Character */}
        <div style={cardStyle} style={{...cardStyle, borderTopColor: '#15803D'}}>
          <div style={iconCircle('#DCFCE7')}>
            <Users size={35} color="#15803D" />
          </div>
          <h3 style={{...titleStyle, color: '#15803D'}}>Global Citizenship</h3>
          <p style={textStyle}>
            Our goal is to nurture responsible individuals who respect diversity and 
            understand their role in a global community. Through community service and 
            collaborative projects, we instill values of empathy, integrity, and social 
            responsibility in every child.
          </p>
        </div>

        {/* Box 3: Future Leaders */}
        <div style={cardStyle} style={{...cardStyle, borderTopColor: '#FACC15'}}>
          <div style={iconCircle('#FEF9C3')}>
            <Star size={35} color="#A16207" />
          </div>
          <h3 style={{...titleStyle, color: '#A16207'}}>Leadership & Innovation</h3>
          <p style={textStyle}>
            We empower students to become the leaders of tomorrow. By providing 
            opportunities in technology, public speaking, and creative arts, we ensure 
            our graduates are confident, innovative problem-solvers ready to tackle 
            the challenges of the 21st century.
          </p>
        </div>
      </div>

      <button style={{
        marginTop: '50px',
        padding: '15px 40px',
        backgroundColor: '#DC2626',
        color: 'white',
        border: 'none',
        borderRadius: '50px',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 4px 14px 0 rgba(220, 38, 38, 0.39)'
      }}>
        Explore Our Vision
      </button>
    </div>
  );
};

export default OurAim;
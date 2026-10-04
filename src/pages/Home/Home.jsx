import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Academics from '../../components/Academics/Academics';
import Facilities from '../../components/Facilities/Facilities';
import WhyTIS from '../../components/WhyTIS/WhyTIS';
import Activities from '../../components/Activities/Activities';
import Achievements from '../../components/Achievements/Achievements';
import Testimonials from '../../components/Testimonials/Testimonials';
import AdmissionsCTA from '../../components/AdmissionsCTA/AdmissionsCTA';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import CustomCursor from '../../components/CustomCursor/CustomCursor';
import ScrollProgress from '../../components/ScrollProgress/ScrollProgress';

export default function Home() {
  return (
    <>
      {/* Advanced Feature 1: Smooth Custom Cursor (Desktop only, RAF-driven) */}
      <CustomCursor />

      {/* Advanced Feature 3: Scroll Progress Indicator */}
      <ScrollProgress />

      {/* 1. Modern Responsive Navbar */}
      <Navbar />

      {/* Main Page Flow — Continuous Visual Story */}
      <main id="main-content">
        {/* 2. Hero Section — Editorial layout with parallax & floating stats */}
        <Hero />

        {/* 3. About TIS — Asymmetric vision, history & campus highlights */}
        <About />

        {/* 4. Academics — Reusable curriculum cards from Primary to Senior Secondary */}
        <Academics />

        {/* 5. Campus & Facilities — Bento-style interactive showcase */}
        <Facilities />

        {/* 6. Why Choose TIS — 6 distinct pillars with staggered entrance */}
        <WhyTIS />

        {/* 7. Life at TIS / Activities — Immersive sports, arts, expeditions gallery */}
        <Activities />

        {/* 8. Achievements — National rankings, awards, and verified metrics */}
        <Achievements />

        {/* 9. Testimonials — Smooth carousel of verified parent reviews */}
        <Testimonials />

        {/* 10. Admissions CTA — High-contrast call to action & roadmap */}
        <AdmissionsCTA />

        {/* 11. Contact — Inquiries, validated form & interactive map */}
        <Contact />
      </main>

      {/* 12. Footer — Clean links, social channels, no placeholder '#' */}
      <Footer />
    </>
  );
}

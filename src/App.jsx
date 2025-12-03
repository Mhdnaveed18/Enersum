import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages (to be created next)
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ClimateChange from "./pages/ClimateChange";
import Sustainability from "./pages/Sustainability";
import Contact from "./pages/Contact";
import Solutions from "./pages/Solutions";
import ServiceModels from "./pages/ServiceModels";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  return (
    <Router>
        <ScrollToTop />

        {/* App wrapper with font and background */}
      <div className="min-h-screen bg-[#F5F5F5] text-[#333333] font-['Inter',_system-ui,_-apple-system,_Segoe_UI,_Roboto,_Helvetica,_Arial,_sans-serif]">
        {/* Neumorphic background accent using radial gradient */}
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-60 [background:radial-gradient(80%_60%_at_10%_10%,#42A5F544,transparent_60%),radial-gradient(70%_50%_at_90%_20%,#4CAF5033,transparent_60%),radial-gradient(60%_50%_at_50%_90%,#42A5F522,transparent_60%)]" />

        <Navbar />

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/climate-change" element={<ClimateChange />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/service-models" element={<ServiceModels />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

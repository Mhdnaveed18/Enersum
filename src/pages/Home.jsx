import { useEffect, useRef, useState } from "react";
import { Card } from "../components/Card";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import ImageWithFallback from "../components/ImageWithFallback";
import { FaPhoneAlt } from "react-icons/fa";

// Local images for Home page
import heroImg from "../assets/Home/Empowering a Sustainable Future..avif";
import imgSolarOptimization from "../assets/Home/Solar Energy Optimization.avif";
import imgBusinessSustainability from "../assets/Home/Business Sustainability.avif";
import imgSmartStorage from "../assets/Home/Smart Energy Storage.avif";
import imgEnergyEfficiency from "../assets/Home/Energy Efficiency Consulting.avif";
import whoWeAreImg from "../assets/Home/who are we.jpg";

function Stat({ label, value, suffix = "", duration = 1200 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (t) => {
            const progress = Math.min(1, (t - start) / duration);
            setCount(Math.floor(progress * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration]);

  return (
    <div ref={ref} className="rounded-2xl bg-[#F5F5F5] border border-white/60 p-6 text-center shadow-[10px_10px_20px_#d6d6d6,_-10px_-10px_20px_#ffffff]">
      <div className="text-3xl sm:text-4xl font-bold text-[#2E7D32]">
        {count}
        {count >= value ? suffix : suffix}
      </div>
      <div className="mt-1 text-sm text-[#333333]/80">{label}</div>
    </div>
  );
}

function Icon({ name, className = "h-6 w-6" }) {
  // Minimal flat icons (house, building, wrench, sun, leaf, bulb)
  if (name === "house")
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="1.8" className={className}>
        <path d="M3 11.5l9-7 9 7" />
        <path d="M5 10v10h14V10" />
      </svg>
    );
  if (name === "building")
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1565C0" strokeWidth="1.6" className={className}>
        <rect x="3" y="7" width="8" height="14" rx="1.5" />
        <rect x="13" y="3" width="8" height="18" rx="1.5" />
        <path d="M6 10h2M6 14h2M6 18h2M16 7h2M16 11h2M16 15h2M16 19h2" />
      </svg>
    );
  if (name === "wrench")
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1565C0" strokeWidth="1.8" className={className}>
        <path d="M21 21l-6-6" />
        <path d="M16 9a5 5 0 10-9 3l-5 5a2 2 0 102 2l5-5a5 5 0 007-5z" />
      </svg>
    );
  if (name === "sun")
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="1.8" className={className}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      </svg>
    );
  if (name === "leaf")
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="1.8" className={className}>
        <path d="M4 20c8 0 12-6 12-12 3 0 4 2 4 5 0 6-5 9-10 9-3 0-5-1-6-2z" />
        <path d="M4 20c3-5 8-8 12-10" />
      </svg>
    );
  if (name === "bulb")
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1565C0" strokeWidth="1.8" className={className}>
        <path d="M9 18h6M10 22h4" />
        <path d="M8 10a4 4 0 118 0c0 3-2 4-2 6H10c0-2-2-3-2-6z" />
      </svg>
    );
  if (name === "battery")
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="1.8" className={className}>
        <rect x="2" y="7" width="18" height="10" rx="2" />
        <path d="M22 10v4" />
        <path d="M11 9l-2 3h3l-2 3" />
      </svg>
    );
  return null;
}

export default function Home() {
  return (
    <div className="space-y-14">
      {/* Hero Section */}
      <section className="relative rounded-[1.75rem] overflow-hidden border border-white/60 shadow-[12px_12px_24px_#d6d6d6,_-12px_-12px_24px_#ffffff]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={heroImg}
            alt="Empowering a Sustainable Future – solar panels with greenery"
            className="h-full w-full object-cover object-bottom md:object-[center_80%]"
            loading="eager"
            decoding="async"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-[#E3F2FD]/40" />
        </div>
        <div className="relative p-8 sm:p-12 lg:p-16 min-h-[420px] flex flex-col items-start justify-center md:-translate-y-4 lg:-translate-y-6 pt-8 pb-10 sm:pb-14">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-md">
            Empowering a Sustainable Future.
          </h1>
          <p className="mt-4 max-w-2xl text-white/90 text-base sm:text-lg">
            We help homeowners and businesses achieve energy efficiency, reduce costs, and minimize carbon footprint.
          </p>
          <p className="mt-3 max-w-2xl text-white/90 text-sm sm:text-base">
            save the energy to save the planet and to save the money
          </p>
          <div className="mt-6 flex items-center gap-3">
              <Link
                  to="tel:+919335897292"
                  target="_blank"
                  className="rounded-2xl px-6 py-3 text-base flex items-center gap-2 bg-green-600 text-white hover:bg-green-700 transition"
              >
                  <FaPhoneAlt className="text-white" />
                  Call Us
              </Link>
            <Link to="/about">
              <Button variant="ghost" className="rounded-2xl px-6 py-3 text-base">Learn More</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#2E7D32]">Who We Are</h2>
            <p className="mt-3 text-[#333333]/85">
              Founded in 2017, Enersum has a passion for sustainability and a commitment to providing top-notch energy solutions. We partner with clients to deliver reliable, efficient, and accessible clean energy systems.
            </p>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F5E9] border border-white/60 shadow-[inset_2px_2px_6px_#d6d6d6,_inset_-2px_-2px_6px_#ffffff]">
                    <Icon name="leaf" />
                  </span>
                  <div className="font-medium text-[#2E7D32]">Clean Energy for All</div>
                </div>
              </Card>
              <Card>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#E3F2FD] border border-white/60 shadow-[inset_2px_2px_6px_#d6d6d6,_inset_-2px_-2px_6px_#ffffff]">
                    <Icon name="bulb" />
                  </span>
                  <div className="font-medium text-[#1565C0]">Innovating a Greener Tomorrow</div>
                </div>
              </Card>
            </div>
          </div>
          <div className="w-full">
            <div className="rounded-2xl overflow-hidden border border-white/60 shadow-[10px_10px_20px_#d6d6d6,_-10px_-10px_20px_#ffffff] mx-auto lg:ml-auto w-[260px] sm:w-[420px] md:w-[360px] lg:w-[420px] aspect-[4/3]">
              <ImageWithFallback
                src={whoWeAreImg}
                alt="Who we are"
                className="h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#2E7D32] mb-5">Our Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Solar Energy Optimization", image: imgSolarOptimization, desc: "Maximize your energy production" },
            { title: "Energy Efficiency Consulting", image: imgEnergyEfficiency, desc: "Expert recommendations" },
            { title: "Business Sustainability", image: imgBusinessSustainability, desc: "Strategic planning for sustainable growth" },
            { title: "Smart Energy Storage", image: imgSmartStorage, desc: "Optimizing energy use and storage" },
          ].map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl bg-[#F5F5F5] border border-white/60 shadow-[10px_10px_20px_#d6d6d6,_-10px_-10px_20px_#ffffff] transition-transform hover:-translate-y-0.5 hover:shadow-[14px_14px_28px_#d6d6d6,_-14px_-14px_28px_#ffffff] overflow-hidden"
            >
              {s.image ? (
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <ImageWithFallback src={s.image} alt={`${s.title} image`} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                </div>
              ) : (
                <div className={`m-6 h-12 w-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center border border-white/60 shadow-[inset_2px_2px_6px_#d6d6d6,_inset_-2px_-2px_6px_#ffffff]`}>
                  <Icon name={s.icon} />
                </div>
              )}
              <div className="p-6 pt-4">
                <div className="text-lg font-semibold text-[#333333]">{s.title}</div>
                <p className="mt-1 text-sm text-[#333333]/80">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative rounded-2xl overflow-hidden border border-white/60 p-8 sm:p-10 shadow-[12px_12px_24px_#d6d6d6,_-12px_-12px_24px_#ffffff]">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_30%,#E8F5E9,transparent_60%),radial-gradient(60%_60%_at_80%_20%,#E3F2FD,transparent_60%)]" />
        <div className="relative max-w-2xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#2E7D32]">Ready to Make a Change?</h3>
          <div className="mt-5 flex justify-center">
              <a
                  href="tel:+919335897292"
                  className="rounded-2xl px-6 py-3 text-base flex items-center gap-2 bg-green-600 text-white hover:bg-green-700 transition"
              >
                  <FaPhoneAlt className="text-white" />
                  Call Us
              </a>
          </div>
        </div>
      </section>
    </div>
  );
}

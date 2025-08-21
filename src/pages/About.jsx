import Hero from "../components/Hero";
import { Card } from "../components/Card";
import ImageWithFallback from "../components/ImageWithFallback";

import about1 from "../assets/about/photo1.jpg";
import about2 from "../assets/about/photo2.jpg";
import about3 from "../assets/about/photo3.jpg";
import about4 from "../assets/about/photo4.jpg";
import imgSustainability from "../assets/about/Sustainability.jpg";
import imgInnovation from "../assets/about/Innovation.avif";
import imgCustomerFocus from "../assets/about/Customer Focus.jpg";

export default function About() {
  return (
    <div className="space-y-10">
      <Hero
        title="About Enersum"
        subtitle="We are a sustainability-first partner helping companies transition to clean energy, reduce emissions, and build resilient operations."
      />

      {/* About Us copy */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#2E7D32]">About Us</h2>
            <div className="mt-3 space-y-4 text-[#333333]/85">
              <p>
                At Enersum, we are dedicated to promoting sustainable energy practices. We strive to empower
                homeowners and businesses to achieve energy efficiency, reduce costs, and contribute to a sustainable
                future. Our goal is to help you reduce your carbon footprint and save money through expert energy
                efficiency solutions.
              </p>
              <p>
                Founded in 2017, Enersum has a passion for sustainability and a commitment to providing top-notch
                energy solutions.
              </p>
            </div>

            {/* Core Values */}
            <div className="mt-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#2E7D32]">Our Core VALUES</h3>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[{
                  title: "Sustainability",
                  desc: "We are committed to protecting our planet.",
                  img: imgSustainability,
                }, {
                  title: "Innovation",
                  desc: "Utilizing the latest technology for maximum efficiency.",
                  img: imgInnovation,
                }, {
                  title: "Customer Focus",
                  desc: "Tailored solutions to meet your unique energy needs.",
                  img: imgCustomerFocus,
                }].map((v) => (
                  <Card key={v.title}>
                    <div className="overflow-hidden rounded-xl border border-white/60">
                      <div className="aspect-[16/9] w-full overflow-hidden">
                        <ImageWithFallback src={v.img} alt={`${v.title} image`} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="text-base font-semibold text-[#333333]">{v.title}</div>
                      <p className="mt-1 text-sm text-[#333333]/80">{v.desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Photo collage */}
          <div className="w-full">
            <div className="grid grid-cols-2 gap-4">
              {[about1, about2, about3, about4].map((img, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden border border-white/60 shadow-[10px_10px_20px_#d6d6d6,_-10px_-10px_20px_#ffffff]">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <ImageWithFallback src={img} alt={`About photo ${idx + 1}`} className="h-full w-full object-cover object-center" loading="lazy" decoding="async" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

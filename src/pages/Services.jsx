import Hero from "../components/Hero";
import { Card } from "../components/Card";
import ImageWithFallback from "../components/ImageWithFallback";

import imgEnergyAudit from "../assets/services/Energy audit.png";
import imgPowerQuality from "../assets/services/Power Quality Audit.webp";
import imgElectricalSafety from "../assets/services/Electrical Safety Audit.jpg";
import imgProjectImplementation from "../assets/services/energy efficiency.jpg";


function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#E8F5E9] text-[#2E7D32] shadow-[inset_2px_2px_4px_#d6d6d6,_inset_-2px_-2px_4px_#ffffff]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 w-3.5">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </span>
      <span className="text-sm text-[#333333]">{children}</span>
    </li>
  );
}

function ServiceBlock({ badge, title, description, bullets, image, imageAlt, imageCaption }) {
  return (
    <Card>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2">
          <div className="inline-flex items-center gap-2 rounded-xl px-3 py-1 text-xs font-semibold text-[#1565C0] bg-[#E3F2FD] border border-white/60 shadow-[4px_4px_8px_#d6d6d6,_-4px_-4px_8px_#ffffff]">
            {badge}
          </div>
          <h3 className="mt-3 text-2xl font-semibold text-[#2E7D32]">{title}</h3>
          <p className="mt-2 text-sm sm:text-base text-[#333333]/90">{description}</p>
          {bullets?.length ? (
            <ul className="mt-4 space-y-2">
              {bullets.map((b) => (
                <CheckItem key={b}>{b}</CheckItem>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="md:col-span-1">
          <figure className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/60 bg-[#F5F5F5] shadow-[10px_10px_20px_#d6d6d6,_-10px_-10px_20px_#ffffff]">
            <ImageWithFallback src={image} alt={imageAlt} loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, 33vw" className="h-full w-full object-cover" />
            {imageCaption ? (
              <figcaption className="sr-only">{imageCaption}</figcaption>
            ) : null}
          </figure>
        </div>
      </div>
    </Card>
  );
}

export default function Services() {
  return (
    <div className="space-y-10">
      <Hero
        title="Energy Services"
        subtitle="End-to-end sustainability services, from strategy to implementation."
      />

      <section className="space-y-6">
        <ServiceBlock
          badge="Optimization"
          title="Energy Audits"
          description="Our comprehensive energy audits provide valuable insights into your energy usage, identifying key opportunities for savings. With detailed reports and actionable recommendations, we help you"
          bullets={[
            "Reduce Carbon Footprint",
            "Optimize Energy Efficiency",
            "Improve Operational Margins",
          ]}
          image={imgEnergyAudit}
          imageAlt="Energy auditor using a thermal camera and tablet to inspect HVAC and electrical panels"
          imageCaption="Thermal imaging and metering during an on‑site energy audit to uncover efficiency opportunities."
        />

        <ServiceBlock
          badge="Assessment"
          title="Power Quality Audit"
          description="A Power Quality Audit assesses the electrical supply and its effect on equipment and operations. It includes the measurement and analysis of key power quality parameters, such as voltage, current, frequency, harmonics, and transient disturbances, to identify potential issues and optimize system performance."
          bullets={[
            "Equipment Longevity",
            "Energy Saving",
            "Operational Reliability",
            "Regulatory Compliance",
          ]}
          image={imgPowerQuality}
          imageAlt="Oscilloscope and power analyzer measuring harmonics, voltage dips, and transients on an electrical panel"
          imageCaption="Harmonics and waveform analysis to diagnose PQ events impacting equipment reliability."
        />

        <ServiceBlock
          badge="Electrosafety"
          title="Electrical Safety Audit"
          description="Conduct a thorough evaluation of your facility's electrical systems and practices to ensure full compliance with safety standards and regulations. Our audit will focus on identifying potential hazards, providing actionable recommendations, and improving the overall safety and reliability of your electrical installations."
          bullets={[
            "Ensure Compliance",
            "Enhanced Safety",
            "Operational Efficiency",
            "Safeguarded Assets",
          ]}
          image={imgElectricalSafety}
          imageAlt="Electrical safety inspection with PPE: insulated gloves, lockout/tagout, and compliance checklist near switchgear"
          imageCaption="PPE, LOTO, and standards-based checks to identify and mitigate electrical hazards."
        />

        <ServiceBlock
          badge="Execution"
          title="Project Implementation Support"
          description="Project Implementation in Energy Efficiency involves turning strategies and solutions identified during energy audits or assessments into actionable results. A structured approach ensures effective execution and sustainable outcomes. Here’s a concise overview of the process:"
          bullets={[
            "Strategic Planning",
            "Stakeholder Collaboration",
            "Engineering, Procurement and Deployment",
            "Capacity Building and Support",
            "Performance Monitoring and Optimization",
          ]}
          image={imgProjectImplementation}
          imageAlt="Project team coordinating EPC delivery: engineers reviewing drawings at a renewable energy site"
          imageCaption="Coordinated EPC execution with stakeholder alignment and on‑site quality assurance."
        />

      </section>
    </div>
  );
}

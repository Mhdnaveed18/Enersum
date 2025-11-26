import Hero from "../components/Hero";
import { CardTitle, CardText } from "../components/Card";

// Import solution images
import technoReport from "../assets/solutions/Techno-Economic Feasibility Report.png";
import residentialSolar from "../assets/solutions/Residential Solar Solutions.jpg";
import commercialSolar from "../assets/solutions/Commercial Solar Solutions.jpg";
import maintenanceImg from "../assets/solutions/solar-panel-maintenance-service-500x500.webp";

export default function Solutions() {
    const data = [
        {
            title: "⚙️ Techno-Economic Feasibility Report",
            img: technoReport,
            text: (
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Technical Evaluation:</strong> Site assessment, system design, and technology selection.</li>
                    <li><strong>Financial Analysis:</strong> Cost estimates, ROI calculations, funding options.</li>
                    <li><strong>Environmental Assessment:</strong> Impact analysis and mitigation strategies.</li>
                    <li><strong>Regulatory Compliance:</strong> Ensures all required permits and standards are met.</li>
                    <li><strong>Risk Management:</strong> Identification and mitigation of potential risks.</li>
                </ul>
            ),
        },
        {
            title: "🏡 Residential Solar Solutions",
            img: residentialSolar,
            text: (
                <p>
                    Transform your home into a sustainable energy hub. We design and install custom solar systems
                    that reduce your electricity bills and carbon footprint.
                </p>
            ),
        },
        {
            title: "🏢 Commercial Solar Solutions",
            img: commercialSolar,
            text: (
                <p>
                    Power your business with clean, cost-effective energy. Our scalable solutions enhance
                    operational efficiency and promote sustainability.
                </p>
            ),
        },
        {
            title: "🛠️ Solar Maintenance & Support",
            img: maintenanceImg,
            text: (
                <p>
                    Keep your solar system running at its best with our full-spectrum maintenance and
                    troubleshooting services.
                </p>
            ),
        },
    ];

    return (
        <div className="space-y-14">
            <Hero
                title="Solutions"
                subtitle="Empowering a Greener Future – Consulting & Solutions for Renewable Energy"
            />

            {/* Why Choose Us Section */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold text-[#2E7D32]">Why Choose Us?</h2>
                <p className="text-sm sm:text-base text-[#333333]/90 max-w-3xl">
                    We bring years of industry experience to help homeowners and businesses transition to renewable energy sources like solar, biomass, and more.
                </p>
                <ul className="space-y-2 text-sm text-[#333333]">
                    <li>✅ Generate clean, renewable energy</li>
                    <li>✅ Reduce greenhouse gas emissions</li>
                    <li>✅ Enjoy significant cost savings on energy bills</li>
                </ul>
            </section>

            {/* Solutions List */}
            {data.map((item, index) => (
                <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center justify-between gap-10 bg-white shadow-md rounded-2xl p-6 md:p-8 transition-all hover:shadow-lg ${
                        index % 2 !== 0 ? "md:flex-row-reverse" : ""
                    }`}
                >
                    {/* Text Section */}
                    <div className="flex-1 space-y-3">
                        <CardTitle>{item.title}</CardTitle>
                        <CardText>{item.text}</CardText>
                    </div>

                    {/* Image Section - Rectangular Style */}
                    <div className="flex-1 flex justify-center">
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full md:w-[450px] h-[260px] object-cover rounded-xl shadow-md"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}


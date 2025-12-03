import Hero from "../components/Hero";
import { Card, CardTitle, CardText } from "../components/Card";

import residentialSolar from "../assets/solutions/Residential Solar Solutions.jpg";
import commercialSolar from "../assets/solutions/Commercial Solar Solutions.jpg";
import maintenanceImg from "../assets/solutions/solar-panel-maintenance-service-500x500.webp";
import maintenanceVideo from "../assets/solutions/video for enersum.mp4";

export default function ServiceModels() {
    const data = [
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

                    {/* Image Section */}
                    <div className="flex-1 flex justify-center">
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full md:w-[450px] h-[260px] object-cover rounded-xl shadow-md"
                        />
                    </div>
                </div>
            ))}

            {/* Maintenance Video Section */}
            <div className="w-full mt-1">
                <video
                    src={maintenanceVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    className="w-full max-w-5xl mx-auto rounded-2xl shadow-lg"
                />
            </div>


            <div className="space-y-10">
                <Hero
                    title="Service Models"
                    subtitle="Explore the CAPEX and RESCO approaches to renewable energy adoption"
                />

                {/* Intro */}
                <section>
                    <Card>
                        <CardTitle>Our Service Models</CardTitle>
                        <CardText>
                            Explore two proven pathways to adopt renewable energy depending on your capital strategy, risk appetite,
                            and operational preferences.
                        </CardText>
                    </Card>
                </section>

                {/* CAPEX & RESCO */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* CAPEX Model */}
                    <Card>
                        <CardTitle>CAPEX Model</CardTitle>
                        <CardText>
                            With the CAPEX model, clients make an upfront investment to purchase and install renewable energy systems.
                            We provide support with cost analysis, project planning, and execution.
                        </CardText>
                        <div className="mt-3">
                            <h4 className="text-sm font-semibold text-[#2E7D32]">Key Benefits:</h4>
                            <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-[#333333]/80">
                                <li>Full ownership of the system</li>
                                <li>Long-term savings on energy costs</li>
                                <li>Potential tax benefits and incentives</li>
                            </ul>
                        </div>
                    </Card>

                    {/* RESCO Model */}
                    <Card>
                        <CardTitle>RESCO Model</CardTitle>
                        <CardText>
                            With the RESCO model, we handle financing, installation, and maintenance. Clients only pay for the energy
                            they consume, eliminating large upfront costs.
                        </CardText>
                        <div className="mt-3">
                            <h4 className="text-sm font-semibold text-[#2E7D32]">Key Benefits:</h4>
                            <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-[#333333]/80">
                                <li>No upfront costs</li>
                                <li>Predictable monthly payments</li>
                                <li>Maintenance handled by our team</li>
                            </ul>
                        </div>
                    </Card>
                </section>

                {/* Comparison Table */}
                <section>
                    <Card>
                        <CardTitle>Comparison: CAPEX vs RESCO</CardTitle>
                        <div className="mt-3 overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                <tr className="text-left text-[#2E7D32]">
                                    <th className="py-2 pr-4">Feature</th>
                                    <th className="py-2 pr-4">CAPEX Model</th>
                                    <th className="py-2">RESCO Model</th>
                                </tr>
                                </thead>
                                <tbody className="text-[#333333]/80">
                                <tr className="border-t border-white/60">
                                    <td className="py-2 pr-4">Upfront Investment</td>
                                    <td className="py-2 pr-4">Required</td>
                                    <td className="py-2">None</td>
                                </tr>
                                <tr className="border-t border-white/60">
                                    <td className="py-2 pr-4">Ownership</td>
                                    <td className="py-2 pr-4">Full ownership</td>
                                    <td className="py-2">No ownership</td>
                                </tr>
                                <tr className="border-t border-white/60">
                                    <td className="py-2 pr-4">Maintenance Responsibility</td>
                                    <td className="py-2 pr-4">Client</td>
                                    <td className="py-2">RESCO Provider</td>
                                </tr>
                                <tr className="border-t border-white/60">
                                    <td className="py-2 pr-4">Long-term Savings</td>
                                    <td className="py-2 pr-4">High</td>
                                    <td className="py-2">Moderate to High</td>
                                </tr>
                                <tr className="border-t border-white/60">
                                    <td className="py-2 pr-4">Payment Structure</td>
                                    <td className="py-2 pr-4">One-time + Ongoing</td>
                                    <td className="py-2">Pay-per-use / Monthly</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </section>
            </div>

        </div>
    );
}

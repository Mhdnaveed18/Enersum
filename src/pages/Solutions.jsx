import Hero from "../components/Hero";
import { Card, CardTitle, CardText } from "../components/Card";

export default function Solutions() {
    return (
        <div className="space-y-10">
            <Hero
                title="Solutions"
                subtitle="Empowering a Greener Future – Consulting & Solutions for Renewable Energy"
            />

            {/* Why Choose Us */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold text-[#2E7D32]">Why Choose Us?</h2>
                <p className="text-sm sm:text-base text-[#333333]/90">
                    We bring years of industry experience to help homeowners and businesses transition to renewable energy sources like solar, biomass, and more.
                </p>
                <ul className="space-y-2 text-sm text-[#333333]">
                    <li>✅ Generate clean, renewable energy</li>
                    <li>✅ Reduce greenhouse gas emissions</li>
                    <li>✅ Enjoy significant cost savings on energy bills</li>
                </ul>
            </section>

            {/* Techno-Economic Feasibility Report */}
            <section>
                <Card>
                    <CardTitle>⚙️ Techno-Economic Feasibility Report</CardTitle>
                    <CardText>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Technical Evaluation:</strong> Site assessment, system design, and technology selection.</li>
                            <li><strong>Financial Analysis:</strong> Cost estimates, ROI calculations, funding options.</li>
                            <li><strong>Environmental Assessment:</strong> Impact analysis and mitigation strategies.</li>
                            <li><strong>Regulatory Compliance:</strong> Ensures all required permits and standards are met.</li>
                            <li><strong>Risk Management:</strong> Identification and mitigation of potential risks.</li>
                        </ul>
                    </CardText>
                </Card>
            </section>

            {/* Residential Solar */}
            <section>
                <Card>
                    <CardTitle>🏡 Residential Solar Solutions</CardTitle>
                    <CardText>
                        Transform your home into a sustainable energy hub. We design and install custom solar systems
                        that reduce your electricity bills and carbon footprint.
                    </CardText>
                </Card>
            </section>

            {/* Commercial Solar */}
            <section>
                <Card>
                    <CardTitle>🏢 Commercial Solar Solutions</CardTitle>
                    <CardText>
                        Power your business with clean, cost-effective energy. Our scalable solutions enhance
                        operational efficiency and promote sustainability.
                    </CardText>
                </Card>
            </section>

            {/* Maintenance */}
            <section>
                <Card>
                    <CardTitle>🛠️ Solar Maintenance & Support</CardTitle>
                    <CardText>
                        Keep your solar system running at its best with our full-spectrum maintenance and
                        troubleshooting services.
                    </CardText>
                </Card>
            </section>
        </div>
    );
}

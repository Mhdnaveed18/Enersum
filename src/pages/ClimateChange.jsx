import Hero from "../components/Hero";
import { Card, CardTitle, CardText } from "../components/Card";

export default function ClimateChange() {
    return (
        <div className="space-y-10">
            <Hero
                title="Climate Change"
                subtitle="Turn climate risk into strategic advantage with pragmatic, data-driven action."
            />

            {/* Overview Section */}
            <section>
                <Card>
                    <CardTitle>Overview</CardTitle>
                    <CardText>
                        India’s Nationally Determined Contributions (NDCs) outline the nation’s long-term climate
                        commitments under the Paris Agreement. India aims to reduce the emissions intensity of its GDP
                        by <strong>33–35% by 2030</strong> (from 2005 levels) while transitioning toward a cleaner and
                        more resilient economy. These commitments focus on expanding renewable energy capacity,
                        strengthening carbon sinks, improving resource efficiency, and protecting vulnerable sectors
                        through climate adaptation.
                    </CardText>

                    <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-[#333333]/80">
                        <li>
                            <strong>Non-Fossil Fuel Capacity:</strong> Target of <strong>500 GW</strong> by 2030 with
                            50% renewable energy contribution.
                        </li>
                        <li>
                            <strong>Forest Cover:</strong> Creation of <strong>2.5–3 billion tonnes CO₂e</strong> additional
                            carbon sinks by 2030.
                        </li>
                        <li>
                            <strong>Sustainable Development:</strong> Strong emphasis on urban development, energy
                            efficiency, and waste management.
                        </li>
                        <li>
                            <strong>Adaptation:</strong> Prioritizing resilience in agriculture, water resources, and
                            disaster management.
                        </li>
                    </ul>

                    <CardText className="mt-3">
                        India’s strategy is supported by the principles of equity, climate finance, and technology
                        transfer from developed nations.
                    </CardText>
                </Card>
            </section>

            {/* Content Cards */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* GHG Accounting */}
                <Card>
                    <CardTitle>GHG Accounting</CardTitle>
                    <CardText>
                        We offer carbon footprint assessments using international standards like ISO 14064.
                    </CardText>
                    <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-[#333333]/80">
                        <li><strong>Data Collection:</strong> Covers energy, waste, transport, and more.</li>
                        <li><strong>GHG Calculation:</strong> Scope 1, 2, and 3 emissions.</li>
                        <li><strong>Reporting:</strong> Findings, insights, and reduction pathways.</li>
                    </ul>
                </Card>

                {/* GHG Assurance */}
                <Card>
                    <CardTitle>GHG Assurance</CardTitle>
                    <CardText>
                        We verify and validate your emissions data to ensure compliance and build credibility.
                    </CardText>
                    <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-[#333333]/80">
                        <li><strong>Verification:</strong> Independent, third-party validation.</li>
                        <li><strong>Monitoring:</strong> Track emission trends over time.</li>
                        <li><strong>Certification:</strong> Prove transparency and gain recognition.</li>
                    </ul>
                    <div className="mt-3">
                        <CardTitle>Benefits</CardTitle>
                        <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-[#333333]/80">
                            <li>Enhanced trust with stakeholders.</li>
                            <li>Improved decision-making through reliable data.</li>
                        </ul>
                    </div>
                </Card>

                {/* LCA */}
                <Card>
                    <CardTitle>Life Cycle Assessment (LCA) for Product Carbon Footprint</CardTitle>
                    <CardText>
                        We use ISO 14067 and ISO 14040 methods to analyze carbon footprints via software like SimaPro
                        and OpenLCA.
                    </CardText>
                    <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-[#333333]/80">
                        <li><strong>Scope Definition:</strong> Goals, functional units, and system boundaries.</li>
                        <li><strong>Data Collection:</strong> Inventory of materials, energy, emissions.</li>
                        <li><strong>Impact Assessment:</strong> Focus on GWP, water use, toxicity, etc.</li>
                        <li><strong>Interpretation:</strong> Hotspot analysis and improvement suggestions.</li>
                    </ul>
                </Card>

                {/* Climate Finance & Carbon Offset */}
                <Card className="md:col-span-2">
                    <CardTitle>Climate Finance &amp; Carbon Offset</CardTitle>
                    <CardText>
                        We support sustainable finance and certified offset markets (CDM, VCS, GS).
                    </CardText>
                    <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-[#333333]/80">
                        <li><strong>Capacity Building:</strong> Training in carbon offset and finance systems.</li>
                        <li><strong>Consulting:</strong> Strategy for compliance, credit generation, and sales.</li>
                        <li><strong>Project Development:</strong> Focused on renewables, forestry, and waste sectors.</li>
                        <li><strong>Verification:</strong> Ensure additional and verified reductions.</li>
                        <li><strong>Investment Advisory:</strong> Align portfolios with sustainability goals.</li>
                    </ul>
                    <CardText className="mt-3">
                        Each carbon credit equals 1 ton CO₂e avoided or removed. Verified offsets support climate and
                        brand impact.
                    </CardText>
                </Card>

            </section>
        </div>
    );
}

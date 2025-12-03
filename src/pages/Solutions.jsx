import Hero from "../components/Hero";
import { CardTitle, CardText } from "../components/Card";

// Import solution images
import technoReport from "../assets/solutions/Techno-Economic Feasibility Report.png";

// Import Renewable images
import solarImg from "../assets/Renewable/solar pv.jpg";
import windImg from "../assets/Renewable/wind power.jpg";
import storageImg from "../assets/Renewable/energy storage.jpg";

import Biogas from "../assets/solutions/new section/image 3 .jpg";
import CARBON from "../assets/solutions/new section/image 1 .jpg";
import rtc from "../assets/solutions/new section/image 2.jpg";
import solarwind from "../assets/solutions/new section/image 4.jpg";

export default function Solutions() {
    const renewableItems = [
        { title: "Solar PV", img: solarImg },
        { title: "Wind Power", img: windImg },
        { title: "Energy Storage", img: storageImg },
    ];

    const consultingBlocks = [
        {
            title: "Clean Energy Projects – Solar/Wind/Biomass",
            desc: "Solar farm + wind turbines + biomass plant (combined)",
            img: solarwind,
        },
        {
            title: "Energy Storage for RE – RTC Power",
            desc: "BESS and Pumped hydro for round-the-clock power.",
            img: rtc,
        },
        {
            title: "Waste-to-Energy & Circular Bioeconomy – CBG and Biofuels",
            desc: "Biogas digesters, agri-residue processing, CBG bottling units.",
            img: Biogas,
        },
        {
            title: "Low Carbon Tech – Green H2, SAF, RFNBO Fuels",
            desc: "Electrolyser, hydrogen storage, SAF production.",
            img: CARBON,
        },
    ];

    const data = [
        {
            title: "⚙️ Techno-Economic Feasibility Report",
            img: technoReport,
            text: (
                <>
                    <ul className="list-disc pl-5 space-y-1 mb-6">
                        <li><strong>Technical Evaluation:</strong> Site assessment, design, and technology selection.</li>
                        <li><strong>Financial Analysis:</strong> CAPEX, ROI, payback period, funding options.</li>
                        <li><strong>Environmental Assessment:</strong> Environmental impact & mitigation.</li>
                        <li><strong>Regulatory Compliance:</strong> Approvals, permits, compliance roadmap.</li>
                        <li><strong>Risk Management:</strong> Technical, financial & operational risks.</li>
                    </ul>

                    {/* Renewable Items Images */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {renewableItems.map((item) => (
                            <div
                                key={item.title}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
                            >
                                <div className="w-full aspect-[4/3] bg-white flex items-center justify-center overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                <div className="p-3">
                                    <p className="font-semibold text-sm">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ),
        },
    ];

    return (
        <div className="space-y-14">

            <Hero
                title="Renewable Energy Consultancy"
                subtitle="Empowering a Greener Future – Consulting & Solutions for Renewable Energy"
            />

            {/* Why Choose Us Section */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold text-[#2E7D32]">Why Choose Us?</h2>
                <p className="text-sm sm:text-base text-[#333333]/90 max-w-3xl">
                    We support industries, utilities, and governments with renewable energy advisory,
                    feasibility studies, and low-carbon transition planning.
                </p>
                <ul className="space-y-2 text-sm text-[#333333]">
                    <li>✅ Generate clean, renewable energy</li>
                    <li>✅ Reduce greenhouse gas emissions</li>
                    <li>✅ Strategic advisory for large-scale RE adoption</li>
                </ul>
            </section>

            {/* FEASIBILITY REPORT SECTION */}
            {data.map((item, index) => (
                <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center justify-between gap-10 bg-white shadow-md rounded-2xl p-6 md:p-8 transition-all hover:shadow-lg ${
                        index % 2 !== 0 ? "md:flex-row-reverse" : ""
                    }`}
                >
                    <div className="flex-1 space-y-3">
                        <CardTitle>{item.title}</CardTitle>
                        <CardText>{item.text}</CardText>
                    </div>

                    <div className="flex-1 flex justify-center">
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full md:w-[450px] h-[260px] object-cover rounded-xl shadow-md"
                        />
                    </div>
                </div>
            ))}

            {/* RENEWABLE ENERGY CONSULTING TEXT */}
            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-[#2E7D32]">
                    Renewable Energy Consulting
                </h2>

                <h3 className="text-lg font-semibold text-[#2E7D32]">
                    RE Solutions & Decarbonization Advisory
                </h3>

                <p className="text-sm sm:text-base text-[#333333]/90 max-w-4xl leading-relaxed">
                    Our renewable consulting practice supports industries, utilities, investors,
                    and governments in accelerating clean energy transition.
                    We deliver feasibility studies, concept design, policy advisory, and decarbonization roadmaps.
                </p>
            </section>

            {/* CONSULTING BLOCKS FULL-WIDTH WITH NORMAL IMAGES */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {consultingBlocks.map((block, idx) => (
                    <div
                        key={idx}
                        className="border border-green-600 p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all w-full"
                    >
                        {/* Rectangular Image */}
                        <div className="w-full bg-gray-100 rounded-2xl overflow-hidden mb-4">
                            <img
                                src={block.img}
                                alt={block.title}
                                className="w-full h-60 md:h-64 lg:h-72 object-cover rounded-2xl"
                            />
                        </div>

                        <h3 className="font-semibold text-xl text-green-700">{block.title}</h3>
                        <p className="text-base text-gray-700 mt-2">{block.desc}</p>
                    </div>
                ))}
            </section>


        </div>
    );
}

import Hero from "../components/Hero";
import { Card, CardTitle, CardText } from "../components/Card";

// Import images from assets
import solarImg from "../assets/Renewable/solar pv.jpg";
import windImg from "../assets/Renewable/wind power.jpg";
import storageImg from "../assets/Renewable/energy storage.jpg";

export default function RenewableEnergy() {
    const items = [
        { title: "Solar PV", text: "High-efficiency systems for rooftops and ground.", img: solarImg },
        { title: "Wind Power", text: "Onshore solutions engineered for output.", img: windImg },
        { title: "Energy Storage", text: "Battery systems to balance and back up supply.", img: storageImg },
    ];

    return (
        <div className="space-y-10">
            <Hero
                title="Renewable Energy"
                subtitle="Design, deploy, and optimize clean energy systems that power your operations."
            />
            <section>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {items.map((s) => (
                        <Card key={s.title}>
                            {/* Add image on top */}
                            <img src={s.img} alt={s.title} className="w-full h-40 object-cover rounded-t-2xl" />
                            <div className="p-4">
                                <CardTitle>{s.title}</CardTitle>
                                <CardText>{s.text}</CardText>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
}

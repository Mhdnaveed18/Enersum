import Hero from "../components/Hero";
import { Card, CardTitle, CardText } from "../components/Card";

export default function Sustainability() {
  const items = [
    { title: "ESG Programs", text: "Implement ESG across governance, people, and operations." },
    { title: "Supply Chain", text: "Engage suppliers and reduce upstream impacts." },
    { title: "Culture & Training", text: "Build an organization that thinks sustainably." },
  ];

  return (
    <div className="space-y-10">
      <Hero
        title="Sustainability"
        subtitle="Create long-term value with strategies that are good for business and the planet."
      />
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((s) => (
            <Card key={s.title}>
              <CardTitle>{s.title}</CardTitle>
              <CardText>{s.text}</CardText>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

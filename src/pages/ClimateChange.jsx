import Hero from "../components/Hero";
import { Card, CardTitle, CardText } from "../components/Card";

export default function ClimateChange() {
  const items = [
    { title: "Emissions Baselines", text: "Establish Scope 1/2/3 baselines for action." },
    { title: "Reduction Pathways", text: "Science-based targets and plans." },
    { title: "Reporting & Disclosures", text: "Clear, compliant ESG communications." },
  ];

  return (
    <div className="space-y-10">
      <Hero
        title="Climate Change"
        subtitle="Turn climate risk into strategic advantage with pragmatic, data-driven action."
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

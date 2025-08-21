import Hero from "../components/Hero";
import { Card, CardTitle, CardText } from "../components/Card";

export default function ServiceModels() {
  const items = [
    { title: "Advisory", text: "Strategy, planning, and roadmap development." },
    { title: "Implementation", text: "End-to-end delivery and change management." },
    { title: "Managed Services", text: "Ongoing performance monitoring and optimization." },
  ];

  return (
    <div className="space-y-10">
      <Hero
        title="Service Models"
        subtitle="Engage with Enersum in the way that works best for your business."
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

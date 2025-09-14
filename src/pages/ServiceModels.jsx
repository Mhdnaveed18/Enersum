import Hero from "../components/Hero";
import { Card, CardTitle, CardText } from "../components/Card";

export default function ServiceModels() {
  return (
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

      {/* FAQs */}
      <section>
        <Card>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <div className="mt-3 space-y-4">
            <div>
              <h4 className="font-semibold text-[#1565C0] text-sm">What is CAPEX in renewable energy?</h4>
              <CardText>
                CAPEX refers to the upfront capital investment required to purchase and install renewable energy systems.
              </CardText>
            </div>
            <div>
              <h4 className="font-semibold text-[#1565C0] text-sm">How does the RESCO model work?</h4>
              <CardText>
                In the RESCO model, we finance and manage the renewable energy project. Clients pay for the electricity
                generated without bearing installation costs.
              </CardText>
            </div>
            <div>
              <h4 className="font-semibold text-[#1565C0] text-sm">Which model is right for my project?</h4>
              <CardText>
                It depends on your financial situation, risk profile, and long-term goals. Our team can assist you in
                selecting the most suitable model.
              </CardText>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}

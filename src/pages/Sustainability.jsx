import Hero from "../components/Hero";
import { Card, CardTitle, CardText } from "../components/Card";

export default function Sustainability() {
  return (
    <div className="space-y-10">
      <Hero
        title="Sustainability"
        subtitle="Create long-term value with strategies that are good for business and the planet."
      />

      {/* ESG & Sustainability Reporting */}
      <section>
        <Card>
          <CardTitle>ESG &amp; Sustainability Reporting</CardTitle>
          <CardText>
            We are dedicated to sustainability in every aspect of our operations. Our reporting follows globally
            recognized frameworks:
          </CardText>
          <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-[#333333]/80">
            <li>Global Reporting Initiative (GRI)</li>
            <li>Sustainability Accounting Standards Board (SASB)</li>
            <li>Task Force on Climate-related Financial Disclosures (TCFD)</li>
            <li>Business Responsibility and Sustainability Report (BRSR)</li>
            <li>Cross Border Adjustment Mechanism (CBAM)</li>
          </ul>
        </Card>
      </section>

      {/* Main Content Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Key Reporting Components */}
        <Card>
          <CardTitle>Key Reporting Components</CardTitle>
          <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-[#333333]/80">
            <li><strong>Materiality Assessment:</strong> Engaging stakeholders to prioritize sustainability issues.</li>
            <li><strong>Performance Metrics:</strong> Carbon, energy, waste, water, and social impact data.</li>
            <li><strong>Stakeholder Engagement:</strong> Feedback from employees, customers, and communities.</li>
            <li><strong>Transparency:</strong> Honest review of progress and challenges.</li>
            <li><strong>Future Goals:</strong> Clear, measurable targets and improvement plans.</li>
          </ul>
        </Card>

        {/* Sustainability Ratings */}
        <Card>
          <CardTitle>Sustainability Ratings</CardTitle>
          <CardText>
            Ratings by CDP, EcoVadis, and SBTi help companies benchmark and improve ESG performance.
          </CardText>
          <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-[#333333]/80">
            <li><strong>CDP:</strong> Reports on GHG emissions, climate risk, and water usage.</li>
            <li><strong>SBTi:</strong> Framework for science-based GHG reduction targets.</li>
            <li><strong>EcoVadis:</strong> ESG performance ratings, focused on supply chain sustainability.</li>
          </ul>
          <CardText className="mt-3">
            These tools foster transparency, strategy alignment, and stakeholder engagement for a sustainable future.
          </CardText>
        </Card>

        {/* ESG Risk Assessment */}
        <Card>
          <CardTitle>ESG Risk Assessment</CardTitle>
          <CardText>
            We help identify ESG risks and opportunities to build a resilient and responsible strategy.
          </CardText>
          <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-[#333333]/80">
            <li><strong>Assessment &amp; Strategy:</strong> Evaluate current ESG status and develop improvement plans.</li>
            <li><strong>Risk Identification:</strong> Highlight environmental impacts and prioritize decarbonization.</li>
            <li><strong>Stakeholder Expectations:</strong> Meet increasing demands for transparency and climate action.</li>
            <li><strong>Regulatory Compliance:</strong> Avoid penalties and prepare for stricter environmental laws.</li>
            <li><strong>Long-Term Sustainability:</strong> Align environmental goals with social and governance outcomes.</li>
          </ul>
        </Card>

        {/* ESG Rating */}
        <Card>
          <CardTitle>ESG Rating</CardTitle>
          <CardText>
            We guide companies through ESG reporting and ratings to enhance compliance, visibility, and investment potential.
          </CardText>
          <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-[#333333]/80">
            <li><strong>Risk Exposure:</strong> Understand sector-specific ESG risks.</li>
            <li><strong>Risk Management:</strong> Evaluate effectiveness of policies and practices.</li>
            <li><strong>Controversies:</strong> Assess past incidents affecting ESG credibility.</li>
            <li><strong>Engagement:</strong> Ongoing dialogue to reflect real-time ESG progress in ratings.</li>
          </ul>
        </Card>

        {/* Benefits of Sustainability Reporting & Ratings */}
        <Card className="md:col-span-2">
          <CardTitle>Benefits of Sustainability Reporting &amp; Ratings</CardTitle>
          <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-[#333333]/80">
            <li><strong>Enhanced Reputation:</strong> Demonstrates accountability and responsibility.</li>
            <li><strong>Risk Management:</strong> Proactive approach to avoid operational and reputational risks.</li>
            <li><strong>Investor Attraction:</strong> Appeals to ESG-focused investors.</li>
            <li><strong>Regulatory Compliance:</strong> Stay ahead of evolving laws and expectations.</li>
          </ul>
        </Card>
      </section>
    </div>
  );
}

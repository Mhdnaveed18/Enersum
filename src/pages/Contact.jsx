import Hero from "../components/Hero";
import { Card } from "../components/Card";

export default function Contact() {
    return (
        <div className="space-y-10">
            {/* Hero Section */}
            <Hero
                title="Contact Us"
                subtitle="We’d love to learn about your goals. Send us a message and our team will get back to you."
            />

            {/* First Horizontal Section: Contact Info */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 flex flex-col items-start">
                    <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                    <p className="text-gray-600">
                        N-8/236, A - 53, Ganeshdham Colony,
                        <br />
                        Sunderpur, Varanasi – 221005
                    </p>
                </Card>

                <Card className="p-6 flex flex-col items-start">
                    <h3 className="text-xl font-semibold mb-2">Give us a call</h3>
                    <p className="text-gray-600">+91 93358 97292</p>
                    <p className="text-gray-600">+91 94156 21123</p>
                </Card>

                <Card className="p-6 flex flex-col items-start">
                    <h3 className="text-xl font-semibold mb-2">Help Desk</h3>
                    <p className="text-gray-600">sales@enersum.in</p>
                </Card>
            </section>

            {/* Second Horizontal Section: Map */}
            <section>
                <Card className="p-0 overflow-hidden">
                    <iframe
                        title="Enersum Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.812682783239!2d83.0278!3d25.3176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2d8d4b1a1a7b%3A0xb1d0dc1d2d69af8!2sSunderpur%2C%20Varanasi%2C%20Uttar%20Pradesh%20221005!5e0!3m2!1sen!2sin!4v1692620486591!5m2!1sen!2sin"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </Card>
            </section>
        </div>
    );
}

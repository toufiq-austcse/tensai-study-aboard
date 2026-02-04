import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <Process />
                {/* <Testimonials /> */}
                <Contact />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

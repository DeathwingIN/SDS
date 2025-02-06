import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash; // e.g., "#about"
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <main className="min-h-screen">
            <Hero />
            <section id="about">
                <About />
            </section>
            <section id="services">
                <Services />
            </section>
            {/*<section id="testimonials">*/}
            {/*  <Testimonials />*/}
            {/*</section>*/}
            <section id="contact">
                <Contact />
            </section>
        </main>
    );
};

export default Index;
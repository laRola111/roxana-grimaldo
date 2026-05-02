import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { BookingContact } from "@/components/sections/BookingContact";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Faq />
      <BookingContact />
      <Footer />
    </main>
  );
}

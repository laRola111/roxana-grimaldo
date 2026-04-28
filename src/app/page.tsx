import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { BookingContact } from "@/components/sections/BookingContact";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <BookingContact />
      <Footer />
    </main>
  );
}

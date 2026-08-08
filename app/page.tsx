import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import GrupUmum from "@/components/GrupUmum";
import GrupVip from "@/components/GrupVip";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ValueProps from "@/components/ValueProps";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <GrupUmum />
        <GrupVip />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

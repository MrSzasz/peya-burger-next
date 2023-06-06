import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import HowToWin from "@/components/HowToWin/HowToWin";
import Navbar from "@/components/Navbar/Navbar";
import Travel from "@/components/Travel/Travel";

export default function Home() {
  return (
    <main className="font-texta">
      <Navbar/>
      <Hero/>
      <Travel/>
      <HowToWin/>
      <Footer/>
    </main>
  );
}

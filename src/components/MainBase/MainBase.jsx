import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import HowToWin from "../HowToWin/HowToWin";
import Navbar from "../Navbar/Navbar";
import Travel from "../Travel/Travel";
import TutorialVideo from "../TutorialVideo/TutorialVideo";

const MainBase = ({ dict }) => {
  return (
    <main className="font-texta">
      <Navbar />
      <Hero heroTitle={dict.hero} />
      <Travel travelDict={dict.travel} />
      {/* <TutorialVideo /> */}
      <HowToWin howToWinDict={dict.howToWin} />
      <Footer footerTitle={dict.footer} />
    </main>
  );
};

export default MainBase;

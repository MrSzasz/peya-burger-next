import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import HowToWin from "../HowToWin/HowToWin";
import Navbar from "../Navbar/Navbar";
import Travel from "../Travel/Travel";
import TutorialVideo from "../TutorialVideo/TutorialVideo";

const MainBase = ({ dict }) => {
  return (
    <main className="font-texta">
      <Navbar tyc={dict.navbar} />
      <Hero heroData={dict.hero} />
      <Travel travelDict={dict.travel} />
      {dict.video && <TutorialVideo videoID={dict.video} />}
      <HowToWin howToWinDict={dict.howToWin} />
      <Footer footerDict={dict.footer} />
    </main>
  );
};

export default MainBase;

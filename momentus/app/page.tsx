import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Highlight from "./components/highlight";
import Feedback from "./components/feedBack"
import TalkToUs from "./components/talkToUs";
import Footer from "./components/footer";
import AboutOrganizarion from "./components/aboutOrganization";
import BurningQuestions from "./components/burningQuestions";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Highlight/>
      <AboutOrganizarion/>
      <BurningQuestions/>
      <Feedback/>
      <TalkToUs/>
      <Footer/>
    </div>
  );
}

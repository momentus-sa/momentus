import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Feedback from "./components/feedBack"
import TalkToUs from "./components/talkToUs";
import Footer from "./components/footer";
import AboutOrganizarion from "./components/aboutOrganization";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <AboutOrganizarion/>
      <Feedback/>
      <TalkToUs/>
      <Footer/>
    </div>
  );
}

import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import BurningQuestions from "./components/burningQuestions";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <BurningQuestions/>
    </div>
  );
}

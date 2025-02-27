import Image from "next/image";
import Navbar from "../components/navbar"
import SignIn from "./signIn";

export default function Home() {
  return (
    <div>
     {/* <div className="mb-[4.5rem]"> <Navbar /></div> */}
      <SignIn />
    </div>
  );
}
import Banner from "@/components/Banner";
import Friends from "@/components/Friends";
import Navbar from "@/components/Navbar";
import Summary from "@/components/Summary";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Summary />
      <Friends />
     
      
    </div>

  );
}

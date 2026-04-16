import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Friends from "@/components/Friends";
import Navbar from "@/components/Navbar";
import Summary from "@/components/Summary";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
     
      <Friends />
      <Footer />
     
      
    </div>

  );
}

import Banner from "@/components/Banner";
import Friends from "@/components/Friends";
import Summary from "@/components/Summary";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <Banner />
      <Friends />
    </div>
  );
}

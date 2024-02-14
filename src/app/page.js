import HeroSection from "@/components/home/heroSection";
import NavBar from "@/components/common/navBar/navBar";
import Image from "next/image";
import TopHotelsSection from "@/components/home/topHotelsSection";

export default function Home() {
  return (
    <div className="relative p-0 m-0">
      <NavBar />
      <HeroSection />
      <TopHotelsSection />
    </div>
  );
}

import HeroSection from "@/components/heroSection";
import NavBar from "@/components/navBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative p-0 m-0">
      <NavBar />
      <HeroSection />
    </div>
  );
}

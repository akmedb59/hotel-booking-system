import HeroSection from "@/components/home/heroSection/heroSection";
import NavBar from "@/components/common/navBar/navBar";
import TopHotelsSection from "@/components/home/topHotelsSection/topHotelsSection";
import FeatureSection from "@/components/home/featureSection/featureSection";
import StatsSection from "@/components/home/statsSection/statsSection";
import CountriesSection from "@/components/home/countriesSection/countriesSection";
import Footer from "@/components/common/footer/footer";

export default function Home() {
  return (
    <div className="relative p-0 m-0">
      <NavBar />
      <HeroSection />
      <div className="py-40 space-y-32">
        <TopHotelsSection />
        <FeatureSection />
        <StatsSection />
        <CountriesSection />
      </div>
      <Footer />
    </div>
  );
}

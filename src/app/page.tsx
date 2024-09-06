import BannerSection from "@/components/views/BannerSection";
import CategorySection from "@/components/views/CategorySection";
import HeroSection from "@/components/views/HeroSection";

export default function Home() {
  return (
    <section className="h-screen overflow-scroll relative z-40">
      <HeroSection />
      <BannerSection />
      <CategorySection />
    </section>
  );
}

import BannerSection from "@/components/views/BannerSection";
import CategorySection from "@/components/views/CategorySection";
import HeroSection from "@/components/views/HeroSection";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <BannerSection />
      <CategorySection />
    </section>
  );
}

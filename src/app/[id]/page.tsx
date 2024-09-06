import CategorySection from "@/components/views/CategorySection";
import ProjectDescription from "@/components/views/ProjectDescription";

export default function Home() {

  return (
    <section className="relative z-40">
      <ProjectDescription />
      <CategorySection />
    </section>
  );
}

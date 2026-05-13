import ConsultingHero from "@/components/blog/ConsultingHero";
import ForgeRoadmap from "@/components/blog/ForgeRoadmap";
import ServiceGrid from "@/components/blog/ServiceGrid";

export default function BlogPage() {
  return (
    <main className='min-h-screen pb-20'>
      <ConsultingHero />
      <ServiceGrid />
      <ForgeRoadmap />
    </main>
  );
}

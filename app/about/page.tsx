import AboutHero from "@/components/about/AboutHero";
import Mission from "@/components/about/Mission";
import Biography from "@/components/about/Biography";

export default function AboutPage() {
  return (
    <main className='min-h-screen'>
      <AboutHero />
      <Mission />
      <Biography />
    </main>
  );
}

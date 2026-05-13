import MinistryHero from "@/components/ministry/MinistryHero";
import Initiatives from "@/components/ministry/Initiatives";

export default function MinistryPage() {
  return (
    <main className='pt-20'>
      <MinistryHero />
      <Initiatives />
    </main>
  );
}

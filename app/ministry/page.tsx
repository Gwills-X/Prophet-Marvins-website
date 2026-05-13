import MinistryHero from "@/components/ministry/MinistryHero";
import MinistryMandate from "@/components/ministry/MinistryMandate";
import VisionNexus from "@/components/ministry/VisionNexus";

export default function MinistryPage() {
  return (
    <main className='pt-20'>
      <MinistryHero />
      <MinistryMandate />
      <VisionNexus />
    </main>
  );
}

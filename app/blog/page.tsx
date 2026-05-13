import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";

export default function BlogPage() {
  return (
    <main className='min-h-screen pb-20'>
      <BlogHero />
      <BlogGrid />
    </main>
  );
}

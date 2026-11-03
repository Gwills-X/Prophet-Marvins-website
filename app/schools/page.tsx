import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Schools | Praetorium Academy of Generals",
  description:
    "Discover the mandate, vision, mission, and core pillars of the Praetorium Academy of Generals.",
};

const pillars = [
  {
    title: "Spiritual Formation",
    description:
      "Developing spiritual depth, character, discernment, and intimacy with God.",
  },
  {
    title: "Leadership Development",
    description:
      "Equipping believers with the wisdom and capacity to lead people, institutions, and systems.",
  },
  {
    title: "Kingdom Governance",
    description:
      "Understanding dominion, stewardship, influence, and the administration of God's purposes.",
  },
  {
    title: "Intellectual Transformation",
    description:
      "Developing sound minds, critical thinking, and a biblical worldview.",
  },
  {
    title: "Marketplace Influence",
    description:
      "Preparing believers to occupy and influence different spheres of society.",
  },
  {
    title: "Personal Development",
    description:
      "Building discipline, excellence, emotional intelligence, and personal responsibility.",
  },
];

export default function SchoolsPage() {
  return (
    <main className='min-h-screen'>
      <section className='bg-stone-950 text-white pt-36 pb-20 md:pt-44 md:pb-28'>
        <div className='max-w-7xl mx-auto px-6'>
          <p className='text-amber-400 font-semibold uppercase tracking-[0.2em] text-sm mb-6'>
            Schools
          </p>
          <h1 className='max-w-5xl text-4xl sm:text-5xl md:text-7xl font-bold leading-tight'>
            The Praetorium Academy of Generals
          </h1>
          <div className='mt-8 max-w-3xl border-l-2 border-amber-400 pl-6'>
            <p className='text-xl md:text-2xl text-stone-200 leading-relaxed'>
              Raising Generals for Dominion and Governance.
            </p>
            <p className='mt-4 text-stone-400 leading-relaxed'>
              A leadership mentorship and equipping platform committed to
              raising well-rounded believers with the wisdom, character,
              spiritual depth, and capacity to exercise dominion and influence
              systems of governance across every sphere of life.
            </p>
          </div>
        </div>
      </section>

      <section className='py-20 md:py-28'>
        <div className='max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]'>
          <div>
            <p className='text-amber-700 font-semibold uppercase tracking-[0.18em] text-sm mb-4'>
              Our Mandate
            </p>
            <h2 className='text-3xl md:text-4xl font-bold text-stone-900 leading-tight'>
              Grounded in spirit. Equipped to govern.
            </h2>
          </div>
          <div>
            <p className='text-lg text-stone-600 leading-relaxed'>
              To raise generals who are spiritually grounded, intellectually
              equipped, administratively competent, and socially influential,
              carrying the mandate of dominion and governance.
            </p>
            <p className='mt-6 text-stone-600 leading-relaxed'>
              The academy equips leaders, builds spiritually mature believers,
              develops kingdom-minded thinkers, and raises men and women who
              understand their responsibility in advancing God&apos;s purposes
              in the earth.
            </p>
            <div className='mt-10 grid gap-8 sm:grid-cols-2'>
              <div className='border-t border-stone-300 pt-5'>
                <h3 className='text-xl font-bold text-stone-900'>Our Vision</h3>
                <p className='mt-3 text-stone-600 leading-relaxed'>
                  To raise a generation of kingdom generals equipped to manifest
                  God&apos;s wisdom, exercise dominion, and provide leadership
                  across nations and generations.
                </p>
              </div>
              <div className='border-t border-stone-300 pt-5'>
                <h3 className='text-xl font-bold text-stone-900'>
                  Our Mission
                </h3>
                <p className='mt-3 text-stone-600 leading-relaxed'>
                  To equip, mentor, transform, and deploy well-rounded believers
                  who translate spiritual convictions into practical leadership,
                  governance, and societal impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-stone-100 py-20 md:py-28'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='max-w-2xl mb-12'>
            <p className='text-amber-700 font-semibold uppercase tracking-[0.18em] text-sm mb-4'>
              Our Core Pillars
            </p>
            <h2 className='text-3xl md:text-4xl font-bold text-stone-900'>
              Formation for every sphere of influence.
            </h2>
          </div>
          <div className='grid gap-x-10 md:grid-cols-2 lg:grid-cols-3'>
            {pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className='border-t border-stone-300 py-7'>
                <p className='text-sm font-semibold text-amber-700'>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className='mt-3 text-xl font-bold text-stone-900'>
                  {pillar.title}
                </h3>
                <p className='mt-3 text-stone-600 leading-relaxed'>
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-stone-950 text-white py-20 md:py-28'>
        <div className='max-w-5xl mx-auto px-6'>
          <p className='text-amber-400 font-semibold uppercase tracking-[0.18em] text-sm mb-6'>
            The Academy Difference
          </p>
          <blockquote className='text-2xl md:text-4xl font-medium leading-snug'>
            We are not merely raising believers who know the language of the
            Kingdom; we are raising generals who understand its government,
            embody its values, carry its wisdom, and have the capacity to
            administer its influence in the earth.
          </blockquote>
          <Link
            href='/contact'
            className='inline-flex mt-10 items-center justify-center bg-amber-400 px-6 py-3 text-stone-950 font-semibold hover:bg-amber-300 transition-colors'>
            Connect with the Academy
          </Link>
        </div>
      </section>
    </main>
  );
}

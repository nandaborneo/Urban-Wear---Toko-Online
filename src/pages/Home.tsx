import { Hero } from '../components/sections/Hero';
import { Manifesto } from '../components/sections/Manifesto';
import { NewArrivals } from '../components/sections/NewArrivals';
import { SocialProof } from '../components/sections/SocialProof';
import { Testimonials } from '../components/sections/Testimonials';
import { Pricing } from '../components/sections/Pricing';
import { FAQ } from '../components/sections/FAQ';
import { FinalCTA } from '../components/sections/FinalCTA';

export function Home() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <NewArrivals />
      <SocialProof />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </main>
  );
}

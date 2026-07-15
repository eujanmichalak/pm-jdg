import Hero from './components/Hero';
import Features from './components/Features';
import FeaturedProjects from './components/FeaturedProjects';
import Cta from './components/Cta';

export default function HomePage() {
  return (
    <div className="bg-white">
      <Hero />
      <Features />
      <FeaturedProjects />
      <Cta />
    </div>
  );
}
import { CallToAction } from "../components/CallToAction";
import { FeaturedProjects } from "../components/FeaturedProjects";
import { Hero } from "../components/Hero";
import { InvestmentOverview } from "../components/InvestmentOverview";
import { NewsPreview } from "../components/NewsPreview";
import { Stats } from "../components/Stats";
import { TeamPreview } from "../components/TeamPreview";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <FeaturedProjects />
      <TeamPreview />
      <InvestmentOverview />
      <NewsPreview />
      <CallToAction />
    </main>
  );
}

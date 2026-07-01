import { VideoScrollHero } from "../components/home/VideoScrollHero";
import { CategoryHighlights } from "../components/home/CategoryHighlights";
import { CallToAction } from "../components/home/CallToAction";

export function HomePage() {
  return (
    <>
      <VideoScrollHero />
      <CategoryHighlights />
      <CallToAction />
    </>
  );
}

import ScrollDownButton from "@/components/ui/ScrollDownButton";
import { HeroSection, JobsSection, TechNewsSection } from "./sections";

export default function Home() {
  return (
    <>
      <ScrollDownButton />

      <HeroSection />
      <TechNewsSection />
      <JobsSection />
    </>
  );
}

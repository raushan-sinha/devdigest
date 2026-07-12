import ScrollDownButton from "@/components/common/ScrollDownButton";
import { HeroSection, JobsSection, TechNewsSection } from "./sections";

export default function Home() {
    return (
        <>
            {/* Scroll Down Button */}
            <ScrollDownButton />

            <HeroSection />
            <TechNewsSection />
            <JobsSection />
        </>
    );
}

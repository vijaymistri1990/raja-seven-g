import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import GameInfoTable from "@/components/GameInfoTable";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <GameInfoTable />
      <WhyChooseUs />
      <Features />
      <About />
    </>
  );
}

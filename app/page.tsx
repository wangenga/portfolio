import CTA from "./comps/CTA";
import FloatingElements from "./comps/FloatingElements";
import Hero from "./comps/Hero";
import Navbar from "./comps/Navbar";
import Skills from "./comps/Skills";

export default function Home() {
  return (
    <>
      <FloatingElements />
      <Navbar />
      <Hero />
      <Skills />
      <CTA />
    </>
  );
}

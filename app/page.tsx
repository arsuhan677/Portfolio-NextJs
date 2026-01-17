import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/skills";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-[#0b1023] via-[#0f172a] to-[#020617] text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      </main>
    </>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Lineup from "@/components/Lineup";
import Info from "@/components/Info";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Lineup />
        <Info />
        <About />
        <Footer />
      </main>
    </>
  );
}

import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";

export default function Home() {
  return (
      <>
          {/*  Hero Section */}
          <Hero />
          <main id="main">
              {/*  services Section */}
              <Services/>
              {/*  properties Section */}
              {/*  agents Section */}
              {/*  testimonials Section */}
          </main>
      </>
  );
}

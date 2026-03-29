import "./location-map.css";
import About from "@/components/about";
import Contact from "@/components/Contact";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Experts from "@/components/Experts";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Testimonials from "@/components/testimonials";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";
import { Portfolio } from "@/utils/interface";

export default async function Home() {
  const portfolio = (await import("@/dummy.json")).default;

  const {
    about,
    testimonials,
    services,
    skills,
    experts,
    social_handles,
    email,
  } = portfolio as Portfolio;

  return (
    <main className="relative">
      <Header social={social_handles} />
      <Hero about={about} />
      <About about={about} />
      <Skills skills={skills} />
      <Experts experts={experts} />
      <Services services={services} />
      <Testimonials testimonials={testimonials} />
      <Contact email={email} social_handle={social_handles} about={about} services={services} />
      <LocationMap />
      <Footer />
    </main>
  );
}

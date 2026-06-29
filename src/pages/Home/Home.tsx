import Hero from "../../sections/Hero/Hero";
import Categories from "../../sections/Categories/Categories";
import FeaturedMenu from "../../sections/FeaturedMenu/FeaturedMenu";
import About from "../../sections/About/About";
import Gallery from "../../sections/Gallery/Gallery";
import Testimonials from "../../sections/Testimonials/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedMenu />
      <About />
      <Gallery />
      <Testimonials />
    </>
  );
}

export default Home;
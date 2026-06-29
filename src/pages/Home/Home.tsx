import Hero from "../../sections/Hero/Hero";
import Categories from "../../sections/Categories/Categories";
import FeaturedMenu from "../../sections/FeaturedMenu/FeaturedMenu";
import About from "../../sections/About/About";
import Gallery from "../../sections/Gallery/Gallery";
import Testimonials from "../../sections/Testimonials/Testimonials";
import Instagram from "../../sections/Instagram/Instagram";
import Reservation from "../../sections/Reservation/Reservation";
import Location from "../../sections/Location/Location";
import Footer from "../../sections/Footer/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedMenu />
      <About />
      <Gallery />
      <Testimonials />
      <Instagram />
      <Reservation />
      <Location />
      <Footer />
    </>
  );
}

export default Home;
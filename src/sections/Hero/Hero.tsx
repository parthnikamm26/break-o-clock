import styles from "./Hero.module.css";

import HeroContent from "./HeroContent";
import HeroBadge from "./HeroBadge";
import HeroScroll from "./HeroScroll";

import heroImage from "../../assets/images/hero-image.jpg";

function Hero() {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <HeroContent />

        <HeroBadge />

        <HeroScroll />
      </div>
    </section>
  );
}

export default Hero;
import styles from "./Hero.module.css";

import logo from "../../assets/logos/logo.png";

import HeroButtons from "./HeroButtons";

function HeroContent() {
  return (
    <div className={styles.content}>
      <img
        src={logo}
        alt="Break O' Clock"
        className={styles.logo}
      />

      <p className={styles.tagline}>
        Boisar's Favourite Café
      </p>

      <h1 className={styles.title}>
        Where Great Food
        <br />
        Meets Great Moments.
      </h1>

      <p className={styles.description}>
        Freshly brewed coffee, handcrafted pizzas,
        delicious burgers, irresistible desserts and
        memorable moments with friends and family.
      </p>

      <HeroButtons />
    </div>
  );
}

export default HeroContent;
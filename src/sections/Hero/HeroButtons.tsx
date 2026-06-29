import styles from "./Hero.module.css";

import Button from "../../components/Button/Button";

function HeroButtons() {
  return (
    <div className={styles.buttons}>
      <Button text="Explore Menu" />

      <Button
        text="Reserve Table"
        variant="secondary"
      />
    </div>
  );
}

export default HeroButtons;
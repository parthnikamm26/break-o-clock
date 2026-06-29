import styles from "./Hero.module.css";

import { FaChevronDown } from "react-icons/fa";

function HeroScroll() {
  return (
    <div className={styles.scroll}>
      <span>Scroll</span>

      <FaChevronDown className={styles.scrollIcon} />
    </div>
  );
}

export default HeroScroll;
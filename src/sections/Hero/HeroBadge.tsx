import styles from "./Hero.module.css";

import { FaStar } from "react-icons/fa";
import { IoTime } from "react-icons/io5";

function HeroBadge() {
  return (
    <div className={styles.badge}>
      <div className={styles.badgeItem}>
        <FaStar />

        <span>4.4 Google Rating</span>
      </div>

      <div className={styles.badgeItem}>
        <IoTime />

        <span>Open Daily • 11 AM - 10 PM</span>
      </div>
    </div>
  );
}

export default HeroBadge;
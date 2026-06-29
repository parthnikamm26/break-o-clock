import styles from "./Reservation.module.css";

import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

function Reservation() {
  return (
    <section className={styles.reservation}>
      <Container>
        <div className={styles.card}>
          <SectionTitle
            subtitle="Reservation"
            title="Reserve Your Table"
            center
          />

          <p className={styles.description}>
            Enjoy handcrafted food, premium coffee, and unforgettable moments
            with your family and friends.
          </p>

          <form className={styles.form}>
            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="tel"
              placeholder="Phone Number"
            />

            <select defaultValue="">
              <option value="" disabled>
                Number of Guests
              </option>
              <option>2 Guests</option>
              <option>4 Guests</option>
              <option>6 Guests</option>
              <option>8+ Guests</option>
            </select>

            <input type="date" />

            <button type="submit">
              Reserve Now
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}

export default Reservation;
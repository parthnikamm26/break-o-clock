import styles from "./Location.module.css";

import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

function Location() {
  return (
    <section className={styles.location}>
      <Container>
        <SectionTitle
          subtitle="Visit Us"
          title="Find Break O' Clock"
          center
        />

        <div className={styles.wrapper}>
          <div className={styles.info}>
            <h3>Break O' Clock Café</h3>

            <p>
              Near Boisar Station,
              <br />
              Boisar, Maharashtra
            </p>

            <p>
              <strong>Open Daily</strong>
              <br />
              11:00 AM – 10:00 PM
            </p>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Open in Google Maps
            </a>
          </div>

          <div className={styles.map}>
            Google Map
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Location;
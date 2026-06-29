import styles from "./About.module.css";

import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import StatCard from "../../components/StatCard/StatCard";

import { about } from "../../data/about";

function About() {
  return (
    <section className={styles.about}>
      <Container>
        <SectionTitle
          subtitle={about.subtitle}
          title={about.title}
        />

        <div className={styles.wrapper}>
          <div className={styles.image}>
            <img
              src={about.image}
              alt="Break O' Clock Café"
            />
          </div>

          <div className={styles.content}>
            <p>{about.description}</p>

            <div className={styles.stats}>
              {about.stats.map((stat) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>

            <button className={styles.button}>
              Learn More
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
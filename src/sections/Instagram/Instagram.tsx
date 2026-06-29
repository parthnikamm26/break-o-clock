import styles from "./Instagram.module.css";

import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import InstagramCard from "../../components/InstagramCard/InstagramCard";

import { instagramPosts } from "../../data/instagram";

function Instagram() {
  return (
    <section className={styles.instagram}>
      <Container>
        <SectionTitle
          subtitle="Instagram"
          title="Follow Our Journey"
          center
        />

        <div className={styles.grid}>
          {instagramPosts.map((post) => (
            <InstagramCard
              key={post.id}
              image={post.image}
              link={post.link}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Instagram;
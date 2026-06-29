import styles from "./FeaturedMenu.module.css";

import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCard from "../../components/MenuCard/MenuCard";

import { menuItems } from "../../data/menu";

function FeaturedMenu() {
  return (
    <section className={styles.featuredMenu}>
      <Container>
        <SectionTitle
          subtitle="Best Sellers"
          title="Crafted With Love, Served Fresh"
          center
        />

        <div className={styles.grid}>
          {menuItems.map((item) => (
            <MenuCard
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturedMenu;
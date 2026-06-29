import styles from "./Categories.module.css";

import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

import { categories } from "../../data/categories";

function Categories() {
  return (
    <section className={styles.categories}>
      <Container>
        <SectionTitle
          subtitle="Our Specials"
          title="Explore Our Favorites"
          center
        />

        <div className={styles.grid}>
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              description={category.description}
              image={category.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Categories;
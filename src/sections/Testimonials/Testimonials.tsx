import styles from "./Testimonials.module.css";

import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ReviewCard from "../../components/ReviewCard/ReviewCard";

import { reviews } from "../../data/reviews";

function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <Container>
        <SectionTitle
          subtitle="Testimonials"
          title="What Our Customers Say"
          center
        />

        <div className={styles.grid}>
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              name={review.name}
              review={review.review}
              rating={review.rating}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
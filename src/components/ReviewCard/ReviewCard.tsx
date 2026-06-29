import styles from "./ReviewCard.module.css";

type ReviewCardProps = {
  name: string;
  review: string;
  rating: number;
};

function ReviewCard({
  name,
  review,
  rating,
}: ReviewCardProps) {
  return (
    <article className={styles.card}>
      <p className={styles.review}>
        "{review}"
      </p>

      <div className={styles.footer}>
        <span className={styles.rating}>
          {"★".repeat(rating)}
        </span>

        <h4>{name}</h4>
      </div>
    </article>
  );
}

export default ReviewCard;
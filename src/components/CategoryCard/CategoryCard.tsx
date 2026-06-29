import styles from "./CategoryCard.module.css";

type CategoryCardProps = {
  title: string;
  description: string;
  image: string;
};

function CategoryCard({
  title,
  description,
  image,
}: CategoryCardProps) {
  return (
    <article
      className={styles.card}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h3>{title}</h3>

        <p>{description}</p>
      </div>
    </article>
  );
}

export default CategoryCard;
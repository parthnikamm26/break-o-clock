import styles from "./MenuCard.module.css";

type MenuCardProps = {
  name: string;
  description: string;
  price: string;
  image: string;
};

function MenuCard({
  name,
  description,
  price,
  image,
}: MenuCardProps) {
  return (
    <article className={styles.card}>
      <img
        src={image}
        alt={name}
        className={styles.image}
      />

      <div className={styles.content}>
        <div className={styles.top}>
          <h3>{name}</h3>

          <span>{price}</span>
        </div>

        <p>{description}</p>
      </div>
    </article>
  );
}

export default MenuCard;
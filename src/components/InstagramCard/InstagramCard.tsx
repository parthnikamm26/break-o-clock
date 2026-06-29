import styles from "./InstagramCard.module.css";

type InstagramCardProps = {
  image: string;
  link: string;
};

function InstagramCard({
  image,
  link,
}: InstagramCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <img
        src={image}
        alt="Break O' Clock Instagram"
        className={styles.image}
      />

      <div className={styles.overlay}>
        <span>View on Instagram ↗</span>
      </div>
    </a>
  );
}

export default InstagramCard;
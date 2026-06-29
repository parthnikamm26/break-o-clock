import styles from "./GalleryImage.module.css";

type GalleryImageProps = {
  image: string;
  alt: string;
};

function GalleryImage({
  image,
  alt,
}: GalleryImageProps) {
  return (
    <div className={styles.card}>
      <img
        src={image}
        alt={alt}
        className={styles.image}
      />

      <div className={styles.overlay}>
        <span>Break O' Clock</span>
      </div>
    </div>
  );
}

export default GalleryImage;
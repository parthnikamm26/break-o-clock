import styles from "./Gallery.module.css";

import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import GalleryImage from "../../components/GalleryImage/GalleryImage";

import { galleryImages } from "../../data/gallery";

function Gallery() {
  return (
    <section className={styles.gallery}>
      <Container>
        <SectionTitle
          subtitle="Gallery"
          title="Moments Worth Sharing"
          center
        />

        <div className={styles.grid}>
          {galleryImages.map((image) => (
            <GalleryImage
              key={image.id}
              image={image.image}
              alt={image.alt}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Gallery;
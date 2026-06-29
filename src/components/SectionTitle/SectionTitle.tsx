import styles from "./SectionTitle.module.css";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

function SectionTitle({
  title,
  subtitle,
  center = false,
}: SectionTitleProps) {
  return (
    <div
      className={`${styles.sectionTitle} ${
        center ? styles.center : ""
      }`}
    >
      {subtitle && (
        <span className={styles.subtitle}>
          {subtitle}
        </span>
      )}

      <h2>{title}</h2>
    </div>
  );
}

export default SectionTitle;
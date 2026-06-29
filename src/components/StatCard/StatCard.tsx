import styles from "./StatCard.module.css";

type StatCardProps = {
  value: string;
  label: string;
};

function StatCard({ value, label }: StatCardProps) {
  return (
    <div className={styles.card}>
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  );
}

export default StatCard;
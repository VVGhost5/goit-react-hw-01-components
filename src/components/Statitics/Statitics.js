import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statitics = ({ title, stats }) => {
  return (
    <section className={styles.statitics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map((stats) => (
          <li key={stats.id} className={styles.item}>
            <span className={styles.label}>{stats.label}</span>
            <span className={styles.percentage}>{stats.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statitics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statitics;

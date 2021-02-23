import PropTypes from 'prop-types';
import styles from './statistics.module.css';
import getRandomColor from './randomColor';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.stat__list}>
        {stats.map(({ label, percentage, id }) => (
          <li
            className={styles.item}
            styles={{ backgroundColor: getRandomColor() }}
            key={id}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Statistics;

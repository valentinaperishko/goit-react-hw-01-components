import PropTypes from 'prop-types';
import styles from './profile.module.css';

const ProfileStats = ({ stats }) => {
  return (
    <>
      {Object.entries(stats).map(stat => (
        <li key={stat[0]} className={styles.statsItem}>
          <span className={styles.label}>{stat[0]}</span>
          <br />

          <span className={styles.quantity}>{stat[1]}</span>
        </li>
      ))}
    </>
  );
};

ProfileStats.propTypes = {
  stats: PropTypes.exact({
    '👥': PropTypes.number.isRequired,
    '👀': PropTypes.number.isRequired,
    '❤️': PropTypes.number.isRequired,
  }),
};

export default ProfileStats;

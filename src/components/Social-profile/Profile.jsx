import defaultImage from '../default-image.jpg';
import PropTypes from 'prop-types';
import ProfileStats from './ProfileStats';
import styles from './profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className="description">
        <img src={avatar} alt={avatar} className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <ProfileStats stats={stats} />
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  url: defaultImage,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    '👥': PropTypes.number.isRequired,
    '👀': PropTypes.number.isRequired,
    '❤️': PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;

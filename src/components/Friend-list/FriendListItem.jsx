import defaultImage from '../default-image.jpg';
import PropTypes from 'prop-types';
import styles from './friend.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.online : styles.offline}></span>
      <img className={styles.avatar} src={avatar} alt={name} width={48} />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  url: defaultImage,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;

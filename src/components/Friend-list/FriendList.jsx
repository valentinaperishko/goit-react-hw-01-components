import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import styles from './friend.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friend_list}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;

import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => {
        const { name, id, isOnline, avatar } = friend;
        return (
          <li key={id} className={styles.item}>
            <span
              className={
                styles.status +
                " " +
                (isOnline ? styles.online : styles.offline)
              }
            ></span>
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
            <p className={styles.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.defaultProps = {
  avatar:
    "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;

import PropTypes from "prop-types";
import styles from "./FriendList.module.css";
import classNames from "classnames";
// var classNames = require('classnames');

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ name, id, isOnline, avatar }) => {
        // const statusIndicator = classNames(
        //   "styles.status",
        //   { "styles.online": isOnline },
        //   { "styles.offline": !isOnline }
        // );
        console.log(typeof statusIndicator);
        return (
          <li key={id} className={styles.item}>
            <span
              className={classNames(
                styles.status,
                { [styles.online]: isOnline },
                { [styles.offline]: !isOnline }
              )}
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

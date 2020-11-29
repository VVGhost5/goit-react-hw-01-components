import PropTypes from "prop-types";
import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt={name}
          className={styles.avatar}
          width="200"
          height="200"
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>{tag.slice(1)}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        {Object.keys(stats).map((el) => {
          return (
            <li className={styles.item}>
              <span className={styles.label}>{el}</span>
              <span className={styles.quantity}>{stats.followers}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  avatar:
    "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;

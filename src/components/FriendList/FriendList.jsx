import css from './FriendList.module.css';
import PropTypes from "prop-types";

export const FriendList = ({ friends }) => {
  return (  
    <ul className={css['friend-list']}>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          <span 
            className={
              friend.isOnline 
                ? `${css.status} ${css.Online}`
                : `${css.status} ${css.Offline}`
            }>
          </span>
          <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
import css from './FriendListItem.module.css'
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
     <div className={css.cardFriends}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.friendsName}>{name}</p>
      <p className={css.status} style={{ color: isOnline ? "green" : "red" }}>
         {isOnline ? "Online" : "Offline"}
      </p>
     </div>
  );
};

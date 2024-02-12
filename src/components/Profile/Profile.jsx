import css from './Profile.module.css'
export const Profile = ({ name, tag, location, image, stats
}) => {
  return (
    <div className={css.border}>
      <div className={css.borderChildren}>
        <img className={css.imageProfile} src={image} alt="User avatar" width="100" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.listChildren}>
          <span>Followers</span>
          <span className={css.stats}>{stats.followers}</span>
        </li>
        <li className={css.listChildren}>
          <span>Views</span>
          <span className={css.stats}>{stats.views}</span>
        </li>
        <li className={css.listChildren}>
          <span>Likes</span>
          <span className={css.stats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
import css from "./Profile.module.css"

export default function Profile({name, tag, location, image, stats}) {
  return (
  <div className={css.container}>
      <div>
        <img className={css.image}
          src={image}
          alt="User avatar"
        />
        <p className={css.name}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listItem}>
          <span className={css.itemText}>Followers</span>
          <span className={css.itemText}>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.itemText}>Views</span>
          <span className={css.itemText}>{stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.itemText}>Likes</span>
          <span className={css.itemText}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}


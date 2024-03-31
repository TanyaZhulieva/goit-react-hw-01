import clsx from 'clsx';
import css from "./FriendListItem.module.css"

export default function FriendListItem({avatar, name, isOnline}) {
    const status = clsx(css.text, isOnline? css.online : css.offline)
    return (
        <div className={css.itemContent}>
  <img className={css.image} src={avatar} alt="Avatar" width="48" />
  <p className={css.name}>{name}</p>
  <p className={status}>{isOnline? "Online" : "Offline"}</p>
</div>
    )
}
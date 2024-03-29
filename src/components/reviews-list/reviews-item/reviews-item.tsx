import {User} from '../../../types/user.ts';
import {getRatingWidth} from '../../../utils.ts';

type ReviewItemProps = {
  rating: number;
  user: User;
  comment: string;
  date: string;
}

export function ReviewsItem({rating, user, comment, date}: ReviewItemProps): JSX.Element {
  const commentDate = new Date(date);
  const month = commentDate.toLocaleString('en-US', {month: 'long'});
  const year = commentDate.getFullYear();
  const dateTime = commentDate.toDateString();

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: getRatingWidth(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={dateTime}>{month}{' '}{year}</time>
      </div>
    </li>
  );
}

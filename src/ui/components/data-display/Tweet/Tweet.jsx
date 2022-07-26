import { DateService } from '../../../../data/services/DateService';
import styles from './Tweet.module.css';

export function Tweet({ tweet }) {
  return (
    <div className={styles['tweet-container']}>
      <img
        src={tweet.user.picture}
        alt={tweet.user.name}
        className={styles['avatar']}
      />
      <div className={styles['user']}>
        <span className={styles['user-name']}>{tweet.user.name}</span>{' '}
        <span className={styles['user-username']}>@{tweet.user.username}</span>
        <span className={styles['date']}>
          {' '}
          - {DateService.relativeDate(tweet.date)}
        </span>
      </div>
      <div className={styles['tweet-text']}>{tweet.text}</div>
    </div>
  );
}

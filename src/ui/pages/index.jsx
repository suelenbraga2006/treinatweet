import { useIndex } from '../../data/hooks/pages/useIndex.page';
import { Tweet } from '../components/data-display/Tweet/Tweet';
import { TextInput } from '../components/inputs/TextInput/TextInput';
import styles from '../styles/pages/index.module.css';

export function Index() {
  const {
    user,
    text,
    onTextChange,
    maxLengthText,
    sendTweet,
    sortedTweetList,
  } = useIndex();
  return (
    <div>
      <h1 className={styles['page-title']}>TreinaTweet</h1>
      <div className={styles['tweet-container']}>
        <img className={styles['avatar']} src={user.picture} alt={user.name} />
        <TextInput
          placeholder={'O que está acontecendo?'}
          rows={3}
          maxLength={maxLengthText}
          value={text}
          onChange={onTextChange}
        />
      </div>
      <div className={styles['button-container']}>
        <div>
          {text.length} / {maxLengthText}
        </div>
        <button
          onClick={sendTweet}
          disabled={text.length === 0}
          className={styles['post-button']}
        >
          Tweetar
        </button>
      </div>
      <ul className={styles['tweet-list']}>
        {sortedTweetList.map((tweet) => (
          <li key={tweet.id} className={styles['tweet-list-item']}>
            <Tweet tweet={tweet.data} />
          </li>
        ))}
      </ul>
    </div>
  );
}

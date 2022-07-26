import { useMemo, useState } from 'react';
import { ApiService } from '../../services/ApiService';
import { useApi } from '../useApi';
import { mutate } from 'swr';

export function useIndex() {
  const maxLengthText = 125,
    user = {
      name: 'Suelen Braga',
      username: 'suelenbraga2006',
      picture: 'https://github.com/suelenbraga2006.png',
    },
    [text, setText] = useState(''),
    tweetsList = useApi('tweets').data,
    sortedTweetList = useMemo(() => {
      return (tweetsList || []).sort((a, b) =>
        a.data.date < b.data.date ? 1 : -1
      );
    }, [tweetsList]);

  function onTextChange(event) {
    const text = event.target.value;
    if (text.length <= maxLengthText) {
      setText(text);
    }
  }

  async function sendTweet() {
    ApiService.post('tweets', {
      data: {
        user,
        text,
        date: new Date().toISOString(),
      },
    });
    setText('');
    mutate('tweets');
  }

  return {
    user,
    text,
    onTextChange,
    maxLengthText,
    sendTweet,
    sortedTweetList,
  };
}

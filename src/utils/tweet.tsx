import { TwitterApi } from 'twitter-api-v2';
import { TWITTER_API_KEY, TWITTER_API_SECRET, TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_TOKEN_SECRET } from '../config';

export default async function postTweet(tweetText: string): Promise<void> {
  const client = new TwitterApi({
    appKey: TWITTER_API_KEY,
    appSecret: TWITTER_API_SECRET,
    accessToken: TWITTER_ACCESS_TOKEN,
    accessSecret: TWITTER_ACCESS_TOKEN_SECRET,
  });

  try {
    // Post the tweet
    await client.v2.tweet(tweetText);
    console.log(`Successfully tweeted: ${tweetText}`);
  } catch (error) {
    console.error('Error posting tweet:', error);
    throw error;
  }
}
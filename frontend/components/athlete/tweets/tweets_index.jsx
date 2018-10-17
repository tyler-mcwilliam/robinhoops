import React from "react";
import TweetsIndexItem from "./tweets_index_item";

const TweetsIndex = ({ tweets }) => {
  const tweetItems = () =>
    tweets
      .slice(0, 6)
      .map(tweet => <TweetsIndexItem key={tweet.id} tweet={tweet} />);
  return <div className="athlete-tweets-section">{tweetItems()}</div>;
};

export default TweetsIndex;

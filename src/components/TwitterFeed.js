import React from 'react';
import Tweet from "./Tweet"

const TwitterFeed = (props) => {

  let tweetList = props.data.map((singleTweet)=> {
     return (
       <Tweet
          data={singleTweet}
          key={singleTweet.id_str}
        />
     )
  });

  return (
    <div className="tweetList">
      {tweetList}
    </div>
  )

}
export default TwitterFeed;

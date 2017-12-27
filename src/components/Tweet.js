import React from "react"
import IconBar from "./IconBar"

const Tweet = (props) => {
  let userPicUrl = props.data.user.profile_image_url
  let userName = props.data.user.name
  let userScreenName = `@${props.data.user.screen_name}`

  let dot = <span className="dot"><i className="fa fa-circle" aria-hidden="true"></i></span>

  let date = new Date(parseInt(props.data.timestamp_ms))
  let formattedDate = date.toLocaleDateString("en-US",{month: "short", day:"numeric"})

  let text = props.data.text

  let tweetPics;
  if (props.data.entities.media) {
    tweetPics = props.data.entities.media.map((picUrl,index)=> {
      return (
        <img
          className="internal_pic"
          src={picUrl.media_url}
          key={index}
        />
      )
    })
  }

  return(
    <div className="tweet">
      <img
        className="userPic"
        src={userPicUrl}
        alt="Picture of User"
      />

      <span className="userBar">
        <span className="userName">
          {userName}
        </span>

        {userScreenName}
        {dot}
        {formattedDate}
        
        <p className="text">
          {text}
        </p>
      </span>


      {tweetPics}

      <IconBar
        fav={props.data.favorited}
        favCount={props.data.favorite_count}
        reTweeted={props.data.retweeted}
        reTweetCount={props.data.retweet_count}
      />
    </div>
  )
};

export default Tweet;

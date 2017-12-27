import React from "react";
import icons from '../constants/icons';

const IconBar = (props) => {

  let num;
  let displayIcons = icons.map((singleIcon) => {
    let specificHandleClick = () => {
      alert(singleIcon.type);
    }

    let className = "plainIcon";
    if (singleIcon.type === "like" && props.fav === true) {
      className = "favorite"
    } else if (singleIcon.type === "retweet" && props.reTweeted === true) {
      className = "retweet"
    }

    if (singleIcon.type === "like") {
      num = props.favCount;
    } else if (singleIcon.type === "retweet"){
      num = props.reTweetCount;
    }

    return (
      <span
        key={singleIcon.id}
        className={className}
        onClick={specificHandleClick}
      >
        {singleIcon.tag}
        <span className="number">
          {num}
        </span>

      </span>
    )
  })

  return (
    <div className="iconBar">
      {displayIcons}
    </div>
  );
}

export default IconBar;

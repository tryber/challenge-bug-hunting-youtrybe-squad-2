import React from 'react';

const VideoThumbNailInfo = (props) => (
  <div className="thumbnail-info">
    <h2>{props.title}</h2>
    <div className="channel">{props.channel}</div>
    <div className="views">792K views</div>
  </div>
);

export default VideoThumbNailInfo;

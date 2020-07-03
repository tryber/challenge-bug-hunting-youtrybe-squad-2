import React from 'react';

const VideoThumbNail = (props) => (
  <div className='thumbnail'>
    <img src={props.imageSource} alt='cabin' key={props.videoId} />
    <span>17:30</span>
  </div>
);

export default VideoThumbNail;

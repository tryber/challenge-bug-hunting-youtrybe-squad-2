import React from 'react';

import '../../../../css/searchResult.css';

const VideoCard = props => (
  <div className='suggested-video search-result'>
    <div className='thumbnail'>
      <img alt='thumbnail' src={props.video.snippet.thumbnails.medium.url} />
      {props.video.id.kind === 'youtube#video' ? <span>17:30</span> : null}
    </div>

    <div className='thumbnail-info'>
      <h2>{props.video.snippet.title}</h2>
      <div className='channel'>{props.video.snippet.channelTitle}</div>
      {props.video.id.kind === 'youtube#video' ? (
        <div className='views'>792K views</div>
      ) : null}
      <p className='description'>{props.video.snippet.description}</p>
    </div>
  </div>
);

export default VideoCard;

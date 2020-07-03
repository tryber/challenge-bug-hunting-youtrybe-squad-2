import React from 'react';
import { formatDate } from '../../../../utils/formatDate'

const VideoPlayerDescription = (props) => {
  const { channelTitle, description, publishedAt } = props;

  return (
    <section data-testid="channelinfo" className="channel-info">
      <div className="avatar">
        <div></div>
      </div>
      <div className="description">
        <h2>{channelTitle}</h2>
        <h3>{formatDate(publishedAt)}</h3>
        <p>{description}</p>
        <p className="show-more">show more</p>
      </div>
      <div className="subscribe">
        <button>
          {' '}
          subscribe <span>293K</span>
        </button>
      </div>
    </section>
  );
};

export default VideoPlayerDescription;

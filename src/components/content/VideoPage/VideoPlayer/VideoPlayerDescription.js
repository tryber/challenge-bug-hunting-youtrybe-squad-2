import React from 'react';

const VideoPlayerDescription = (props) => {
  const { channelTitle, description, publishedAt } = props;

  const formatDate = (pa) => {
    const dateObj = new Date(pa);

    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const month = monthNames[dateObj.getMonth()];
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    return `Published on ${month} ${day}, ${year}`;
  };

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

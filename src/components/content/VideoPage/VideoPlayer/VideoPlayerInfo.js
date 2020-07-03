import React from 'react';

const VideoPlayerInfo = props => {
  const { title, statisticsInfo } = props;
  return (
    <div data-testid="videoinfo" className="video-info">
      <h1 className="title">{title}</h1>
      <div className="video-toolbar">
        <span className="video-views">{statisticsInfo.viewCount} views</span>
        <span className="right-menu">
          <div className="thumb-wrapper">
            <button type="button" className="thumb-up-btn">
              <i className="material-icons">thumb_up</i>
              <span className="thumbs-count">{statisticsInfo.likeCount}</span>
            </button>

            <button type="button" className="thumb-down-btn">
              <i className="material-icons">thumb_down</i>
              <span className="thumbs-count">{statisticsInfo.dislikeCount}</span>
            </button>
          </div>

          <button type="button" className="share-btn" href="#">
            <i className="material-icons">reply</i>
            <span>SHARE</span>
          </button>

          <button type="button" className="save-btn" href="#">
            <i className="material-icons">playlist_add</i>
            <span>SAVE</span>
          </button>
          <button type="button" className="options-btn" href="#">
            <i className="material-icons">more_horiz</i>
          </button>
        </span>
      </div>
    </div>
  );
};

export default VideoPlayerInfo;

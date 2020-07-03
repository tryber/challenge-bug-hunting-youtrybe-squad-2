import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import VideoThumbNail from './VideoThumbNail';
import VideoThumbNailInfo from './VideoThumbNailInfo';

import '../../../../css/sideBar.css';

const VideoSideBar = props => {
  const { relatedVideos, handleSelectedVideo } = props;
  return (
    <Fragment>
      {relatedVideos.map(video => (
        <Fragment key={`${video.id.videoId}${Math.round(Math.random() * 10000)}`}>
          <Link to={`/watch/${video.id.videoId}`} data-testid="selectedVideo">
            <div className="suggested-video" onClick={() => handleSelectedVideo(video.id.videoId)}>
              <VideoThumbNail
                videoId={video.id.videoId}
                imageSource={video.snippet.thumbnails.medium.url}
              />
              <VideoThumbNailInfo
                title={video.snippet.title}
                channel={video.snippet.channelTitle}
              />
            </div>
          </Link>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default VideoSideBar;

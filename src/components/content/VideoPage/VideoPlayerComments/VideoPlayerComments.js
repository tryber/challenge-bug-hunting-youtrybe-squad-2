import React from 'react';
import VideoPlayerCommentsInfo from './VideoPlayerCommentsInfo';
import VideoPlayerUserComments from './VideoPlayerUsersComments';

import '../../../../css/comments.css';

const VideoPlayerComments = (props) => {
  const { statisticsInfo, videoComments } = props;
  return (
    <section data-testid="comments" className="comments">
      <VideoPlayerCommentsInfo statisticsInfo={statisticsInfo} />
      <VideoPlayerUserComments videoComments={videoComments} />
    </section>
  );
};

export default VideoPlayerComments;

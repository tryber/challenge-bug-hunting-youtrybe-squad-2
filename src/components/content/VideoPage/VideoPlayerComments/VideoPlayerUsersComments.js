import React, { Fragment } from 'react';
import { formatDate } from '../../../../utils/formatDate';
// import profileIcon from './../../../../assets/profile.jpg'

const VideoPlayerUsersComments = (props) => {
  const { videoComments } = props;

  return (
    <Fragment>
      {videoComments.map((comment) => (
        <div className="comment" key={comment.id}>
          <div className="comment-avatar">
            <i className="material-icons account-icon">account_circle</i>
          </div>
          <div className="comment-info">
            <h3>
              {comment.snippet.topLevelComment.snippet.authorDisplayName}
              <span>{formatDate(comment.snippet.topLevelComment.snippet.publishedAt)}</span>
            </h3>
            <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
            <div>
              <button type="button" className="thumb-up-btn">
                <i className="material-icons">thumb_up</i>
                <span className="thumbs-count">
                  {comment.snippet.topLevelComment.snippet.likeCount}
                </span>
              </button>
              <button type="button" className="thumb-up-btn">
                <i className="material-icons">thumb_down</i>
                <span className="thumbs-count"></span>
              </button>
              <button type="button" className="thumb-reply">REPLY</button>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default VideoPlayerUsersComments;

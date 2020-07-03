import React, { useState, useEffect, useContext } from 'react';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import VideoPlayerDescription from './VideoPlayer/VideoPlayerDescription';
import VideoPlayerInfo from './VideoPlayer/VideoPlayerInfo';
import VideoPlayerComments from './VideoPlayerComments/VideoPlayerComments';
import VideoSideBar from './VideoSideBar/VideoSideBar';
import { getVideoInfo, getVideoComments } from './../../../api/service';
import { VideoListContext } from '../../../contexts/VideoListProvider';

const VideoPage = (props) => {
  const [videoId, setVideoId] = useState(props.match.params.videoId);
  const { videoList: [relatedVideos] } = useContext(VideoListContext);
  const [videoInfo, setVideoInfo] = useState(null);
  const [videoComments, setVideoComments] = useState(null);

  useEffect(() => {
    getVideoInfo(videoId).then((data) => setVideoInfo(data.items[0]));
    getVideoComments(videoId).then((data) => setVideoComments(data.items));
  }, [videoId]);
  const handleSelectedVideo = (id) => setVideoId(id);

  if (!videoInfo || !videoComments) return <main></main>;
  if(!relatedVideos.length) relatedVideos.push(videoInfo);

  return (
    <main>
      <section className="player">
        <VideoPlayer embedId={videoId} />
        <VideoPlayerInfo statisticsInfo={videoInfo.statistics} title={videoInfo.snippet.title} />
        <VideoPlayerDescription
          channelTitle={videoInfo.snippet.channelTitle}
          description={videoInfo.snippet.description}
          publishedAt={videoInfo.snippet.publishedAt}
        />
        <VideoPlayerComments statisticsInfo={videoInfo.statistics} videoComments={videoComments} />
      </section>
      <section className="sidebar">
        <VideoSideBar relatedVideos={relatedVideos} handleSelectedVideo={handleSelectedVideo} />
      </section>
    </main>
  );
};

export default VideoPage;

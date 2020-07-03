import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard/VideoCard';
import { VideoListContext } from '../../../contexts/VideoListProvider';


import '../../../css/sideBar.css';
import { searchVideos } from '../../../api/service';

const Video = (props) => {
  const { item } = props;
  return (
    <Link
      className="thumbnail-card"
      to={`/watch/${item.id.videoId}`}
    >
      <VideoCard video={item} />
    </Link>
  )
}

const SearchResult = (props) => {
  const { params: { searchParam } } = props.match;

  const { videoList: [data, setData] } = useContext(VideoListContext)
  const [error, setError] = useState('');

  const updateData = (param) => {
    searchVideos(param)
      .then((response) => {
        const videosResults = response.items.filter((item) => item.id.kind !== 'youtube#channel');
        setData(videosResults);
      })
      .catch((response) => setError(response));
  };

  useEffect(() => {
    updateData(searchParam);
  }, [searchParam]);

  if (data.length < 1) return <div>Loading...</div>;
  if (error.length) return <div>{error}</div>;
  return (
    <div>
      {data.map((item) => (
        <Video item={item} key={item.etag} />
      ))}
    </div>
  );
};

export default SearchResult;

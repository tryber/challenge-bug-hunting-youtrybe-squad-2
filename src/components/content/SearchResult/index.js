import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard/VideoCard';

import '../../../css/sideBar.css';
import { searchVideos } from '../../../api/service';

const SearchResult = (props) => {
  const { params: { searchParam } } = props.match;

  const [data, setData] = useState([]);
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
        <Link
          className="thumbnail-card"
          key={item.etag}
          to={{
            pathname: `/watch/${item.id.videoId}`,
            state: { data },
          }}
        >
          <VideoCard video={item} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResult;

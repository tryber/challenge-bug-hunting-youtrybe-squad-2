import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard/VideoCard';

import '../../../css/sideBar.css';
import { searchVideos } from '../../../api/service';

class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: '',
    };

    this.updateData = this.updateData.bind(this);
  }

  componentDidMount() {
    const { params: { searchParam } } = this.props.match;
    this.updateData(searchParam);
  }

  componentDidUpdate(prevProps) {
    const { params: { searchParam } } = this.props.match;

    if (prevProps.match.params.searchParam !== searchParam) {
      this.updateData(searchParam);
    }
  }

  updateData(param) {
    searchVideos(param)
      .then((data) => {
        const videosResults = data.items.filter((item) => item.id.kind !== 'youtube#channel');

        this.setState({ data: videosResults });
      })
      .catch((error) => this.setState({ error: error }));
  }


render() {
  const { data, error } = this.state;
  if (data.length < 1) return (<div>Loading...</div>)
  if (error.length) return (<div>{error}</div>)

  return (
    <div>
      {data.map((item) => (
        <Link className="thumbnail-card" key={item.etag} to={{
          pathname: `/watch/${item.id.videoId}`,
          state: { data }
        }}><VideoCard video={item} /></Link>
      ))}
    </div>
  );
}
}

export default SearchResult;

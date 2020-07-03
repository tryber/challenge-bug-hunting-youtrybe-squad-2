import React, { createContext } from 'react';

export const VideoListContext = createContext(null);

export default ({ children }) => {
  const [videoList, setVideoList] = React.useState([]);

  const store = { videoList: [videoList, setVideoList] };

  return <VideoListContext.Provider value={store}>{children}</VideoListContext.Provider>;
};

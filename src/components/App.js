import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos'
// const KEY = 'AIzaSyA6iRoO2QEarl0r_aPdmOZZNab1olXtSIM';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videos, search] = useVideos('Nintendo 64 DD');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos])


  return (
    <div className="ui container">
      <h1>App!</h1>
      <SearchBar onFormSubmit={search}></SearchBar>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
            {/* is the same as <VideoList videos={videos} onVideoSelect={(video) => setSelectedVideo(video)} /> */}
          </div>
        </div>
      </div>
    </div>
  );


}



// onTermSubmit = term => {
//   youtube.get("/search", {
//     params: {
//       q: term,
//       part: "snippet",
//       maxResults: 5,
//       key: KEY
//     }
//   });
// };

export default App;
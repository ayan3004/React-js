import React, { useState, useEffect } from 'react';
import { Routes,BrowserRouter as Router, Route } from 'react-router-dom'; 
import Navbar from './Navbar';
import VideoGrid from './VideoGrid';
import Sidebar from './Sidebar';
import PlayVideo from './PlayVideo';
import './App.css';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const onTermSubmit = async (term) => {
    const API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyCv-O9NRRdwKG8GXP2yRB7Y7GkvQxiu_Rk`;
    await fetch(API)
      .then(response => response.json())
      .then(data => {
        setVideos(data.items);
        if (data.items && data.items.length > 0) {
          console.log(data.items[0].id);
          
        }
      });
  };

  useEffect(() => {
    onTermSubmit();
  }, []);
  const handleFormSubmit = (term) => {
    setSearchTerm(term);
};
  return (
    <div>
      <Sidebar />
      <div className="ui container" style={{ marginLeft: '80px' }}>
        <Navbar onFormSubmit={handleFormSubmit} />
        <Routes> 
          <Route path="/" element={<VideoGrid videos={videos} />} />
          <Route path="/video/:id" element={<PlayVideo videos={videos} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

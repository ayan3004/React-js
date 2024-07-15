import React from 'react';
import { Link } from 'react-router-dom';

const VideoGrid = ({ videos }) => {
  return (
    <div className="video-grid">
      {videos.map((video) => (
        <Link to={`/video/${video.id.videoId}`} className="video-card" key={video.id.videoId}>
          <div className="video-thumbnail">
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
          </div>
          <div className="video-info">
            <div className="video-title">{video.snippet.title}</div>
            <div className="video-metadata">
              <div className="channel-name">{video.snippet.channelTitle}</div>
              <div className="views-and-date">
                <span>{Math.floor(Math.random() * 1000)}K views</span> 
                <span>{new Date(video.snippet.publishedAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default VideoGrid;

import React from 'react';
import { useParams } from 'react-router-dom';

const PlayVideo = ({ videos }) => {
  const { id } = useParams();
  const video = videos.find(v => v.id.videoId === id);

  if (!video) {
    return <div>Loading...</div>;
  }

  console.log(`Playing video with id: ${video.id.videoId}`);

  return (
    <center>
      <iframe
        width="789"
        height="444"
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </center>
  );
};

export default PlayVideo;

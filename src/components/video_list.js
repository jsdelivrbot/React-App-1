import React from 'react';
import ReactDOM from 'react-dom';
import VideoListItem from './video_list_item';

const VideosList = (props) => {

  const List = props.videos.map((video) => {
    return <VideoListItem
      onVideoSelect={props.onVideoSelect}
      key={video.etag}
      video={video}
    />
  });

  return (
    <ul className="col-md-4 list-group">
      {List}
    </ul>
  );

};

export default VideosList ;

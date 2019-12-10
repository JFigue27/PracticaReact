import React, { useState, useEffect } from 'react';
import AppConfig from '../core/AppConfig';

const useInitialState = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(AppConfig.API_URL)
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);

  return videos;
};

export default useInitialState;

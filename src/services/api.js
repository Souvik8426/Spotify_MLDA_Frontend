// src/services/api.js

export const createPlaylist = async (mood, playlistName) => {
    try {
      const response = await fetch('http://localhost:5000/create-playlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mood, playlist_name: playlistName }),
        credentials: 'include',  // Include cookies for session management if needed
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error creating playlist:', error);
      return { error: 'Failed to create playlist' };
    }
  };
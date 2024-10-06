import React, { useState } from 'react';
import { createPlaylist } from '../services/api';

const PlaylistForm = () => {
  const [mood, setMood] = useState('');
  const [playlistName, setPlaylistName] = useState('');
  const [playlistLink, setPlaylistLink] = useState(null);
  const [error, setError] = useState(null);  // Add error state for error handling

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);  // Clear previous errors
    try {
      const result = await createPlaylist(mood, playlistName);  // Send mood and playlist name to backend
      if (result.error) {
        setError(result.error);  // Handle error from the backend
      } else {
        setPlaylistLink(result.playlistLink);  // Set the playlist link in state
      }
    } catch (err) {
      setError('An error occurred while creating the playlist.');  // Handle any unexpected errors
    }
  };

  return (
    <div className="p-10 rounded-lg shadow-lg text-white">
      <h1 className="text-3xl font-bold mb-6">Create Your Playlist</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">Enter Playlist Name:</label>
        <input
          type="text"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          className="w-full p-3 mb-4"
          placeholder="Enter playlist name"
        />

        <label className="block mb-4">Select Your Mood:</label>
        <select
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="w-full p-3 mb-4"
        >
          <option value="">Select Mood</option>
          <option value="happy">Happy</option>
          <option value="calm">Calm</option>
          <option value="energetic">Energetic</option>
          <option value="sad">Sad</option>
        </select>

        <button type="submit" className="bg-green-500 w-full py-3">Generate Playlist</button>
      </form>

      {/* Show the playlist link if available */}
      {playlistLink && (
        <div className="mt-6">
          <button
            onClick={() => window.open(playlistLink, '_blank')}
            className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500 transition duration-200"
          >
            Open Playlist
          </button>
        </div>
      )}

      {/* Show error message if any */}
      {error && (
        <div className="mt-4 text-red-500">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default PlaylistForm;

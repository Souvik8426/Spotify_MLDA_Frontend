import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white w-60 h-screen p-4 fixed">
      <h1 className="text-2xl font-bold mb-6">Your Library</h1>
      <ul className="space-y-4">
        <li>
          <a href="/" className="hover:text-green-500 block">Liked Songs</a>
        </li>
        <li>
          <a href="/" className="hover:text-green-500 block">Playlists</a>
        </li>
        <li>
          <a href="/" className="hover:text-green-500 block">Artists</a>
        </li>
        <li>
          <a href="/" className="hover:text-green-500 block">Albums</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

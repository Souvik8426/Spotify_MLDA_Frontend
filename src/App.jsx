import React from 'react';
import Navbar from './components/Navbar';
import PlaylistForm from './components/PlaylistForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen flex">
      <Navbar />
      <div className="flex-grow flex items-center justify-center ml-60 p-8">
        <PlaylistForm />
      </div>
    </div>
  );
}

export default App;

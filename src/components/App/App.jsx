import React from 'react';
import { useState, useEffect } from 'react';
import { fetchItems } from './galleryApi/galleryApi';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  const [galleryItems, setGalleryItems] = useState([]);

  const refreshItem = () => {
    const itemPromise = fetchItems();

    itemPromise
      .then((response) => {
        //console.log('Gallery Data:', response.data);
        setGalleryItems(response.data);
      })
      .catch((error) => {
        console.error(error);
        alert('SOMETHING WRONG IN GET');
      });
  };

  useEffect(() => {
    refreshItem();
  }, []);

  return (
    <div data-testid="app">
      <header>
        <h1>React Gallery</h1>
      </header>
      <GalleryList galleryItems={galleryItems} />
      <p>The gallery goes here!</p>
      <img src="images/goat_small.jpg" />
    </div>
  );
}

export default App;

import React from 'react';
import { useState, useEffect } from 'react';
import { fetchItems } from './galleryApi/galleryApi';
import GalleryList from '../GalleryList/GalleryList';
import Header from '../Header/Header';

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
      <Header />
      <GalleryList galleryItems={galleryItems} />
    </div>
  );
}

export default App;

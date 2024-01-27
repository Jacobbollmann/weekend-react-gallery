import React from 'react';
import { useState, useEffect } from 'react';
import { fetchItems } from './galleryApi/galleryApi';

function App() {
  const [galleryItem, setGalleryItem] = useState([]);

  const refreshItem = () => {
    const itemPromise = fetchItems();

    itemPromise
      .then((response) => {
        //console.log('Gallery Data:', response.data);
        setGalleryItem(response.data);
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
    <div>
      <header>
        <h1>React Gallery</h1>
      </header>

      <p>The gallery goes here!</p>
      <img src="images/goat_small.jpg" />
    </div>
  );
}

export default App;

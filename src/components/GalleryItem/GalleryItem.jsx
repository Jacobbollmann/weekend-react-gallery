import { likeUpdate } from '../App/galleryApi/galleryApi';
import { useState } from 'react';

function GalleryItem({ item, refreshItem }) {
  const [details, setDetails] = useState(true);

  const handleDetails = () => {
    setDetails(!details);
    console.log(details);
  };

  const handleLikeUpdate = (id) => {
    console.log('Like Button ID:', id);
    likeUpdate(id)
      .then((response) => {
        refreshItem();
      })
      .catch((error) => {
        console.error(error);
        alert('SOMETHING WENT WRONG IN LIKE UPDATE:');
      });
  };

  return (
    <>
      {details ? (
        <div data-testid="galleryItem">
          <h3>{item.title}</h3>
          <img src={item.url} />
          <p>Likes: {item.likes}</p>
          <button onClick={handleDetails}>Details</button>
          <button
            data-testid="like"
            onClick={() => {
              handleLikeUpdate(item.id);
            }}
          >
            Love It!
          </button>
        </div>
      ) : (
        <div>
          <p>Details</p>
        </div>
      )}
    </>
  );
}

export default GalleryItem;

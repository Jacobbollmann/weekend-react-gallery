import { likeUpdate } from '../../galleryApi/galleryApi';
import { useState } from 'react';

//style
import './GalleryItem.css';

function GalleryItem({ item, refreshItem }) {
  const [details, setDetails] = useState(true);

  const handleToggle = () => {
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
    <div data-testid="galleryItem" className="itemCard">
      <h3>{item.title}</h3>
      {details ? (
        <>
          <img src={item.url} />
          <p>Likes: {item.likes}</p>
          <button data-testid="toggle" onClick={handleToggle}>
            Details
          </button>
          <button
            data-testid="like"
            onClick={() => {
              handleLikeUpdate(item.id);
            }}
          >
            Love It!
          </button>
        </>
      ) : (
        <>
          <p data-testid="description">{item.description}</p>
          <button data-testid="toggle" onClick={handleToggle}>
            Back
          </button>
        </>
      )}
    </div>
  );
}

export default GalleryItem;

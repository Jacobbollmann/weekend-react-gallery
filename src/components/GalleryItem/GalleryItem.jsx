import { likeUpdate } from '../App/galleryApi/galleryApi';

function GalleryItem({ item, refreshItem }) {
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
    <div data-testid="galleryItem">
      <h3>{item.title}</h3>
      <img src={item.url} />
      <p>Likes: {item.likes}</p>
      <button
        data-testid="like"
        onClick={() => {
          handleLikeUpdate(item.id);
        }}
      >
        Love It!
      </button>
    </div>
  );
}

export default GalleryItem;

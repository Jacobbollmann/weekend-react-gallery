function GalleryItem({ item }) {
  return (
    <div data-testid="galleryItem">
      <h3>{item.title}</h3>
      <img src={item.url} />
      <p>Likes: {item.likes}</p>
      <button>Love It!</button>
    </div>
  );
}

export default GalleryItem;

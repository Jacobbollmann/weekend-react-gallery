function GalleryItem({ item }) {
  return (
    <div data-testid="galleryItem">
      <h3>{item.title}</h3>
      <img src={item.url} />
    </div>
  );
}

export default GalleryItem;

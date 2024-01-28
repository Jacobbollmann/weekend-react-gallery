function GalleryList({ galleryItems }) {
  return (
    <div data-testid="galleryList">
      {galleryItems.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <img src={item.url} />
          </div>
        );
      })}
    </div>
  );
}

export default GalleryList;

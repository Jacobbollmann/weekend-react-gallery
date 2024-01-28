import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ galleryItems }) {
  return (
    <div data-testid="galleryList">
      {galleryItems.map((item) => {
        return (
          <div key={item.id}>
            <GalleryItem item={item} />
          </div>
        );
      })}
    </div>
  );
}

export default GalleryList;

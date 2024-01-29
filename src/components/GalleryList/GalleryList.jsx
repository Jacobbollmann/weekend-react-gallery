import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

function GalleryList({ galleryItems, refreshItem }) {
  return (
    <div data-testid="galleryList" className="itemList">
      {galleryItems.map((item) => {
        return (
          <div key={item.id}>
            <GalleryItem item={item} refreshItem={refreshItem} />
          </div>
        );
      })}
    </div>
  );
}

export default GalleryList;

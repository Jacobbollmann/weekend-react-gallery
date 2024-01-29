import Axios from 'axios';

export const fetchItems = () => {
  return Axios.get('/api/gallery');
};

export const likeUpdate = (id) => {
  return Axios.put(`/api/gallery/like/${id}`);
};

import Axios from 'axios';

export const fetchItems = () => {
  return Axios.get('/api/gallery');
};

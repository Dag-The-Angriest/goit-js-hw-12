import axios from 'axios';

const serverApi = axios.create({
  baseURL: 'https://pixabay.com/api',
  url: '/',
});
export async function getImagesByQuery(query, page) {
  const params = {
    key: '55064967-1c5dabe6bc7cd06c1c4335f3a',
    image_type: 'photo',
    q: query,
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: page,
  };
  const res = await axios.get('https://pixabay.com/api/', { params });

  return res.data;
}

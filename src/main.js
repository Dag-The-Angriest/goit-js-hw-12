import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  loadMoreGallery,
} from './js/render-functions';

let query;
let page;
let totalPages;

const form = document.querySelector('.form');
const load = document.querySelector('.load');
const list = document.querySelector('.gallery');
const target = document.querySelector('.js-target');

load.addEventListener('click', onLoadMore);
form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();
  hideLoadMoreButton();
  showLoader();
  clearGallery();
  page = 1;
  const formData = new FormData(e.target);
  query = formData.get('search-text').trim();
  if (query == '') {
    hideLoader();
    return;
  }
  autoLoad.unobserve(target);
  try {
    const obj = await getImagesByQuery(query, page);
    // console.log(obj);
    totalPages = Math.ceil(obj.totalHits / 15);

    if (totalPages === 0) {
      //   console.log('yes');
      hideLoader();
      //   clearGallery();
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'bottomRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
      });
    }

    // console.log(obj);
    createGallery(obj.hits);
    // const markup = createGallery(obj.hits);
    // list.innerHTML = markup;
  } catch (err) {
    iziToast.error({
      title: 'Error',
      message: err.message,
    });
  }
  hideLoader();
  if (page >= totalPages) {
    hideLoadMoreButton();

    iziToast.show({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'bottomRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
    });
  } else {
    showLoadMoreButton();
  }
  checkObserverStatus();
  //   return;
}

async function onLoadMore() {
  hideLoadMoreButton();
  showLoader();
  page += 1;
  autoLoad.unobserve(target);
  try {
    const obj = await getImagesByQuery(query, page);
    // console.log(obj);
    loadMoreGallery(obj.hits);
    // const markup = createGallery(obj.hits);
    // list.insertAdjacentHTML('beforeend', markup);
  } catch {
    console.log('whyyy');

    iziToast.error({
      title: 'Error',
    });
  }
  hideLoader();
  checkObserverStatus();
  scrollPage();
  //   console.log(page);
  //   console.log(totalPages);

  if (page >= totalPages) {
    hideLoadMoreButton();
    iziToast.show({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'bottomRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
    });
  } else {
    showLoadMoreButton();
  }
}

const autoLoad = new IntersectionObserver(entries => {
  const entry = entries[0];
  if (entry.isIntersecting) {
    console.log('Викликаю onLoadMore');
    onLoadMore();
  }
});

function checkObserverStatus() {
  //   console.log('Перевірка чи треба вирубати onLoadMore');
  if (page >= totalPages) {
    autoLoad.unobserve(target);
    // console.log('Вирубили onLoadMore');
  } else {
    // console.log('Підняли onLoadMore');
    autoLoad.observe(target);
  }
}

function scrollPage() {
  const elem = list.firstElementChild;
  //   console.log(elem);
  const height = elem.getBoundingClientRect().height;
  //   console.log(height);
  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}

// .then(res => {
//     const arr = res.hits;
//     // console.log(arr);
//   if (arr.length == 0) {
//     console.log('yes');
//     hideLoader();
//     //   clearGallery();
//     return iziToast.show({
//       message:
//         'Sorry, there are no images matching your search query. Please try again!',
//       position: 'bottomRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
//     });
// }
// hideLoader();
// return createGallery(arr);
// })
// .catch(res => {
//   hideLoader();
//   return iziToast.show({
//     message: 'There was an error!',
//     position: 'bottomRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
//   });
// });
//   console.log(arr);

// const gallery1 = document.querySelector('.gallery');

// document.addEventListener('DOMContentLoaded', () => {
//   getImagesByQuery('cat').then(res => {
//     const arr = res.hits;
//     // console.log(arr);

//     const markup = imagesTemplate(arr);

//     gallery1.innerHTML = markup;
//   });
// });

// function imageTemplate(image) {
//   return `<li class="gallery-item">
// 	<a class="gallery-link" href="${image.largeImageURL}">
// 		<img
// 		  class="gallery-image"
// 		  src="${image.previewURL}"
// 		  alt=""
// 		/>
// 	</a>
// </li>`;
// }

// function imagesTemplate(arr) {
//   return arr.map(imageTemplate).join('');
// }

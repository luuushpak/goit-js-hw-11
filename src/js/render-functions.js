import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const instance = new SimpleLightbox('.gallery a');

export function createGallery(images) {
  const markup = images
    .map(image => {
      const {
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = image;
      return `<li class="gallery-item">
    <a href="${largeImageURL}" class="gallery-link">
      <img
        src="${webformatURL}"
        alt="${tags}"
        class="gallery-image"
      />
    </a>

    <div class="info">
      <p>Likes ${likes}</p>
      <p>Views ${views}</p>
      <p>Comments ${comments}</p>
      <p>Downloads ${downloads}</p>
    </div>
  </li>`;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  instance.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('is-hidden');
}

export function hideLoader() {
  loader.classList.add('is-hidden');
}

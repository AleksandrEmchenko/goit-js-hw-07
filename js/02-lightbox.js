import { galleryItems } from './gallery-items.js';

const makeElementOfGallery = ({ preview, original, description }) => {
  return `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    `;
};

const makeElements = galleryItems.map(makeElementOfGallery).join("");

const galleryEl = document.querySelector(".gallery");
galleryEl.insertAdjacentHTML("afterbegin", makeElements);

new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});
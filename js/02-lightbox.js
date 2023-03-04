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

const galleryBox = document.querySelector(".gallery");
galleryBox.addEventListener("click", handleClickOnImage);

function handleClickOnImage(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  } else {
    
    return new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});
    
  }
}

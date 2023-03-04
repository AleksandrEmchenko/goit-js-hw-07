import { galleryItems } from "./gallery-items.js";

const makeElementOfGallery = ({ preview, original, description }) => {
  return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>
    `;
};

const makeElements = galleryItems.map(makeElementOfGallery).join("");

const galleryEl = document.querySelector(".gallery");
galleryEl.insertAdjacentHTML("afterbegin", makeElements);

const galleryBox = document.querySelector("div.gallery");
galleryBox.addEventListener("click", handleClickOnImage);

function handleClickOnImage(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  } else {
    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">
    
    `);
    instance.show();
  }
}

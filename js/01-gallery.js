import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryItems(galleryItems);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
    )
    .join("");
}
gallery.insertAdjacentHTML("beforeend", galleryMarkup);

gallery.addEventListener("click", (evt) => {
  evt.preventDefault();
  const instance = basicLightbox.create(`
    <img
            class="gallery__image"
            src="${evt.target.dataset.source}"
          />
`);
  instance.show();
});

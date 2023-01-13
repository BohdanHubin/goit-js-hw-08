// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const galleryRef = document.querySelector('.gallery');


function createGalleryMarkap(item) {
   
    return item.map(({ preview, original, description }) => {
       return `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`
    }).join('')
};

const allGalleryMarkap = createGalleryMarkap(galleryItems);

galleryRef.innerHTML =allGalleryMarkap

new SimpleLightbox('.gallery a', { captions: true, captionsData: 'alt', captionDelay:250,});
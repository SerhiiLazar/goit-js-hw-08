// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery');
const galleryMarkup = createGaleryItems(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function createGaleryItems(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
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
    }).join('');
};

const lightBoxSlider = new SimpleLightbox('.gallery a ', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
    close: true,
});
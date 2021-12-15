import React from 'react';
import Button from '../Button/Button';
import { HomeGallerySection } from './HomeGallery.style';

export default React.memo(() => (
  <HomeGallerySection>
    <div className="gallery-new-shoes">
      <h2>NEW SHOES</h2>
      <p>
        We just dropped new fall shoe styles, and they are all ON SALE! Shop new
        combat boots, booties, mules, sneakers & more!
      </p>
      <Button>SHOP SHOES</Button>
    </div>
    <div className="gallery-accessories">
      <h2>Accessories</h2>
      <p>
        Take your fall outfit to the next level with new accessories! The
        perfect trendy handbag, dainty gold necklace, coin bracelet or statement
        earrings will upgrade any look.
      </p>
      <Button>SHOP ACCESSORIES</Button>
    </div>
    <img
      className="gallery1"
      src="./img/home/gallery/gallery-1.2.jpg"
      alt="galleryImage"
    />
    <img
      className="gallery2"
      src="./img/home/gallery/gallery-2.1.jpg"
      alt="galleryImage"
    />
    <img
      className="gallery3"
      src="./img/home/gallery/gallery-3.1.jpg"
      alt="galleryImage"
    />
  </HomeGallerySection>
));

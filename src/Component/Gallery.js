import React, { useState, useContext } from "react";
import CartNoti from "./CartNoti";
import { GalleryPhoto, GalleryPhotoThumbnails } from "./GalleryData";
import { close, minus, prev, next, remove } from "./Icons";
import { CartNotiShowContext } from "./CartNotiShow";
import { GalleryContext } from "./GalleryContext";
function Gallery() {
  const [showCartNoti, setshowCartNoti] = useContext(CartNotiShowContext);
  const [active, setactive, showOverlay, setShowOverlay] =
    useContext(GalleryContext);
  const buttonStyle = { background: "transparent", border: "none" };

  const prevPic = () => {
    if (active === 0) {
      setactive(GalleryPhotoThumbnails.length - 1);
    } else {
      setactive(active - 1);
    }
  };
  const nextPic = () => {
    if (active === GalleryPhotoThumbnails.length - 1) {
      setactive(0);
    } else {
      setactive(active + 1);
    }
  };
  return (
    <div className="gallery align-center">
      <div className="sizing ">
        <div className="photo-container">
          <button onClick={prevPic} className="btn prev">
            {prev}
          </button>
          <button onClick={nextPic} className="btn next">
            {next}
          </button>
          <div
            className={`gallery-cartnoti ${
              showCartNoti ? "show-gallery-cartnoti" : ""
            }`}
          >
            <CartNoti />
          </div>
          <img
            onClick={() => setShowOverlay(!showOverlay)}
            src={GalleryPhoto[active].src}
          />
        </div>

        <div className="gallery-thumbnails">
          {GalleryPhotoThumbnails.map((photo) => {
            const { id, src } = photo;
            return (
              <div key={id}>
                <button
                  className="thumbsnail-btn"
                  onClick={() => setactive(id - 1)}
                >
                  <img
                    className={active === id - 1 ? "imgactive" : undefined}
                    src={src}
                    alt="thumbsnail"
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Gallery;

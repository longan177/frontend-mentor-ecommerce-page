import React, { useContext, useState } from "react";
import CartNoti from "./CartNoti";
import { GalleryPhoto, GalleryPhotoThumbnails } from "./GalleryData";
import { close2, minus, prev, next, remove } from "./Icons";
import { GalleryContext } from "./GalleryContext";

function Overlay() {
  const [active, setactive, showOverlay, setShowOverlay] =
    useContext(GalleryContext);

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
    <div
      className={`overlay align-center ${
        showOverlay ? "show-overlay" : undefined
      }`}
    >
      {/* // <div className="overlay align-center show-overlay"> */}
      <div className="overlay-content">
        <div className="photo-container">
          <button
            onClick={() => setShowOverlay(!showOverlay)}
            className="close"
          >
            {close2}
          </button>
          <button onClick={prevPic} className="btn prev">
            {prev}
          </button>
          <button onClick={nextPic} className="btn next">
            {next}
          </button>
          <img src={GalleryPhoto[active].src} />
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

export default Overlay;

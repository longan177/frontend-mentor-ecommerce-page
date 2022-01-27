import React, { useState } from "react";

export const GalleryContext = React.createContext();

export function GalleryProvider({ children }) {
  const [active, setactive] = useState(1);
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <GalleryContext.Provider
      value={[active, setactive, showOverlay, setShowOverlay]}
    >
      {children}
    </GalleryContext.Provider>
  );
}

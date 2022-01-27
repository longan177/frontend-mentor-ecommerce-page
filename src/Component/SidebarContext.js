import React, { Children, useState } from "react";

export const SidebarContext = React.createContext();
export function SidebarProvider({ children }) {
  const [showSidebar, setshowSidebar] = useState(false);

  return (
    <SidebarContext.Provider value={[showSidebar, setshowSidebar]}>
      {children}
    </SidebarContext.Provider>
  );
}

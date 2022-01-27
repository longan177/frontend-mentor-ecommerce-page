import Content from "./Component/Content";

import Nav from "./Component/Nav";
import Overlay from "./Component/Overlay";
import Sidebar from "./Component/Sidebar";
import { SidebarProvider } from "./Component/SidebarContext";
import { CartProvider } from "./Component/CartContext";
import { CartNotiShowProvider } from "./Component/CartNotiShow";
import { GalleryProvider } from "./Component/GalleryContext";

function App() {
  return (
    <div className="section">
      <SidebarProvider>
        <CartProvider>
          <CartNotiShowProvider>
            <GalleryProvider>
              <Sidebar />
              <Nav />
              <Content />
              <Overlay />
            </GalleryProvider>
          </CartNotiShowProvider>
        </CartProvider>
      </SidebarProvider>
    </div>
  );
}

export default App;

import React, { useState, useContext } from "react";
import { navLinks } from "./Data";
import { close } from "./Icons";
import { SidebarContext } from "./SidebarContext";

function Sidebar() {
  const [showSidebar, setshowSidebar] = useContext(SidebarContext);
  return (
    <div>
      <div className={`sidebar  ${!showSidebar ? `hide-sidebar` : ""}`}></div>
      <div className={`sidebar-content ${showSidebar ? `show-sidebar` : ""} `}>
        <span>
          <button onClick={() => setshowSidebar(!showSidebar)}>{close}</button>
        </span>
        <ul>
          {navLinks.map((link) => {
            const { id, title } = link;
            return (
              <li key={id}>
                <a href="#">{title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

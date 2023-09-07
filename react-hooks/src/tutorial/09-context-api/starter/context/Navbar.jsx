import React, { createContext, useContext, useState } from "react";
import Navlinks from "./Navlinks";

export const ContextProvider = createContext();

//custom use context hook
export const useAppContext = () => useContext(ContextProvider);

const Navbar = () => {
  const [user, setUser] = useState({ name: "Salman" });

  const logout = () => {
    setUser(null);
  };

  return (
    <ContextProvider.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <Navlinks />
      </nav>
    </ContextProvider.Provider>
  );
};

export default Navbar;

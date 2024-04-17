import React, { useContext } from "react";

export const MyContext = React.createContext(null);

export const useMyContext = () => useContext(MyContext);

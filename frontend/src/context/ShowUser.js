import { createContext, useContext, useState } from "react";

export const ShowUserContext = createContext();

export const ShowUserProvider = (props) => {
  const [loggedUser, setLoggedUser] = useState('')

  return (
    <ShowUserContext.Provider value={{ loggedUser, setLoggedUser }}>
      {props.children}
    </ShowUserContext.Provider>
  );
};

export const useShowUser = () => useContext(ShowUserContext);

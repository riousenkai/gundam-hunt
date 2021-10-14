import { createContext, useContext, useState } from "react";

export const ShowModalContext = createContext();

export const ShowModalProvider = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [num, setNum] = useState(0)
  const [clicked, setClicked] = useState(0)

  return (
    <ShowModalContext.Provider value={{ showModal, setShowModal, num, setNum, clicked, setClicked }}>
      {props.children}
    </ShowModalContext.Provider>
  );
};

export const useShowModal = () => useContext(ShowModalContext);

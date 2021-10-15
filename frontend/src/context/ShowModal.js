import { createContext, useContext, useState } from "react";

export const ShowModalContext = createContext();

export const ShowModalProvider = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [num, setNum] = useState(0)
  const [clicked, setClicked] = useState(0)
  const [results, setResults] = useState('')
  const [pop, setPop] = useState(false)

  return (
    <ShowModalContext.Provider value={{ results, setResults, showModal, setShowModal, num, setNum, clicked, setClicked, pop, setPop }}>
      {props.children}
    </ShowModalContext.Provider>
  );
};

export const useShowModal = () => useContext(ShowModalContext);

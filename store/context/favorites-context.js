import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  // favorite Meals state
  const [ids, setIds] = useState([]);

  const addFavorite = (id) => {
    setIds((currentIds) => {
      return currentIds.concat(id);
    });
  };

  const removeFavorite = (id) => {
    setIds((currentIds) => {
      return currentIds.filter((currentId) => currentId !== id);
    });
  };

  const value = {
    ids,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;

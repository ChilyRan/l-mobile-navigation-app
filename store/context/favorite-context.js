import { createContext, useState } from "react";
import { Text } from "react-native";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoriteContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealids] = useState([]);
  function addFavorite(id) {
    setFavoriteMealids((currentFavIds) => [...currentFavIds, id]);
  }
  function removeFavorite(id) {
    setFavoriteMealids((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }
  const values ={
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite
  }
  return (
    <FavoritesContext.Provider value={values}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoriteContextProvider;

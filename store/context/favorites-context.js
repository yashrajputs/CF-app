import { createContext, useState } from "react";
import MealDetailScreen from "../../screens/MealDetailScreen";

const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
});

function FavoritesContextProvider({children}) {
const [favoriteMealIds, setFavoriteMealIds]= useState([]);

function addFavorite(id) {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
}

function removeFavorite(id) {
    setFavoriteMealIds((currentFavIds) =>          currentFavIds.filter((mealId) => mealId !==id)
);
}

const value = {
    ids : favoriteMealIds,
    addFavorite : addFavorite,
    removeFavorite : removeFavorite
};

    return <FavoritesContextProvider value={value}>{children}</FavoritesContextProvider>
}

export default FavoritesContextProvider;
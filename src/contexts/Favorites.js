import { createContext, useContext, useState } from "react";

export const FavoritesContexts = createContext();
FavoritesContexts.displayName = "My Favorites";

export default function FavoritesProvider({ children }){
    const [favorite, setFavorite] = useState([]);
    return (
        <FavoritesContexts.Provider
        value={ { favorite, setFavorite } }
        >
            { children }
        </FavoritesContexts.Provider>
    );
}
// hook personalizado 
export function useFavoriteContext(){
    const { favorite, setFavorite } = useContext(FavoritesContexts);
    function addFavorite(newFavorite){
        // verificar se tem item favorito repetido
        const repeatedFavorite = favorite.some((item) => item.id === newFavorite.id);
        // nova lista recebe lista anterior
        let newList = [...favorite];
        // verificar se não tem repetido e adicionar o item na lista de favoritos
        if(!repeatedFavorite){
            newList.push(newFavorite);
            return setFavorite(newList);
        }
        // se for repetido ele vai ser retirado da lista
        newList = favorite.filter((fav)=>fav.id !== newFavorite.id);
        return setFavorite(newList);
    }
    return {
        favorite,
        addFavorite
    }
}
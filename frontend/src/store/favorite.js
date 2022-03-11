import { csrfFetch } from './csrf';

const LOAD_FAVORITES = 'favorites/LOAD_FAVORITES';
const ADD_FAVORITE = 'favorites/ADD_FAVORITE';
const REMOVE_FAVORITE = 'favorites/REMOVE_FAVORITE';

export const loadFavorites = (favorites) => {
    return {
        type: LOAD_FAVORITES,
        favorites
    }
};

export const getFavorites = () => async (dispatch) => {
    const response = await fetch(`/api/favorites`);

    if(response.ok) {
        const favorites = await response.json();
        dispatch(loadFavorites(favorites));
        return favorites;
    }
};


const initialState = {};

const favoritesReducer = (state = initialState, action) => {
    let allFavorites;
    let objFavorites;
    switch(action.type) {
        case LOAD_FAVORITES:
            allFavorites = [];
            objFavorites = {};
            action.favorites.forEach((favorite) => {
                allFavorites.push(favorite);
                objFavorites[favorite.id] = favorite;
            });
            return {
                allFavorites,
                objFavorites
            };

        default:
            return state;

    }
}


export default favoritesReducer;

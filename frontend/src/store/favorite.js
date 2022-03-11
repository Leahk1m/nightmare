import { csrfFetch } from './csrf';
import { ValidationError } from '../utils/validationError';

const LOAD_FAVORITES = 'favorites/LOAD_FAVORITES';
const ADD_FAVORITE = 'favorites/ADD_FAVORITE';
const REMOVE_FAVORITE = 'favorites/REMOVE_FAVORITE';

export const loadFavorites = (favorites) => {
    return {
        type: LOAD_FAVORITES,
        favorites
    }
};

export const addFavorite = (fav) => {
    return {
        type: ADD_FAVORITE,
        fav
    }
};

export const removeFavorite = (favId) => {
    return {
        type: REMOVE_FAVORITE,
        favId
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

export const addingFavorite = (favorite) => async (dispatch) => {
    const { spotId, userId } = favorite;
    const response = await csrfFetch('/api/favorites', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            spotId,
            userId
        }),
    });
      if (!response.ok) {
        let error;
        if (response.status === 422) {
          error = await response.json();
          throw new ValidationError(error.errors, response.statusText);
        } else {
          let errorJSON;
          error = await response.text();
          try {
            // Check if the error is JSON, i.e., from the Favorites server. If so,
            // don't throw error yet or it will be caught by the following catch
            errorJSON = JSON.parse(error);
          } catch {
            // Case if server could not be reached
            throw new Error(error);
          }
          throw new Error(`${errorJSON.title}: ${errorJSON.message}`);
        }
      }
    const data = await response.json();
    dispatch(addFavorite(data));
    return response;
}

export const deletingFavorite = (favId) => async dispatch => {
    const response = await csrfFetch(`/api/favorites/${favId}`, {
        method: 'DELETE'
    });
    if(response.ok) {
        const { id: deletedFavId } = await response.json(); //grabbing the thing we sent and turning it back into  javascript from json
        dispatch(removeFavorite(deletedFavId)); //gave it this name bc it's passed in as an object and we only want the value of the id
        return deletedFavId;
    }
};


const initialState = {};

const favoritesReducer = (state = initialState, action) => {
    let newFavorite;
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
        case ADD_FAVORITE:
            console.log(action)
            newFavorite = Object.assign({}, state);
            allFavorites = newFavorite.allFavorites;
            objFavorites = newFavorite.objFavorites;
            allFavorites.push(action.fav);
            objFavorites[action.fav.id] = action.fav //keys into object at the key of new fav and assigns it the value of new fav

            return {
                allFavorites,
                objFavorites
            }
        case REMOVE_FAVORITE:
            

        default:
            return state;

    }
}


export default favoritesReducer;

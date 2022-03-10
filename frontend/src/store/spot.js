import { csrfFetch } from './csrf';
import { ValidationError } from '../utils/validationError';

const LOAD_SPOTS = 'spot/LOADSPOTS';
const ADD_SPOT = 'spot/ADDSPOT';
const GET_ONE = 'spot/GET_ONE';
const UPDATE_ONE = 'spot/UPDATE_ONE';
const REMOVE_ONE = 'spot/REMOVE_ONE';


export const loadSpots = (spots) => {
    return {
        type: LOAD_SPOTS,
        spots
    }
};

export const addSpot = (spot) => {
    return {
        type: ADD_SPOT,
        spot
    }
};

export const getOne = (spot) => {
    return {
        type: GET_ONE,
        spot

    }
};

export const updateOne = (spot) => {
    return {
        type: UPDATE_ONE,
        spot

    }
};

export const removeOne = (spotId) => {
    return {
        type: REMOVE_ONE,
        spotId
    }
};

export const getSpots = () => async (dispatch) => {
    const response = await fetch(`/api/spots`);

    if (response.ok) {
      const spots = await response.json();
      dispatch(loadSpots(spots));
      return spots;
    }
  };



  export const addListing = (spot) => async (dispatch) => {
    const { userId, address, city, state, country, name, price, imageUrl } = spot;
    const response = await csrfFetch('/api/spots', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        address,
        city,
        state,
        country,
        name,
        price,
        imageUrl
      }),
    });

    // if (!response.ok) {
    //     let error;
    //     if (response.status === 422) {
    //       error = await response.json();
    //       throw new ValidationError(error.errors, response.statusText);
    //     } else {
    //       let errorJSON;
    //       error = await response.text();
    //       try {
    //         // Check if the error is JSON, i.e., from the Spot server. If so,
    //         // don't throw error yet or it will be caught by the following catch
    //         errorJSON = JSON.parse(error);
    //       } catch {
    //         // Case if server could not be reached
    //         throw new Error(error);
    //       }
    //       throw new Error(`${errorJSON.title}: ${errorJSON.message}`);
    //     }
    //   }
    const data = await response.json();
    // console.log(data)
    dispatch(addSpot(data));
    return response;
  };

  export const getOneSpot = id => async dispatch => {
      const response = await fetch(`/api/spots/${id}`);

      if(response.ok) {
          const spot = await response.json();
          dispatch(getOne(spot));
      }
  };

  export const updateSpot = spot => async dispatch => {
    const { spotId, userId, address, city, state, country, name, price, imageUrl } = spot;
      const response = await csrfFetch(`/api/spots/${userId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            spotId,
            userId,
            address,
            city,
            state,
            country,
            name,
            price,
            imageUrl
          })
      })
      if (response.ok) {
        const spot = await response.json();
        // console.log(spot)
        dispatch(updateOne(spot));
        return spot;
      }
  };

  export const deleteListing = (spotId) => async dispatch => {
      const response = await csrfFetch(`/api/spots/${spotId}`, {
          method: 'DELETE'
      });

      if(response.ok) {
          const { id: deletedItemId } = await response.json();
        //   console.log(deletedItemId)
          dispatch(removeOne(deletedItemId));
          return deletedItemId;
      }

  };


const initialState = { spot: null };


const spotReducer = (state = initialState, action) => {
    let newSpot;
    let allSpots;
    let objSpots;
    switch (action.type) {
        case LOAD_SPOTS:
            allSpots = [];
            objSpots = {};
            action.spots.forEach(spot => {
                allSpots.push(spot);
                objSpots[spot.id] = spot;
            });
            return {
                allSpots,
                objSpots,
            };
        case ADD_SPOT:
            newSpot = Object.assign({}, state);
            allSpots = newSpot.allSpots;
            objSpots = newSpot.objSpots;
            allSpots.push(action.spot);
            objSpots[action.spot.id] = action.spot

            return {
                allSpots,
                objSpots,
            }
        case GET_ONE:
            return {
                ...state,
                [action.spot.id]: {
                    ...state[action.spot.id],
                    ...action.spot
                }
            }
        case UPDATE_ONE:
            console.log(action.spot)
            newSpot = Object.assign({}, state);
            allSpots = newSpot.allSpots;
            objSpots = newSpot.objSpots;
            allSpots[action.spot.id - 1] = action.spot;
            objSpots[action.spot.id] = action.spot;

            return {
                allSpots,
                objSpots
            }
        case REMOVE_ONE:
            const newState = {...state};
            delete newState.objSpots[action.spotId]
            let index;
            newState.allSpots.forEach((spot, i) => {
                if(spot.id === action.spotId) {
                    return index = i;
                }
            })
            newState.allSpots.splice(index, 1)
            delete newState[action.spotId]
            return newState;

        default:
            return state;
        }
};

export default spotReducer;

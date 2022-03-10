import { csrfFetch } from './csrf';

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

export const removeOne = (spotId, userId) => {
    return {
        type: REMOVE_ONE,
        spotId,
        userId
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

  export const deleteListing = (spotId, userId) => async dispatch => {
      const response = await csrfFetch(`/api/spots/${spotId}`, {
          method: 'DELETE'
      });

      if(response.ok) {
          const { id: deletedItemId } = await response.json();
          dispatch(removeOne(deletedItemId, userId));
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
            delete newState[action.spotId];
            return newState;

        default:
            return state;
        }
};

export default spotReducer;

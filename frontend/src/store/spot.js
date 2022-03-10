import { csrfFetch } from './csrf';

const LOAD_SPOTS = 'spot/LOADSPOTS';
const ADD_SPOT = 'spot/ADDSPOT';


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
}

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
                // ...state
            };
        case ADD_SPOT:
            // return {
            //     ...state,
            //     spot: { ...state.spot, [action.article.id]: action.article }
            //     };
            newSpot = Object.assign({}, state);
            allSpots = newSpot.allSpots;
            objSpots = newSpot.objSpots;
            allSpots.push(action.spot);
            objSpots[action.spot.id] = action.spot
            // console.log(action.spot)
            return {
                // newSpot,
                allSpots,
                objSpots,
            }
            // console.log(newSpot.allSpots)
            // newSpot.spot = action.payload;
            // return newSpot;

        default:
            return state;
        }
};

export default spotReducer;

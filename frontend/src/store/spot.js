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
        payload: spot
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
    const { address, city, state, country, name, price } = spot;
    const response = await fetch('/api/spot', {
      method: 'POST',
      body: JSON.stringify({
        address,
        city,
        state,
        country,
        name,
        price
      }),
    });
    const data = await response.json();
    dispatch(addSpot(data.spot));
    return response;
  };



const initialState = { spot: null };


const spotReducer = (state = initialState, action) => {
    let newSpot;
    switch (action.type) {
        case LOAD_SPOTS:
            const allSpots = [];
            const objSpots = {};
            action.spots.forEach(spot => {
                allSpots.push(spot);
                objSpots[spot.id] = spot;
            });
            return {
                allSpots,
                objSpots,
                ...state
            };
        case ADD_SPOT:
            newSpot = Object.assign({}, state);
            newSpot.spot = action.payload;
            return newSpot;

        default:
            return state;
        }
};

export default spotReducer;

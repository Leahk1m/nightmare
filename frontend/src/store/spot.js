
import { ValidationError } from '../utils/validationError';
const LOAD_SPOTS = "spots/LOAD_SPOTS";
const UPDATE_SPOT = "spots/UPDATE_SPOT";
const REMOVE_SPOT = "spots/REMOVE_SPOT";
const ADD_SPOT = "spots/ADD_SPOT";
const GET_ONE_SPOT = "spots/GET_ONE_SPOT";

const load = (spots) => ({
    type: LOAD_SPOTS,
    spots

});

const updateOne = (spot) => ({
    type: UPDATE_SPOT,
    spot
});

const addOne = (spot) => ({
    type: ADD_SPOT,
    spot
});

const removeOne = (userId, spotId) => ({
    type: REMOVE_SPOT,
    userId,
    spotId
});

const getOne = spot => ({
    type: GET_ONE_SPOT,
    spot
});

export const getSpots = () => async dispatch => {
    const response = await fetch(`/api/spots`);

    if(response.ok) {
        const spots = await response.json();
        dispatch(load(spots));
    }
};

export const getOneSpot = id => async dispatch => {
    const response = await fetch(`/api/spots/${id}`);

    if(response.ok) {
        const spot = await response.json();
        dispatch(getOne(spot))
    }
};

export const createSpot = data => async dispatch => {
    try {
        const response = await fetch(`/api/spots`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
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
                // Check if the error is JSON, i.e., from the Spots server. If so,
                // don't throw error yet or it will be caught by the following catch
                errorJSON = JSON.parse(error);
              } catch {
                // Case if server could not be reached
                throw new Error(error);
              }
              throw new Error(`${errorJSON.title}: ${errorJSON.message}`);
            }
          }

          const spot = await response.json();
          dispatch(addOne(spot));
          return spot;
        } catch (error) {
          throw error;
        }
      };


      export const updateSpot = data => async dispatch => {
        const response = await fetch(`/api/spots/${data.id}`, {
          method: 'put',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          const spot = await response.json();
          dispatch(updateOne(spot));
          return spot;
        }
      };

      const spotReducer = (state = {}, action) => {
          switch(action.type) {
              case LOAD_SPOTS:
                  const allSpots = {};
                  action.spot.forEach(spoty => {
                      allSpots[spoty.id] = spoty;
                  });
                  return allSpots;
              case GET_ONE_SPOT:
                  return {
                      ...state,
                      [action.spot.id]: {
                          ...state[action.spot.id],
                          ...action.spot,
                      },
                  };
              case ADD_SPOT:
                const newState = {
                    ...state,
                    [action.spot.id]: action.spot,
                };
                return newState;
              default:
                  return state;
          }
      }

      export default spotReducer;

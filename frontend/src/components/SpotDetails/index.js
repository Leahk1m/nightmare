import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './SpotDetails.css';
import { getOneSpot } from '../../store/spot';
import * as sessionActions from '../../store/session';

function SpotDetails() {
    const { spotId } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const spot = useSelector(state => state.spot.allSpots[spotId]);
    const dispatch = useDispatch();
    // const foundSpot = spotsData.find((spot) => spot.allSpots.id === spotId);

    const [favorites, setFavorites] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);

    useEffect(() => {
        dispatch(getOneSpot(spotId));

    }, [dispatch, spotId])

    if(sessionUser && spot.userId === sessionUser.id) {

    }

    return (
        <div className="spot-detail-container">
            <h1 className="spot-detail-title">{spot.name}</h1>

           <div className="spot-detail-img-container">
                <img className="detail-pic" src={spot.imageUrl} alt="spot-details-pic"/>
           </div>

           <div className="spot-detail-city-state-country">
               <h3>{spot.city} {spot.state} {spot.country}</h3>
           </div>

           <div className="spot-detail-addy">
               <h4>{spot.address}</h4>

           </div>

            <div className="fav-btn-container">
                <button onClick={() => setFavorites(true)} className="spot-detail-fav-btn">
                    Add to Favorites
                </button>

            </div>

            {showUpdateForm === true ?
                <div>
                    <form>
                        
                    </form>
                </div>
            : null
            }

            {sessionUser && spot.userId === sessionUser.id ?
                <div>
                    <button onClick={() => setShowUpdateForm(true)}>Update Spot</button>
                </div>



            : <div>bye</div>

            }

        </div>

    );

}

export default SpotDetails;

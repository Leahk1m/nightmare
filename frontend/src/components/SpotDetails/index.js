import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './SpotDetails.css';
import { getOneSpot } from '../../store/spot';

function SpotDetails({ spotsData }) {
    const { spotId } = useParams();
    const spot = useSelector(state => state.spot.allSpots[spotId]);
    const dispatch = useDispatch();
    // const foundSpot = spotsData.find((spot) => spot.allSpots.id === spotId);

    const [favorites, setFavorites] = useState(false);

    useEffect(() => {
        dispatch(getOneSpot(spotId));

    }, [dispatch, spotId])

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

        </div>

    );

}

export default SpotDetails;

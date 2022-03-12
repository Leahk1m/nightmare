// import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import './FavoriteShow.css';
// import * as favActions from '../../store/favorite';
import { useSelector } from "react-redux";


function FavoritesShow({ favData }) {
    // const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user.id);
    const spots = useSelector(state => state.spot.objSpots);
    favData.filter((fav) => fav.userId === userId);

    return (
        <div className="fav-show-container">
            <div className="fav-spot-title-container">
                <h1 className="spots-i-would-haunt-title">Spots that I would haunt as a ghost... </h1>
                <img className="cute-bat-gif" src="https://64.media.tumblr.com/245d476db2fe828950eac6b367a8e1a3/tumblr_nwjixdTx2p1s5kid8o1_500.gifv" alt="bat-gif"/>

            </div>

            <div className="all-fav-spots-container">
                {(favData || []).map((favSpot) => (
                    <div className="favSpot-container" key={favSpot.id}>
                        <h4>{spots[favSpot.spotId].name}</h4>
                        <Link to={`/spots/${favSpot.spotId}`}>
                            <img className="fav-spot-img" src={spots[favSpot.spotId].imageUrl} alt="fave-spot-img"/>
                        </Link>
                    </div>
                ))}
            </div>
        </div>

    );

};

export default FavoritesShow;

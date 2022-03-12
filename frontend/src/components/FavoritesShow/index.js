import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import './FavoriteShow.css';
// import * as favActions from '../../store/favorite';
import { useDispatch, useSelector } from "react-redux";


function FavoritesShow({ favData }) {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user.id);
    const spots = useSelector(state => state.spot.objSpots);
    favData.filter((fav) => fav.userId === userId);

    return (
        <div className="fav-show-container">
            <div>
                <h1 className="spots-i-would-haunt-title">Spots That I would Haunt as a Ghost </h1>
                <img className="in-love-ghost-pic" src="https://c.tenor.com/FZAf7pZFFh0AAAAC/blushing-ghost.gif" alt="in-love-ghost"/>

            </div>
            {(favData || []).map((favSpot) => (
                <div className="favSpot-container" key={favSpot.id}>
                    <h3>{spots[favSpot.spotId].name}</h3>
                    <Link to={`/spots/${favSpot.spotId}`}>
                        <img className="fav-spot-img" src={spots[favSpot.spotId].imageUrl}/>
                    </Link>
                </div>
            ))}
        </div>

    );

};

export default FavoritesShow;

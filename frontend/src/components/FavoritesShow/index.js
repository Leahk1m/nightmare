import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import './FavoriteShow.css';
// import * as favActions from '../../store/favorite';
import { useDispatch, useSelector } from "react-redux";


function FavoritesShow({ favData }) {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user.id);
    // const favs = useSelector(state => state.favorites.allFavorites);
    const spots = useSelector(state => state.spot.objSpots);
    favData.filter((fav) => fav.userId === userId);

    return (
        <div className="fav-show-container">
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

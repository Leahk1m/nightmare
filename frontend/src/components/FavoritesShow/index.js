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


    // const foundFav = spots.filter(())
    //store ids in favorite
    // const [favorite, setFavorite] = useState([]);

    // const addToFavorit
    // useEffect(() => {
    //     dispatch(favActions.getFavorites(favData))

    // }, [dispatch])

    return (
        <div>
            {console.log(favData)}

            {(favData || []).map((favSpot) => (
                <div className="favSpot-container" key={favSpot.id}>
                    <h2>{spots[favSpot.spotId].name}</h2>
                    <Link to={`/spots/${favSpot.spotId}`}>
                        <img className="fav-spot-img" src={spots[favSpot.spotId].imageUrl}/>
                    </Link>

                </div>
            ))}
        </div>

    );

};

export default FavoritesShow;

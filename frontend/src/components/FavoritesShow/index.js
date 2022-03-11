import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FavoriteShow.css';


function FavoritesShow({ favData }) {
    // const [favorite, setFavorite] = useState([]);

    // const addToFavorite
    return (
        <div>
            {(favData || []).map((favSpot) => (
                <div className="favSpot-container" key={favSpot.id}>
                    <div>
                        {favSpot.id}
                    </div>

                </div>
            ))}
        </div>

    );

};

export default FavoritesShow;

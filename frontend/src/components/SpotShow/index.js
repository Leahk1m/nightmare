import React from 'react';
import { Link } from 'react-router-dom';



function SpotShow({ spotsData }) {
//    const spotsArr = Object.values(spotsData);

    return(
        <div>
            {spotsData.map((spot) => (
                <div className="indiv-spot-container-showpage">
                    <Link to={`/spots/${spot.id}`} key={spot.id}>
                        {spot.city}

                    </Link>

                </div>

            ))}
        </div>
    );


}

export default SpotShow;

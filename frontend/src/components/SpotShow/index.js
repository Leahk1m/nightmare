import React from 'react';
import { Link } from 'react-router-dom';
import './SpotShow.css';



function SpotShow({ spotsData }) {
    return(
        <div className="whole-container-showpage-spots">
            {spotsData.map((spot) => (
                <div className="indiv-spot-container-showpage">

                    <div className="spot-showpage-img-container">
                        <img className="spot-showpage-img" src={spot.imageUrl} alt="indiv-spots-pic"/>

                    </div>

                    <Link className="indiv-spot-link" to={`/spots/${spot.id}`} key={spot.id}>
                        {spot.name}
                    </Link>

                    <p>
                        {`$`}{spot.price}{` / night`}
                    </p>

                </div>

            ))}
        </div>
    );


}

export default SpotShow;

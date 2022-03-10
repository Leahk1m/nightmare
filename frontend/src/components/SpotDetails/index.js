import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './SpotDetails.css';
import { getOneSpot } from '../../store/spot';
import * as sessionActions from '../../store/session';
import * as spotActions from '../../store/spot';

function SpotDetails() {
    const history = useHistory();
    const { spotId } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const spot = useSelector(state => state.spot.allSpots[spotId]);
    const dispatch = useDispatch();
    // const foundSpot = spotsData.find((spot) => spot.allSpots.id === spotId);

    const [favorites, setFavorites] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [errors, setErrors] = useState([]);
    const [imageUrl, setImageUrl] = useState('');

    const userId = useSelector(state => state.session.user.id);

    useEffect(() => {
        dispatch(getOneSpot(spotId));

    }, [dispatch, spotId])


    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        await dispatch(spotActions.addListing({ userId, address, city, state, country, name, price, imageUrl }))
            .catch(async (res) => {
                const data = await res.json();
                console.log(data)
                if(data && data.errors) setErrors(data.errors);
            })
            .then(() => history.push(`/spots/${spotId}`))

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
                     <form className="create-spot-form" onSubmit={handleSubmit}>
                <div className="create-spot-title">
                    <label>
                    Update Your Haunted Listing
                    </label>
                </div>

                <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Name"
                />

                <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                placeholder="Address"
                />

                <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                placeholder="City"
                />

                <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
                placeholder="State"
                />

                <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
                placeholder="Country"
                />

                <input
                type="number"
                value={price}
                onChange={(e) => setPrice(+e.target.value)}
                required
                placeholder="Price"
                />

                <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                required
                placeholder="Image url"
                />

                <button className="create-spot-btn" type="submit">Update Spot</button>


                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
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

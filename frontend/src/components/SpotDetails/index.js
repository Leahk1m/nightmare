import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './SpotDetails.css';
import { getOneSpot, deleteListing } from '../../store/spot';

import * as spotActions from '../../store/spot';
import * as favActions from '../../store/favorite';

function SpotDetails() {
    const history = useHistory();
    const { spotId } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const spot = useSelector(state => state.spot.objSpots[spotId]);
    const dispatch = useDispatch();
    let favs = useSelector(state => state.favorites.allFavorites);
    const userId = useSelector(state => state.session.user.id);

    let favId;
        for(let i = 0; i < favs.length; i++) {
            let fav = favs[i];
            if(fav.spotId === +spotId && fav.userId === userId) {
                favId = fav.id
            }
        }

    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [showUpdateBtn, setShowUpdateBtn] = useState(false);

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [errors, setErrors] = useState([]);
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        dispatch(getOneSpot(spotId))

    }, [dispatch, spotId])

    const deleteSpot = (e) => {
        e.preventDefault();
        dispatch(deleteListing(spotId))
            .then(() => history.push(`/spots`))
    };

    const addToFav = (e) => {
        e.preventDefault();
        dispatch(favActions.addingFavorite({spotId, userId})) //send as obj if it's more than one thing
            .then(() => history.push('/favorites'))
    };

    const deleteFav = (e) => {
        e.preventDefault();
        dispatch(favActions.deletingFavorite(favId))
            .then(() => history.push('/favorites'))

    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        await dispatch(spotActions.updateSpot({ spotId, userId, address, city, state, country, name, price, imageUrl }))
            .catch(async (res) => {
                const data = await res.json();

                if(data && data.errors) setErrors(data.errors);
            })
            .then(() => history.push(`/spots/${spotId}`))

    }

    return (
        <div className="update-spot-detail-container">
            { spot ?
                <div>
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
                        {
                            spot.userId === userId ?
                            <p>You own this spot</p>
                            :
                            (favId ?
                                <input type="button" onClick={deleteFav} value="♥" className="spot-detail-unfav-btn"
                                />
                                :
                                <input type="button" onClick={addToFav} value="♡" className="spot-detail-fav-btn"
                                />
                            )
                        }


                    </div>

                    {showUpdateForm === true ?
                        <div>
                            <form className="update-spot-form" onSubmit={handleSubmit}>
                        <div className="update-spot-title">
                            <label>
                            Update Your Haunted Listing
                            </label>
                        </div>

                        <input className="update-form-input"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Name"
                        />

                        <input className="update-form-input"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                        placeholder="Address"
                        />

                        <input className="update-form-input"
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                        placeholder="City"
                        />

                        <input className="update-form-input"
                        type="text"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                        placeholder="State"
                        />

                        <input className="update-form-input"
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                        placeholder="Country"
                        />

                        <input className="update-form-input"
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(+e.target.value)}
                        required
                        placeholder="Price"
                        />

                        <input className="update-form-input"
                        type="text"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        required
                        placeholder="Image url"
                        />

                        <div className="update-spot-btn-container">
                            <button className="update-spot-btn" type="submit">Update Spot</button>

                        </div>


                        <ul>
                            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                        </ul>
                    </form>
                        </div>
                    : null
                    }

                    {sessionUser && spot.userId === sessionUser.id ?
                        <div className="update-and-delete-form-btns">
                            {!showUpdateBtn ?
                                <button onClick={() => [setShowUpdateForm(true), setShowUpdateBtn(true)]}>Update Spot</button>
                            : null
                            }
                            <button onClick={deleteSpot}>Delete Spot</button>
                        </div>

                    : null

                    }
                </div>

                : <p>This Spot Does Not Exist</p>
            }


        </div>

    );

}

export default SpotDetails;

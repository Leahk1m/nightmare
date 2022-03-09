import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import * as spotActions from '../../store/spot';
// import * as sessionActions from '../../store/session';

function SpotFormPage() {
    const dispatch = useDispatch();
    // const spots = useSelector(state => state.spot.spots);
    // const sessionUser = useSelector(state => state.session.user);

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [errors, setErrors] = useState([]);
    const imageUrl = 'https://www.codegrepper.com/code-examples/whatever/how+to+hide+button+in+react'

    const userId = useSelector(state => state.session.user.id);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        console.log({ userId, address, city, state, country, name, price, imageUrl })
        return dispatch(spotActions.addListing({ userId, address, city, state, country, name, price, imageUrl }))
            .catch(async (res) => {
                const data = await res.json();
                console.log(data)
                // if(data && data.errors) setErrors(data.errors);
            });
    }

    return(
        <form className="create-spot-form" onSubmit={handleSubmit}>
            <div className="create-spot-title">
                <label>
                Create a spooky spot
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
            type="text"
            value={price}
            onChange={(e) => setPrice(+e.target.value)}
            required
            placeholder="Price"
            />

            <button className="create-spot-btn" type="submit">Create Spot</button>


            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>

        </form>
    );
}

export default SpotFormPage;

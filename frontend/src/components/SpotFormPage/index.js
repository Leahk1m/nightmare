import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as spotActions from '../../store/spot';
import './SpotForm.css';


function SpotFormPage() {
    const dispatch = useDispatch();

    const history = useHistory();
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [errors, setErrors] = useState([]);
    const [description, setDescription] = useState('');

    const [imageUrl, setImageUrl] = useState('');
    const [imageUrlTwo, setImageUrlTwo] = useState('');
    const [imageUrlThree, setImageUrlThree] = useState('');
    const [imageUrlFour, setImageUrlFour] = useState('');

    const [moreImgs, setMoreImgs] = useState(false);
    const [moreImgsButton, setMoreImgsButton] = useState(true);

    const userId = useSelector(state => state.session.user.id);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        await dispatch(spotActions.addListing({ userId, address, city, state, country, name, price, description, imageUrl, imageUrlTwo, imageUrlThree, imageUrlFour }))
            .then(() => history.push('/spots'))
            .catch(async (res) => {
                const data = await res.json();
                if(data && data.errors) {
                    setErrors(data.errors)
                }
            })
    }

    return(
        <div className="create-form-container">

            <form className="create-spot-form" onSubmit={handleSubmit}>
                <div className="create-spot-title">
                    <label className="create-spot-form-create-listing-title">
                    Create a Haunted Listing
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

                <textarea className="add-spot-form-description-textarea"
                 value={description}
                 onChange={(e) => setDescription(e.target.value)}
                 required
                 placeholder="Description"
                >
                </textarea>

                <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                required
                placeholder="Image url"
                />

                {moreImgsButton ?
                    <button className="create-spot-btn" onClick={() => [setMoreImgs(true), setMoreImgsButton(false)]}>Add more images</button>
                : null
                }

                {moreImgs === true ?
                    <div className="optional-img-container">
                        <input className="update-additional-img"
                        type="text"
                        value={imageUrlTwo}
                        onChange={(e) => setImageUrlTwo(e.target.value)}
                        placeholder="Optional: additional image url"
                        />

                        <input className="update-additional-img"
                        type="text"
                        value={imageUrlThree}
                        onChange={(e) => setImageUrlThree(e.target.value)}
                        placeholder="Optional: additional image url"
                        />

                        <input className="update-additional-img"
                        type="text"
                        value={imageUrlFour}
                        onChange={(e) => setImageUrlFour(e.target.value)}
                        placeholder="Optional: additional image url"
                        />

                    </div>
                : null

                }


                <button className="create-spot-btn" type="submit">Create Spot</button>


                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
            </form>

            <div className="preview-container">
                {
                    imageUrl !== '' ?
                        <img src={imageUrl} alt="preview-pic"/>
                    :
                        <img src="https://t3.ftcdn.net/jpg/03/28/29/20/360_F_328292034_Mdjyonyzxawept8Lel3mBAiHwc0xAjpM.jpg" alt="preview-house"/>

                }

                <div className="preview-name-location-text">
                    {
                        name !== '' ?
                            <h2>{name}</h2>
                        :
                            <h2>Spooky Name</h2>

                    }

                    {
                        city !== '' ?
                            <h4>{city} {state}, {country}</h4>
                        :
                            <h4>Scary City, Haunted State, Terrifying Country</h4>

                    }
                </div>


                {
                    price !== '' ?
                        <div className="price-container">
                            <h3>${price} / night</h3>
                        </div>
                    :
                        <div className="price-container">
                            <h3>$600 / night</h3>
                        </div>
                }

            </div>
        </div>
    );
}

export default SpotFormPage;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import { getSpots } from '../../store/spot.js';
import { Spot } from '../../db/models';



const SpotsPage = () => {
    const dispatch = useDispatch();
    const spot = useSelector(state => state.spot)
    return(
        <div>
            <div>
                <h1>{dispatch(spot)}</h1>
            </div>

        </div>
    );
};

export default SpotsPage;

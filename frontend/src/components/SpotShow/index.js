import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import * as spotActions from '../../store/spot';

function SpotShow() {
    const { spotId } = useParams();
    const dispatch = useDispatch();
    

}

export default SpotShow;

import { Link } from 'react-router-dom';
import './PlzLogIn.css';

function PlzLogIn() {
    return(
        <div className="plz-login-container">
            <Link to="/login">
                <img className="dancing-pumpkin-man-gif" src="https://thumbs.gfycat.com/YoungNeatBarebirdbat-max-1mb.gif" alt="dancing-pumpkin-man"/>
            </Link>
            <h1>You must be logged in to access this feature</h1>
            <h2>Click on my pumpkin head to go to the login page</h2>

        </div>
    );
};

export default PlzLogIn;

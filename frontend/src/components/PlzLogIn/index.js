import { Link } from 'react-router-dom';
import './PlzLogIn.css';

function PlzLogIn() {
    return(
        <div className="plz-login-container">
            <h1 className="pls-login-p">You must be logged in to access this feature</h1>
            <h2 className="pls-login-p">Please <Link className="pls-login-link"to="/login">Log in</Link> or <Link className="pls-login-link" to="/signup">Sign up</Link> to join the fun!</h2>

        </div>
    );
};

export default PlzLogIn;

import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import './MySpots.css';
function MySpots({ spotsData }) {
    const username = useSelector(state => state.session.user.username);
    const userId = useSelector(state => state.session.user.id);
    const myOwnSpots = spotsData.filter((place) => place.userId === userId);
    return(
        <div className="my-spots-page-container">
            <span className="my-spots-pg-title-container">
                <h2 classname="my-spots-pg-title">{username}'s Frightening Locations <img className="my-spots-pg-flying-ghosts" src="https://media1.giphy.com/media/fnfONXQS7MmHi2AcsJ/giphy.gif?cid=6c09b952k8x251k9mstv0csjpdeaf4xg4zm7ekqr7v5qtgpr&rid=giphy.gif&ct=s" alt="my-spots-pic"/></h2>
            </span>

 
            {myOwnSpots.map((spot) => (
                <div key={spot.id}>
                    <h3>{spot.name}</h3>
                    <Link to={`/spots/${spot.id}`}>
                        <img className="my-spots-pg-img" src={spot.imageUrl}/>
                    </Link>

                    <h4>Location: {spot.city} {spot.state} {spot.country}</h4>
                    <h4>${spot.price} / night</h4>

                </div>
            ))}
        </div>
    );
};


export default MySpots;

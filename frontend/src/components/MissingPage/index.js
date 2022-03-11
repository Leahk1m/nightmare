import { Link } from 'react-router-dom';

import './MissingPage.css';

function MissingPage() {
    return(
        <div className="missing-pg-container">
            <div className="missing-pg-ghost-pic-container">
                <img clasName="missing-pg-ghost-pic"src="https://64.media.tumblr.com/a33b276d14f1d311e72c95fc717d4b35/6fc93ef6a1743f34-09/s400x600/bff4b3097e412d3bb45eb604e41ecaedf4bbdfa7.gifv" alt="missing-pg-pic"/>
            </div>

            <div className="missing-ghost-pic-container">
                <Link to="/">
                    <img className="missing-pg-bear-ghost-pic" src="https://c.tenor.com/sReLN5WDshcAAAAM/ghost-peaches.gif" alt="missing-pg-bear"/>
                </Link>
            </div>
            <p>Sorry, we couldn't find that page</p>
            <p className="pat-plz">Pat me on the head and I can take you back to the homepage </p>

        </div>
    );
}

export default MissingPage;

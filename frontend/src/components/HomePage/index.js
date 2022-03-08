import './HomePage.css';
const HomePage = () => {
    return(
        <div className="splash-page-container">
            <div className="black-box-bg">
                <div className="welcome-title-home">
                    <img className="scaryhouse-pic" src="https://news.airbnb.com/wp-content/uploads/sites/4/2019/10/unique_press_1920x1280_A.jpg" alt="home-scary-house"/>
                    <div className="banner-text">
                        <h1 id="spooky-stays-title">
                            Spooky stays you can visit all year-round
                        </h1>
                        <h2 id="haunted-home-title">
                            Want to stay in a haunted home? Now you can. Scroll to explore utterly chilling stays.
                        </h2>
                    </div>
                </div>
            </div>



            <div className="white-box-bg">
                <h2 className="haunting-homes-title">Haunting homes for resting your bones</h2>

            </div>

        </div>
    );
};


export default HomePage;

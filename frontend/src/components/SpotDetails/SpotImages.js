import "./SpotImages.css"

function SpotImages({ spot, user }) {
    const imageOne = spot.imageUrl;
    const imageTwo = spot.imageUrlTwo;
    const imageThree = spot.imageUrlThree;
    const imageFour = spot.imageUrlFour;

    const imageArr = [imageOne, imageTwo, imageThree, imageFour];
    const sideImageArr = [];

    let imageCount = 0;
    for(let i = 0; i < imageArr.length; i++) {
        let img = imageArr[i];
        if(img) {
            imageCount++;
        }
    };
    for(let i = 1; i < imageArr.length; i++) {
        let img = imageArr[i];
        if(img) {
            sideImageArr.push(img)
        }
    };


    return(
        <div className="images-comp-container">
            {imageCount === 1 ?
                <div className="one-images-container">
                    <img onError={(event) => event.target.style.display = 'none'}src={imageOne} className="main-photoshow" alt="show-one-pic"/>
                </div>
            : null

            }

            {imageCount === 2 ?
                <div className="two-images-container">
                    <div className="main-photo-div">
                        <img src={imageOne} className="two-main-photo-show" alt="show-two-pics"/>

                    </div>

                    <div className="two-images-second-container">
                        {
                            sideImageArr.map((sImg, i) => (<img onError={(event) => event.target.style.display = 'none'}key={i} src={sImg} className="small-photo-show-two" onerror="this.style.display='none'"alt="show-two-pics"/>))
                        }
                    </div>
                </div>
            : null

            }

            {imageCount === 3 ?
                <div className="four-images-container">
                    <div className="main-photo-div">
                        <img src={imageOne} className="main-photo-show" alt="show-three-pics"/>
                    </div>

                    <div className="remaining-photos-container">
                        {
                            sideImageArr.map((sImg, i) => (<img onError={(event) => event.target.style.display = 'none'}key={i} src={sImg} className="small-photo-show" alt="show-three-pics"/>))
                        }
                    </div>
                </div>
            : null

            }

            {imageCount === 4 ?
                <div className="four-images-container">
                    <div className="main-photo-div">
                        <img src={imageOne} className="main-photo-show" alt="show-four-pics"/>
                    </div>
                    <div className="remaining-photos-container">
                        {
                            sideImageArr.map((sImg, i) => (<img onError={(event) => event.target.style.display = 'none'} key={i} src={sImg} className="small-photo-show" alt="show-four-pics"/>))
                        }

                    </div>

                </div>
            : null

            }
        </div>
    );

};

export default SpotImages;

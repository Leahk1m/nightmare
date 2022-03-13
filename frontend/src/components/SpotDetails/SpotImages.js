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
                    this is one
                </div>
            : null

            }

            {imageCount === 2 ?
                <div className="four-images-container">
                    this is two
                </div>
            : null

            }

            {imageCount === 3 ?
                <div className="four-images-container">
                    <div className="main-photo-div">
                        <img src={imageOne} className="main-photo-show"/>
                    </div>

                    <div className="remaining-photos-container">
                        {
                            sideImageArr.map((sImg) => (<img src={sImg} className="small-photo-show"/>))
                        }
                    </div>
                </div>
            : null

            }

            {imageCount === 4 ?
                <div className="four-images-container">
                    <div className="main-photo-div">
                        <img src={imageOne} className="main-photo-show"/>
                    </div>
                    <div className="remaining-photos-container">
                        {
                            sideImageArr.map((sImg) => (<img src={sImg} className="small-photo-show"/>))
                        }

                        {/* <img src={imageThree} className="small-photo-show"/>
                        <img src={imageFour} className="small-photo-show"/> */}
                    </div>

                </div>
            : null

            }






        </div>
    );

};

export default SpotImages;

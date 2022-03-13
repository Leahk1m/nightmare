

function SpotImages({ spot, user }) {
    const imageOne = spot.imageUrl;
    const imageTwo = spot.imageUrlTwo;
    const imageThree = spot.imageUrlThree;
    const imageFour = spot.imageUrlFour;

    const imageArr = [imageOne, imageTwo, imageThree, imageFour];

    let imageCount = 0;
    for(let i = 0; i < imageArr.length; i++) {
        let img = imageArr[i];
        if(img) {
            imageCount++;
        }
    };


    return(
        <div className="images-comp-container">
            {imageCount === 1 ?
                <div className="1images-container">
                    this is one
                </div>
            : null

            }

            {imageCount === 2 ?
                <div className="2images-container">
                    this is two
                </div>
            : null

            }

            {imageCount === 3 ?
                <div>
                    this is three

                </div>
            : null

            }

            {imageCount === 4 ?
                <div className="4images-container">
                    <div className="main-photo-show">
                        <img src={imageOne} />
                    </div>
                    <div className="remaining-photos-container">
                        <img src={imageTwo} />
                        <img src={imageThree} />
                        <img src={imageFour} />
                    </div>

                </div>
            : null

            }






        </div>
    );

};

export default SpotImages;

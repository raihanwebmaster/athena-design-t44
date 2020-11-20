import React from 'react';
import img16 from '../../Illustration/16 [Converted]@2x.png';


const Florence = () => {
    return (
        <div className="pt-3 pl-5 pr-5 pb-5 bg">
                <div className="row  d-flex align-items-center pr-5 pl-5 ">
                    <div className="col-md-6 ">
                        <h1 style={{ fontFamily: 'Yeseva One' }} className="florence">Florence
                    <span> agency</span>
                        </h1>
                        <p className="lorem20 pt-3">Lorem Ipsum has been the industry's standard dummy text even
                    <span> since the 1500s, when an unknown printer took a gallery of type</span>
                            <span> and scrambled it to make a type spencimen book.</span></p>
                        <div className="pt-3">
                            <button className="button-us button-see" href="">See Pricing</button>
                        </div>
                    </div>
                    <div className="col-md-6 img16">
                        <img style={{ width: "100%" }} src={img16} alt="" />
                    </div>
                </div>
        </div>
    );
};

export default Florence;
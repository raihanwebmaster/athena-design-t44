import React from 'react';
import experience from '../../Illustration/Group 65@2x.png';
import Interface from '../../Illustration/Group 66@2x.png';
import Prototyping from '../../Illustration/Group 69@2x.png';
import illustration from '../../Illustration/Group 72@2x.png';

const Whatwe = () => {
    return (
        <div style={{backgroundColor: '#FAFFFD'}} className="pt-5 pb-5 ">
            <div className="pt-5" style={{textAlign: 'center'}}>
                <h1 className="what">What we do</h1>
                <p className="what-focus">Our main focus is to make the User Experience very <span> simple and easy.Simplicity is our Strength.</span></p>
            </div>
            <div className="pl-5 pr-5 pt-2">
            <div className=" row pt-5">
                <div className="col-md-3 text-center hover  p-5">
                    <img  src={experience} alt=""/>
                    <div className="pt-3">
                    <h4>Experience Design</h4>
                    <p className="desing">The point of using Lorem <span>ispum is that it has a more-or-</span> <span>less normal</span></p>
                    </div>
                </div>
                <div className="col-md-3 text-center hover  p-5">
                    <img  src={Interface} alt=""/>
                    <div className="pt-3">
                    <h4>Interface Desing</h4>
                    <p className="desing">The point of using Lorem <span>ispum is that it has a more-or-</span> <span>less normal</span></p>
                    </div>
                </div>
                <div className="col-md-3 text-center hover p-5">
                    <img  src={Prototyping} alt=""/>
                    <div className="pt-3" >
                    <h4>Prototyping</h4>
                    <p className="desing">The point of using Lorem <span>ispum is that it has a more-or-</span> <span>less normal</span></p>
                    </div>
                </div>
                <div className="col-md-3 text-center hover  p-5">
                    <img  src={illustration} alt=""/>
                    <div  className="pt-3">
                    <h4>Illustration</h4>
                    <p className="desing">The point of using Lorem <span>ispum is that it has a more-or-</span> <span>less normal</span></p>
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default Whatwe;
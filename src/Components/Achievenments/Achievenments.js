import React from 'react';
import happy from '../../Illustration/happy@2x.png';
import marketing from '../../Illustration/marketing@2x.png';
import surface from '../../Illustration/surface1@2x.png';
import transport from '../../Illustration/transportation@2x.png';
const Achievenments = () => {
    return (
        <div style={{backgroundColor: '#FAFFFD'}}  className="pt-3 pl-5 pr-5 pb-5">
            <div className="row pl-5 pt-5 d-flex align-items-center">
                <div className="col-md-5 ">
                <h1 className="achievenments pt-2">Our Achievenments</h1>
                    <p className="lorem20 pt-3">It is a long established fact that a reader will be distracted by 
                    <span> the readable content of a lpaage when looking at its layout. The</span>
                    <span> point of using Lorem ipsum is thaat it has more-or-less normal</span>
                    <span> distribution of letter.</span>
                    </p>
                </div>
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-md-6 card-it text-center">
                            <div className="achivenments-card row d-flex align-items-center">
                                <div>
                                    <img className="happy" src={happy} alt=""/>
                                </div>
                                <div className="pl-5">
                                   <h1 style={{fontWeight:"bold"}}>700+</h1>
                                   <p>Happy Clients</p> 
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 text-center card-it">
                            <div className="achivenments-card-2 row d-flex align-items-center">
                                <div>
                                    <img className="happy" src={marketing} alt=""/>
                                </div>
                                <div className="pl-5">
                                   <h1 style={{fontWeight:"bold"}}>140+</h1>
                                   <p>Project Completed</p> 
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 text-center card-it-2 ">
                            <div className="achivenments-card row d-flex align-items-center">
                                <div>
                                    <img className="happy" src={surface} alt=""/>
                                </div>
                                <div className="pl-5">
                                   <h1 style={{fontWeight:"bold"}}>35+</h1>
                                   <p>Crazy Minds</p> 
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 text-center card-it-2">
                            <div className="achivenments-card-2 row d-flex align-items-center">
                                <div>
                                    <img className="happy" src={transport} alt=""/>
                                </div>
                                <div className="pl-5">
                                   <h1 style={{fontWeight:"bold"}}>75+</h1>
                                   <p>Running Projects</p> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievenments;
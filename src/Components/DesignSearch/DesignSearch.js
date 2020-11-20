import React from 'react';
import './DesignSearch.css';
const DesignSearch = () => {
    return (
        <div className="pt-5 ami">
            <div style={{textAlign: 'center'}}>
            <h1 className="get" style={{ fontFamily: 'Yeseva One' }}>Get Your design  <span>right, right now</span></h1>
            <p className="pt-2 latest" style={{color:"gray", fontSize:"22px"}}> Be the first know our latest <span>offers and update!</span></p>
            </div>
            {/* <div className="container ">
                <div className="search_wrap search_wrap_1">
                    <div className="search_box">
                        <div>
                            <button className="btn">Get Started</button>
                        </div>
                        <input type="text" className="input" name="" id="" placeholder="Enter your email address"/>
                    </div>
                </div>

            </div> */}
           <div className="col-lg-6 col-md-8 col-sm-10 col-11 p-2 mx-auto">
                <form action="" className="position-relative">
                    <input className="tex-bar" type="text" placeholder="Enter your email address" />
                    <button className="start-btn">Get started</button>
                </form>
            </div>
        </div>
    );
};

export default DesignSearch;
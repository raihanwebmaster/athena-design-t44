import React from 'react';
import facebook from '../../Illustration/facebook-logo-in-circular-shape@2x.png'
import twitter from '../../Illustration/twitter (4)@2x.png'
import linkedIn from '../../Illustration/linkedin (2)@2x.png'
import dribbble from '../../Illustration/dribbble (1)@2x.png'
import footerLogo from '../../Illustration/Group 86.png'




const Footer = () => {
    return (
        <div className="footer container mt-lg-5 mt-0 py-5"  id="footer">
            <div className="row bd-highlight">
            <div className="col-md-5">
                <div className="d-flex bd-highlight d-flex justify-content-center Milions mb-4">
                    <img alt="img" className="foterLogo" src={footerLogo}></img>
                </div>
                <div className="footer-list-icon d-flex justify-content-center">
                    <li><img src={facebook} alt="img" className="icon facebook_Icon" /></li>
                    <li><img src={twitter} alt="img" className="icon facebook_Icon" /></li>
                    <li><img src={linkedIn} alt="img" className="icon facebook_Icon" /></li>
                    <li><img src={dribbble} alt="img" className="icon facebook_Icon" /></li>
                    <li><img src={dribbble} alt="img" className="icon facebook_Icon" /></li>
                </div>
            </div>
            <div className="col-md-7 bd-highlight meno-link p-5">
                <div className="row text-center">
                    <div className="col-lg-3 col-md-6 mb-3">
                        <a className="" href="/">Features</a><br />
                        <a className="" href="/">Enterprise</a><br />
                        <a className="" href="/">Pricing</a><br />
                    </div>
                    <div className="col-lg-3 col-md-6 mb-3">
                        <a className="" href="/">Blog</a><br />
                        <a className="" href="/">Help Center</a><br />
                        <a className="" href="/">Contact Us</a><br />
                        <a className="" href="/">Status</a><br />
                    </div>
                    <div className="col-lg-3 col-md-6 mb-3">
                        <a className="" href="/">About Us</a><br />
                        <a className="" href="/">Terms of Service</a><br />
                        <a className="" href="/">Security</a><br />
                        <a className="" href="/">Login</a><br />
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;
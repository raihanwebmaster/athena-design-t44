import React from 'react';
import facebook from '../../Illustration/facebook-logo-in-circular-shape@2x.png'
import twitter from '../../Illustration/twitter (4)@2x.png'
import linkedIn from '../../Illustration/linkedin (2)@2x.png'
import dribbble from '../../Illustration/dribbble (1)@2x.png'
import footerLogo from '../../Illustration/Group 86.png'




const Footer = () => {
    return (
        <div className="footer container mt-lg-5 mt-0 py-5">
            <div className="row">
                <div className="col-md-4 mt-3">
                    <img className="footer-logo" style={{ width: '170px'}} src={footerLogo} alt="" />
                    <div className="social-links mt-4">
                        <a href="#" className="mr-4">
                            <img src={facebook} alt="" />
                        </a>
                        <a href="#" className="mr-4"> 
                            <img src={twitter} alt="" />
                        </a>
                        <a href="#" className="mr-4">
                            <img src={linkedIn} alt="" />
                        </a>
                        <a href="#">
                            <img src={dribbble} alt="" />
                        </a>
                    </div>
                </div>
                <div className="col-md-3 mt-3 p-5">
                    <ul className="list-unstyled">
                        <li>
                            <a href="#">Features</a>
                        </li>
                        <li>
                            <a href="#">Enterprise</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 mt-3 p-5">
                    <ul className="list-unstyled">
                        <li>
                            <a href="#" className="pb-5">Blog</a>
                        </li>
                        <li>
                            <a href="#" className="pb-5" >Help Center</a>
                        </li>
                        <li>
                            <a href="#"  className="pb-5">Contact Us</a>
                        </li>
                        <li>
                            <a href="#"  className="pb-2">Status</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2 mt-3 p-5">
                    <ul className="list-unstyled">
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Terms of Service</a>
                        </li>
                        <li>
                            <a href="#">Security</a>
                        </li>
                        <li>
                            <a href="#">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
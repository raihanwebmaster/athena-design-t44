import React from 'react';
import logo from '../../Illustration/Group 86.png';
import logo1 from '../../Illustration/16 [Converted]@2x.png';

const Navbar = () => {
  return (
    <div className="pt-3 pl-5 pr-5 pb-5 bg1">
      <div className="pr-5 pl-5">
      <nav class="navbar navbar-expand-lg  navbar-light bg-transparent mt-3">
        <a class="navbar-brand" href="#"> <img className="logo" src={logo} alt="" /> </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-lg-auto">
            <li class="nav-item active mr-4">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item mr-4">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item mr-4">
              <a class="nav-link" href="#">Service</a>
            </li>
            <li class="nav-item mr-4">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item mr-4">
              <a class="nav-link" href="#">Our Team</a>
            </li>
            <li class="nav-item mr-4">
              <a class="nav-link button-us" href="#">Contact us</a>
            </li>

          </ul>

        </div>
      </nav>
      </div>
    </div>
  );
};

export default Navbar;
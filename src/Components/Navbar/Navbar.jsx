import React, { Component } from "react";

// import react-router-dom
import { Link } from "react-router-dom";

// import assets
import Logo from "../../assets/img/svg/logo-no-background.png"
import { FaAlignRight } from "react-icons/fa";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header" >
            {/* app logo */}
            <Link to="/">
              <img src={Logo} alt="The Premium  Resort" style={{width:"285px",height:"65px",marginLeft: "-564px"}}/>
            </Link>

            {/* navbar toggle button */}
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          {/* navbar link */}
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"} style={{marginTop:"20px",marginLeft:"-290px"}}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
            <li>
              <Link to="/Facilities">Facilities</Link>
            </li>
            {/* <i class="fa-solid fa-phone"style={{marginInlineEnd:"7px"}}>Contact</i> */}
          </ul>
          
        </div>
      </nav>
    );
  }
}

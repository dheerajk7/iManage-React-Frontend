import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIconClicked: false,
    };
  }

  // fetching cart item to get the count of the item present in cart to show on cart icon
  componentDidMount() {}

  // handle menu icon click for small size display
  handleMenuIconClick = () => {
    this.setState({ menuIconClicked: !this.state.menuIconClicked });
  };

  // handling navbar items button click
  // on small screen when we click a button then menu list should be hidden
  handleButtonClick = () => {
    this.setState({ menuIconClicked: false });
  };
  render() {
    return (
      <nav className="navbar-container unselectable">
        <div className="navbar-logo">
          <Link to="/" onClick={this.handleButtonClick}>
            iManage
          </Link>
        </div>
        <div className="menu-icon" onClick={this.handleMenuIconClick}>
          <i
            className={
              this.state.menuIconClicked ? "fa fa-times" : "fa fa-bars"
            }
            aria-hidden="true"
          ></i>
        </div>
        <ul
          className={
            this.state.menuIconClicked ? "navbar-menu active" : "navbar-menu"
          }
        >
          <li>
            <Link
              className="navbar-links"
              to="/student"
              onClick={this.handleButtonClick}
            >
              Students
            </Link>
          </li>
          <li>
            <Link
              className="navbar-links"
              to="/add-product"
              onClick={this.handleButtonClick}
            >
              Company
            </Link>
          </li>
          <li>
            <Link
              className="navbar-links"
              to="/add-product"
              onClick={this.handleButtonClick}
            >
              Interview
            </Link>
          </li>
          <li>
            <Link
              className="navbar-links"
              to="/add-product"
              onClick={this.handleButtonClick}
            >
              Sign In
            </Link>
          </li>
          <li>
            <Link
              className="navbar-links"
              to="/add-product"
              onClick={this.handleButtonClick}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;

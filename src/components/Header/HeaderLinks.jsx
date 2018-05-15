import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  MenuItem,
  FormGroup,
  FormControl,
  InputGroup
} from "react-bootstrap";

class HeaderLinks extends Component {
  render() {
    return (
      <div>
        <Navbar.Form pullLeft className="navbar-search-form">
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>
                <i className="fa fa-search" />
              </InputGroup.Addon>
              <FormControl type="text" placeholder="Search..." />
            </InputGroup>
          </FormGroup>
        </Navbar.Form>

        <Nav pullRight>
          

          
          <NavDropdown
            eventKey={3}
            title={
              <div>
                <i className="fa fa-bell-o" />
                <span className="notification">2</span>
                <p className="hidden-md hidden-lg">
                  Notifications
                  <b className="caret" />
                </p>
              </div>
            }
            noCaret
            id="basic-nav-dropdown-2"
          >
            <MenuItem eventKey={3.1}>Notification 1</MenuItem>
            <MenuItem eventKey={3.2}>Notification 2</MenuItem>
          </NavDropdown>
          <NavDropdown
            eventKey={4}
            title={
              <div>
                <i className="fa fa-list" />
                <p className="hidden-md hidden-lg">
                  More
                  <b className="caret" />
                </p>
              </div>
            }
            noCaret
            id="basic-nav-dropdown-3"
            bsClass="dropdown-with-icons dropdown"
          >
            
            <MenuItem eventKey={4.2}>
              <i className="pe-7s-help1" /> Help Center
            </MenuItem>
            <MenuItem eventKey={4.3}>
              <i className="pe-7s-tools" /> Settings
            </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={4.4}>
              <i className="pe-7s-lock" /> Lock Screen
            </MenuItem>
            <MenuItem eventKey={4.5}>
              <div className="text-danger">
                <i className="pe-7s-close-circle" /> Log out
              </div>
            </MenuItem>
          </NavDropdown>
        </Nav>
      </div>
    );
  }
}
export default HeaderLinks;

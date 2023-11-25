import { useState } from "react";
import React from "react";

import "../Components/Home.css";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBBadge,
  MDBCol,
} from "mdb-react-ui-kit";

import { BsFillCartFill } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { mycontext } from "./Context";
import { useContext } from "react";
const Navigation = () => {
  const [showBasic, setShowBasic] = useState(true);
  const {
    products,
    login,
    setLogin,
    username,
    setLogout,
    cart,
    setCart,
    searchquery,
    setSearchquery,
    searchresults,
    setSearchresults,
    setUsername,
    token,
  } = useContext(mycontext);

  const navigate = useNavigate();
  const towomen = () => {
    navigate("/Women");
  };
  const tohome = () => {
    navigate("/");
  };
  const tomen = () => {
    navigate("/Men");
  };
  const tocart = () => {
    navigate("/Cart");
  };
  const tologin = () => {
    navigate("/Login");
  };
  const toourstory = () => {
    navigate("/Ourstory");
  };
  const tocollection = () => {
    navigate("/Collection");
  };
  const tocontact = () => {
    navigate("/Contact");
  };
  const toregistration = () => {
    navigate("/Registration");
  };

  const tolookbook = () => {
    navigate("/Lookbook");
  };

  const logout = () => {
    setLogin(false);
    alert("logout");
    setUsername("");
    setCart([]);
    localStorage.clear();
  };
  console.log("login", login);

  return (
    <>
      <div className="head1">
        <p className="para1">
          <marquee direction="left" behavior="scroll" scrollamount="6">
            Free Express Shipping on all orders with all duties included
          </marquee>
        </p>
      </div>
      <MDBNavbar
        className="navclass"
        expand="lg"
        // light
        bgColor=""
        sticky="top"
        color="white"
      >
        <MDBContainer fluid>
          <MDBNavbarBrand className="plashoe" onClick={tohome}>
            PLASHOE
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle
                    tag="a"
                    className="nav-link"
                    role="button"
                    onClick={tomen}
                  >
                    MEN
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Sneakers</MDBDropdownItem>
                    <MDBDropdownItem link>Loafer</MDBDropdownItem>
                    <MDBDropdownItem link>
                      Something else here
                    </MDBDropdownItem>{" "}
                  </MDBDropdownMenu>{" "}
                </MDBDropdown>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle
                    tag="a"
                    className="nav-link"
                    role="button"
                    onClick={towomen}
                  >
                    WOMEN
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>High heel</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  aria-current="page"
                  onClick={tocollection}
                >
                  COLLECTION
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" onClick={tocontact}>
                  CONTACT
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink onClick={tolookbook}>LOOKBOOK</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink onClick={tocart}>
                  <BsFillCartFill />{" "}
                  <>
                    <a className="mx-3">
                      <MDBIcon fas icon="shoppingcart" size="sm" />
                      <MDBBadge color="danger" notification pill>
                        {cart.length}
                      </MDBBadge>
                    </a>
                  </>
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    <BsPersonFill />
                  </MDBDropdownToggle>
                  {login === false ? (
                    <MDBDropdownMenu>
                      <MDBDropdownItem link onClick={toregistration}>
                        login
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  ) : (
                    <MDBDropdownMenu>
                      <MDBDropdownItem link>{username}</MDBDropdownItem>
                      <MDBDropdownItem onClick={() => navigate("/Order")}>
                        &nbsp;&nbsp; Order
                      </MDBDropdownItem>

                      <MDBDropdownItem onClick={() => navigate("/Wishlis")}>
                        &nbsp;&nbsp; Wishlist
                      </MDBDropdownItem>

                      <MDBDropdownItem link onClick={logout}>
                        logout
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  )}
                </MDBDropdown>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Navigation;

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


import { useNavigate } from "react-router-dom";
import { mycontext } from "./Context";
import { useContext } from "react";
const Search = () => {
  const [showBasic, setShowBasic] = useState(true);
  const {
    products,
    login,
    setLogin,
    username,
    setLogout,
    cart,
    setSearchquery,
    searchquery,
    setUsername
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

  const logout = () => {
    setLogout(false);
    alert("logout");
    setUsername('');
  };
  
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchquery.toLowerCase())
  );
  const idpass=(e)=>{
    const id=e.target.id
    navigate(`/showproduct/${id}`)
    setSearchquery(" ")
     }

  return (
    <>
     
    
     <div className="searchbar">
        <MDBCol md="6">
          <div className="active-pink-3 active-pink-4 mb-4">
            <input
              className="form-control"
              type="text"
              placeholder="Search Your favorite Shoes"
              aria-label="Search"
              onChange={(event) => {
                setSearchquery(event.target.value);
              }}
            />
          </div>
        </MDBCol>
      </div>
      <div >
        {searchquery.trim() !== "" &&
          filteredProducts.map((product) => (
            <div key={product.id}>
              <ul className="listitem">
                <li className="listitem" id={product.id}
                onClick={idpass}>{product.name}</li>
               
              </ul>
              
            </div>
          ))
          }
      </div>
    </>
  );
};

export default Search;

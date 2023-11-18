import React from 'react'
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
import Search from '../Components/Search';
function Dashboard() {
  return (
    <div>
    <h2 className='dashboard'>ADMIN DASHBOARD</h2>
    <div className="searchbar1">
       <MDBCol md="6">
         <div className="active-pink-3 active-pink-4 mb-4">
           <input
             className="form-control"
             type="text"
             placeholder="Search Products"
             aria-label="Search"
            
           />
           
         </div>
       </MDBCol>
     </div></div>
  )
}

export default Dashboard
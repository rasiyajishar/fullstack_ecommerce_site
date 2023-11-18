import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import Dashboard from "../Admin/Dashboard";
import Productupdate from "../Admin/Productupdate";
import User from "../Admin/User";
import Addproduct from "./Addproduct";
import Admin_men from "./Admin_men";
import Admin_women from "./Admin_women";
import Editproduct from "./Editproduct";
const Admin_home = () => {
  const nav = useNavigate();
  const location = useLocation();
  const isdash = location.pathname.endsWith("/Admin");
  const isproduct = location.pathname.endsWith("/Admin/Productupate");
  const isuser = location.pathname.endsWith("/Admin/User");
  const isaddproduct = location.pathname.endsWith("/Admin/Addproduct");
  const isadminmen=location.pathname.endsWith("Admin/Admin_men");
  const isadminwomen=location.pathname.endsWith("Admin_women");
  const iseditproduct=location.pathname.endsWith("Admin/Editproduct");
  const iseditdetails=location.pathname.startsWith("/Editproduct/");
  const topro = () => {
    nav("/Admin/Productupate");
  };
  const touser = () => {
    nav("/Admin/User");
  };

  const tohome = () => {
    nav("/Admin");
  };

  const toaddprod = () => {
    nav("/Admin/Addproduct");
  };
  const toadmin_men = () => {
    nav("/Admin/Admin_men");
  };

const toadmin_women=()=>{
  nav("/Admin/Admin_women")
};

const tohomepg=()=>{
  nav("/")
}


  return (
    <div>
      <div class="sidebar">
        <a class="btn btn-primary" onClick={tohome}>
          Dashboard
        </a>

        <a onClick={topro}>Products</a>

        <a onClick={touser}>Customers</a>

        <a></a>
        <a onClick={toaddprod}>Addproduct</a>
       
        <MDBDropdown>
          <MDBDropdownToggle tag="a">Category</MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem onClick={toadmin_men}>Men</MDBDropdownItem>
            <MDBDropdownItem onClick={toadmin_women}>Women</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>

       <button className="btnform1" onClick={tohomepg}>Home</button>
      </div>

      <>
        {isdash && <Dashboard />}
        {isproduct && <Productupdate />}
        {isuser && <User />}

        {isaddproduct && <Addproduct />}
        {isadminmen && <Admin_men />}
        {isadminwomen && <Admin_women />}
        {iseditproduct && <Editproduct />}
        {iseditdetails && <Editproduct />}
      </>
    </div>
  );
};

export default Admin_home;

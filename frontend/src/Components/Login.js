import React, { useContext } from "react";
import { useRef } from "react";

import {Link, useNavigate} from "react-router-dom";
import { mycontext } from "./Context";
import { Axios } from '../App';

const Login = () => {
  const{signup,login,setLogin,username,setUsername}=useContext(mycontext)
 
  const nav=useNavigate()
 
 
  const emailref=useRef()
  const passwordref=useRef()
 
 
  const handleSubmit=async (e)=>{
  
    e.preventDefault()
    const email = emailref.current.value
    const password = passwordref.current.value
    const logindata = {email,password}
    const adminmail = process.env.REACT_APP_ADMIN_EMAIL;

if(email === ""  || password === ""){
  alert("enter all inputs")
}


const endpoint = email === adminmail ? "/admin/login" : "/user/login";

try {
  
  const response= await Axios.post(endpoint,logindata)
  console.log(response)
  setLogin(true);
  localStorage.setItem("userID", response.data.userID)
  localStorage.setItem("jwt_token", response.data.jwt_token)
  console.log(response.data.jwt_token)
  alert(response.data.message)
  nav( email === adminmail ? "/Admin" : "/")
 
} catch (error) {
  console.log(error)
}




  }
 
 
  return (

   
    <div className="formlogi">
      
      
<div className="formlogi2">
  PLEASE LOGIN FIRST
        <form className="formlogi1">
          Username or Email Address
          <br />
          <input 
          type="email" 
          placeholder="sample@gmail.com" 
          // value={"jiji@gmail.com"}
          ref={emailref}
          />
          <br />
          <br />
          Password
          <br />
          <input type="password" placeholder="password" ref={passwordref}
          //  value={"123456"}
         
          />
          <br />
          <br />
          <input type="checkbox" /> &nbsp;<label for="vehicle2"> Remember me</label>
          <br />
          <br />
          <button className="btnform1" type="submit" onClick={handleSubmit}>
            Log In
          </button>
          <br /> <br />
        </form>
      </div>
      <br /> <br />
       {/* <Link to="/Reset">
      <p className="forgotpasswd">forgot your password?</p></Link> */}
      <Link to="/Registration">
      <p className="forgotpasswd">New User? Register please</p></Link> 

      <br />
     
    </div>
  );
};

export default Login; 




        
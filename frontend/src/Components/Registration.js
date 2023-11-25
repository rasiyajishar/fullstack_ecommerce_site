import React, { useRef } from "react";
import "./Home.css"; // Import your CSS file for styling
import { useNavigate } from "react-router-dom";
// import { useContext } from 'react';
// import { mycontext } from './Context';
import { Axios } from "../App";
const Registration = () => {
  // const { signup,setSignup} = useContext(mycontext)

  const nameref = useRef();
  const emailref = useRef();
  const passwordref = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = nameref.current.value;
    const email = emailref.current.value;
    const password = passwordref.current.value;

    try {
      const userdetails = { name, email, password };
      const response = await Axios.post("/user/register", userdetails);
      alert(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }

    // setSignup([...signup,{name:nameValue, email:emailValue, password:passwordValue,id:signup.length}])
    // console.log(signup);
    // nav("/Login")
  };

  const nav = useNavigate();
  return (
    <div>
      <div className="formlogin2">
        <form className="formlogin1">
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            id="name"
            placeholder="enter your name"
            ref={nameref}
            required
          />
          <br />
          <br />
          <label htmlFor="name">email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            ref={emailref}
            required
          />
          <br />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" id="password" ref={passwordref} />
          <br />
          <br />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <br />
          <input type="password" id="confirmPassword" />
          <br />
          <br />
          <button onClick={handleSubmit} className="btnform1" type="submit">
            Submit
          </button>
          <br />
          <br />
          <p>
            {" "}
            <h5>Are you a Registered user,</h5>
            <h5>please login</h5>{" "}
          </p>
          <button
            onClick={() => nav("/Login")}
            className="btnform1"
            type="submit"
          >
            Login
          </button>
          <br /> <br />
        </form>
      </div>
    </div>
  );
};

export default Registration;

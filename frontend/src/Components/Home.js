// import { useState } from "react";
import React from "react";
import  Search  from "./Search";
import "../Components/Home.css";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { mycontext } from "../Components/Context";
import { useContext } from "react";

const Home = () => {
  // const [showBasic, setShowBasic] = useState(true);
const {token,setLogin}=useContext(mycontext)

const navigat=useNavigate();
  const tomen=()=>{
    navigat('/Men')


  }

  token ? setLogin(true) : setLogin(false)

const towomen=()=>{
  navigat('Women')
}
// const tocollection=()=>{
//   navigat('Collection')
// }

  return (
    <>
  <div className="background">
      <Navigation />
      <Search />
<div className="homepgdiv"></div>
      <diV className="bgimg">
        <div className="leftdiv">

          <h1 className="quote">
            Love The Planet
          
            <br />
            We Walk On<br />
            
            {/* <p className="para1">dshhfjeueuerdfiwdwwid udyeruru ydyuy3u8 uhtwee<br/>hbduih ghftywuq gfywyguyy tttqwyt<br />ttttttttttwswgu ghfswytty hgfdedten </p> <br /> */}<br />
           <div className="btn-hom-shop"> <button onClick={tomen} className="shopmen"><h5 className="btnshopmen">SHOP MEN</h5></button><button onClick={towomen}className="shopwomen"><h5 className="btnshopmen">SHOP WOMEN</h5></button></div>
          </h1>
          
         

        </div>
        

        
      </diV>
      <Footer />
      </div>
    </>
  );
};

export default Home;

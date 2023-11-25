
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './Components/Home';
import Contact from './Components/Contact';
import Men from './Components/Men';
import Women from './Components/Women';
import Ourstory from './Components/Ourstory'
import Login from './Components/Login';
import Cart from './Components/Cart';
import Collection from './Components/Collection';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './Components/Registration';


import { mycontext } from './Components/Context';
import Showproduct from './Components/Showproduct';
import { useEffect, useState } from 'react';
import Admin_home from './Admin/Admin_home';
import {value} from "./Admin/Userdata";
import Lookbook from './Components/Lookbook';
import axios from "axios";
import Order from './Components/Order';
import Paymentsuccess from './Components/Paymentsuccess';
import Userdetails from './Admin/Userdetails';
import Wishlist from './Components/Wishlist';



export const Axios= axios.create({
  baseURL : process.env.REACT_APP_BASE_URL,
  headers : {
"Content-Type":"application/json",
// Authorization:
  }
})




function App() {
const [qty,setQty]=useState(1)
const [cart,setCart]=useState([]);

const[signup,setSignup]=useState([])
// const[login,setLogin]=useState(false)
const[login,setLogin]=useState(false)
const[username,setUsername]=useState()
const[logout,setLogout]=useState()
const[searchquery,setSearchquery]=useState('')
const[searchresults,setSearchresults]=useState([])
const[products,setProducts]=useState([])
const[wishlist,setWishlist]=useState([])
const userID = localStorage.getItem("userID")
const token = localStorage.getItem("jwt_token")


useEffect(() => {
  const fetchData = async ()=>{
    try{
     

      const response = await Axios.get("/user/products");
      setProducts(response.data.data)
    }
    catch(error){
      console.log(error)
    }
  }
  fetchData();
},[token])


 // Function to format a price (₹1,000, ₹10,000)
 const handlePrice = (price) => `₹${Number(price).toLocaleString("en-IN")}`;



  return (
    
    <div className="App">



<mycontext.Provider
        value={{
          products,
          qty,
          setQty,
          cart,
          setCart,
          signup,
          setSignup,
          login,
          setLogin,
          username,
          setUsername,
          wishlist,
          setWishlist,
          logout,
          setLogout,
          searchquery,
          setSearchquery,
          searchresults,
          setSearchresults,
          value,
          userID,
          setProducts,
          handlePrice,
          token
        }}
      >

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Men" element={<Men />} />
  <Route path="/Women" element={<Women />} />
  <Route path="/Login" element={<Login />} />
  <Route path="/Ourstory" element={<Ourstory />} />
  <Route path="/Contact" element={<Contact />} />
<Route path="/Cart" element={<Cart />} />
<Route path="/Collection" element={<Collection />} />
<Route path='/Wishlist' element={<Wishlist />} />
<Route path="/Registration" element={<Registration />} />
<Route path='/Lookbook' element={<Lookbook />} />
<Route path="/Showproduct/:id" element={<Showproduct />} />
<Route path='Paymentsuccess' element={<Paymentsuccess />} />
<Route path="/Order" element={<Order />} />
<Route path='/Admin' element={<Admin_home />} />
<Route path='/Admin/Productupate' element={<Admin_home />} />
<Route path='/Admin/User' element={<Admin_home />} />

<Route path='/Admin/Userdetail/:id' element={<Admin_home/>} />
<Route path='/Admin/productdetail/:id' element={<Admin_home/>} />

<Route path='/Admin/Addproduct' element={<Admin_home />} />
<Route path='Admin/products/:category' element={<Admin_home />} />
<Route path='/Admin/Editproduct' element={<Admin_home />} />
<Route path='/Editproduct/:id' element={<Admin_home />} />
</Routes>
</mycontext.Provider>
    </div>
    
  );
}

export default App;

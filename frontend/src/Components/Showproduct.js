import React, { useState, useEffect, useContext } from 'react'
import { Axios } from '../App'
import {  useParams,useNavigate } from 'react-router-dom'
import { mycontext } from './Context'

import { Card } from 'react-bootstrap'

const Showproduct = () => {
  const { userID, wishlist,setWishlist,cart, setCart,login } = useContext(mycontext)
  const {id}=useParams()
  const [item,setItem] = useState([]);


useEffect(() => {
  const fetchData = async () =>{
    try{
      const response = await Axios.get(`/user/products/${id}`);
      setItem(response.data);
    }
    catch(error){
      console.log(error)
    }
  }
  fetchData();
},[id]);
  
const nav = useNavigate();
const nav1 = useNavigate();



const passid = async (e) => {
  const id = e.target.id;
  if(login){
      await Axios.post(`/user/products/cart/${userID}`,{productId: id});
      const response = await Axios.get(`/user/cart/${userID}`);
      console.log(response)
      setCart(response.data.cart)
  
  }else{
     
        console.log("error")
        // alert(error.response.message)
        alert("please login first")
      }
    } 
    


    const passid1 = async (e) => {
      const id = e.target.id;
      if(login){
          await Axios.post(`/user/products/wishlist/${userID}`,{productId: id});
          const response = await Axios.get(`/user/wishlist/${userID}`);
          console.log(response)
          setWishlist(response.data.wishlist)
      
      }else{
         
            console.log("error")
            // alert(error.response.message)
            alert("please login first")
          }
        } 
  
  // console.log(cart)








  

  return (

<div className='show_product'>

    <div className="card-container">
      <div key={item.id} className='div-m-2'>
        <Card>
          <div className="d-flex">
            <div style={{ width: "60vh" }}>
              <Card.Img src={item.image} className="card-image1" alt={item.title} />
            </div>
            <div className="w-50 p-3" style={{ textAlign: "left" }}>
              <Card.Title>
                <h2>{item.title}</h2>
              </Card.Title>
              <Card.Body>
                <Card.Text>
                  <h4>{item.category}</h4>
                </Card.Text>
                <Card.Text>
                  <p>{item.description}</p>
                </Card.Text>
                <Card.Text>
                  <h3>MRP: {item.price}</h3>
                </Card.Text>
                <div>
                  <br />
                  { cart && cart.some((value) => value.product._id === id) ? (
                    <button onClick={() => nav("/Cart")}>view Cart  </button>
                  ) : (
                    <button id={item._id} onClick={passid}>Add to Cart</button>
                  )
                  }
                  {/* <button onClick={tocart}>View Cart</button> */}

                  <div>
                  <br />


                  { wishlist && wishlist.some((value) => value._id === id) ? (
                    <button onClick={() => nav1("/Wishlist")}>view wishlist  </button>
                  ) : (
                    <button id={item._id} onClick={passid1}>Add to wishlist</button>
                  )
                  }
                  {/* <button onClick={tocart}>View Cart</button> */}
                </div>
                </div>
              </Card.Body>
            </div>
          </div>
        </Card>
      </div>
  </div>
  </div>






  )
}

export default Showproduct
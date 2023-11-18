import React, { useState, useEffect, useContext } from 'react'
import { Axios } from '../App'
import {  useParams,useNavigate } from 'react-router-dom'
import { mycontext } from './Context'

import { Card } from 'react-bootstrap'

const Showproduct = () => {
  const { userID, cart, setCart } = useContext(mycontext)

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



const passid = async (e) => {
  const id = e.target.id;
  try {
    
    await Axios.post(`/user/products/cart/${userID}`,{productId: id});
    const response = await Axios.get(`/user/cart/${userID}`);
    setCart(response.data.cart)

  } catch (error) {
    console.log(error)
    alert(error.response.message)
    console.log(cart)
  }
  }

  console.log(cart)


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
                  {cart.some((value) => value.product._id === id) ? (
                    <button onClick={() => nav("/Cart")}>Go to Cart  </button>
                  ) : (
                    <button id={item._id} onClick={passid}>Add to Cart</button>
                  )
                  }
                  {/* <button onClick={tocart}>View Cart</button> */}
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
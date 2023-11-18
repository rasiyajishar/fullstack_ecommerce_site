import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { mycontext } from './Context';
import { useEffect } from 'react';
import { Axios } from "../App";

const Cart = () => {
  const { setCart, cart,userID,handlePrice } = useContext(mycontext);

  // console.log(cart)

  
useEffect(() => {
  const fetchData = async ()=>{
    try{  
      const response = await Axios.get(`/user/cart/${userID}`);
      setCart(response.data.cart)
      
    }
    catch(error){
      console.log(error)
    }
  }
  fetchData();
},[setCart,userID])

console.log(cart)




// Remove an item from the cart
const removeFromCart = async (productId) => {
 
  try {
    await Axios.delete(`/user/products/cart/${userID}/${productId}`);
    const response = await Axios.get(`/user/cart/${userID}`);
    
  
setCart(response.data.cart)

} catch (error) {
  console.log(error)
  // alert(error.response.message)
  console.log(cart)
}
}


 //  Calculate the total price of items in the cart
 const totalPrice = cart.reduce((acc, product) => acc + (product.product.price * product.quantity, 0));


 // Handle changes in item quantity
 const handleQuantity = async (id, quantityChange) => {
  console.log(quantityChange)
    const data = { id, quantityChange };
    try {
       await Axios.put(`/user/cart/${userID}`, data);
       const response = await Axios.get(`user/cart/${userID}`);
       setCart(response.data.cart);
    } catch (error) {
       console.log(error)
    }
 };







  
  

  return (
    <div>
      <div className='cartpgdisply'>Please Select Your Favourite Items</div>
      {cart.map((product) => (
        <div key={product._id} className='div-m-2'>
          <Card>
            <div className="d-flex">
              <div style={{ width: "60vh" }}>
                <Card.Img src={product.product.image} className="card-image1" alt={product.product.title} />
              </div>
              <div className="w-50 p-3" style={{ textAlign: "left" }}>
                <Card.Title>
                  <h2>{product.product.title}</h2>
                </Card.Title>
                <Card.Body>
                <Card.Text>
                    <h3>MRP: {handlePrice(product.product.price * product.quantity)}</h3>
                  </Card.Text>
                  <Card.Text>
                    <h4>{product.product.category}</h4>
                  </Card.Text>

                 
                  <div>
                    <br />
                    <h1>Quantity: {product.quantity}</h1>
                    <button className='incrementbtn' onClick={() => handleQuantity(product._id, 1)}>
                      +
                    </button>
                    <button className='decrementbtn' onClick={() => handleQuantity(product._id, -1)}>
                      -
                    </button>
                    <p>Total Price: {handlePrice(totalPrice)}.00</p>
                  </div>
                  <button  onClick={()=>removeFromCart(product.product._id)}>remove item</button>
                </Card.Body>
              </div>
            </div>
          </Card>
        </div>
      ))}


      <button>Check out</button>
    </div>
  );
};

export default Cart;

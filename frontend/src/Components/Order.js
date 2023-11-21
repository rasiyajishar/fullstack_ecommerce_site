import React, { useContext } from 'react'
import { useState,useEffect } from 'react';
import { Axios } from '../App'
import { mycontext } from './Context';



export default function Order(){
  
  const {userID} = useContext(mycontext)
const [order, setOrder] = useState([])

const fetchData = async () => {
  try {
    
    const response = await Axios.get(`/user/showOrders/${userID}`);
    console.log( response.data.orderProductDetails);


    if (response.status === 200) {
      setOrder(response.data.orderProductDetails);
    }
  } catch (error) {
    console.log("userOrderPage Error Occurred" + error);
  }
};

useEffect(() => {
  fetchData();
}, []);


return (
  <>
  <h1>Order details</h1>
    {order && order.length > 0 ? (
      order.map((value) => (
        <div key={value._id}>
          {value.products.map((pvalue) => (
            <div key={pvalue.productId}>
              <img src={pvalue.image} alt="error" />
              <div>
                <p>{pvalue.title}</p>
              </div>
              <div>
                <span>{value.time}</span>
                <br />
                <span>{value.date}</span>
              </div>
            </div>
          ))}
        </div>
      ))
    ) : (
      <div> No orders</div>
    )}
  </>
);
}
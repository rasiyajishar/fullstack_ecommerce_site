
import React from 'react'

import { useEffect } from 'react';
import { Axios } from '../App';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


function Userdetails() {
    const { id } = useParams();
 
console.log('User ID:', id);


    const [user, setUser] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
           try {
              const response = await Axios.get(`/admin/users/${id}`);
              console.log(response)
              setUser(response.data);
              
           }  catch (error) {
            console.log(error)
          }
        };
  
        fetchData();
     }, [id]);


  return (
    <>
    <h1>Order details</h1>
      {user && user.orders && user.orders.length > 0 ? (
        user.orders.map((value) => (
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

export default Userdetails

import React, { useEffect } from "react";

import { Card } from 'react-bootstrap'
import { Axios } from '../App';
import { useParams } from 'react-router-dom';
import {useState } from "react";



function Productdetails() {
    // const { products, setProducts } = useContext(mycontext);
    const[item,setItem]=useState([])
    const {id}=useParams()
    
  

    

      useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("first")
              const response = await Axios.get(`admin/products/${id}`);
            
              console.log(response);
    
              if (response.status === 200) {
                setItem(response.data);
              }
            } catch (error) {
              console.log(error.message); 
            }
          };
        fetchData();
      }, [id]); 
    




  return (
 
    

<div className='show_product'>

<div className="card-container">
  <div className='div-m-2'>
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

export default Productdetails
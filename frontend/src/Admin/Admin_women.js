import React, { useContext, useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";

import { mycontext } from "../Components/Context";
import { useNavigate, useParams } from "react-router-dom";
import { Axios } from "../App";




function Admin_women() {
  const nav = useNavigate();
  const { category}=useParams()
  console.log(category)
  const { products ,setProducctts} = useContext(mycontext);
const [categoryData,setCategoryData]= useState([]);



const filteredproduct=products.filter((product)=>product.category==="Women");
console.log("filteredproductadmin",filteredproduct)
    







    useEffect(()=>{
      const fetchData= async () =>{
        try {
          const response = await Axios.get(`admin/products/${category}`);
          console.log(response)
           setCategoryData(response.data)
           console.log(response.data.data)
        } catch (error) {
          console.log(error)
        }
      }
      fetchData()
    },[category]);

  
  



  return (
    <div className="tablediv">
      <h2>Product Category {category}</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>

            <th>Image</th>
            <th> Price</th>
            <th>Edit product</th>
            <th>Delete product</th>
          </tr>
        </thead>
        <tbody>
          {filteredproduct.map((product, i) => (
            <tr key={products._id}>
              <td>{product._id}</td>

              <td>{product.title}</td>
              <td>
                <img src={product.image} alt="photos" width={50} />
              </td>
              <td>{product.price}</td>

              <td>
                 <Button
                  variant="primary"
                  onClick={() => nav(`/Editproduct/${products.id}`)}
                >
                  Edit
                </Button> 
              </td>
              <td>
                <Button
                  variant="danger"
                  id={i}
                   onClick={() =>
                    setProducctts((p) => p.filter((a) => a.id !== products.id))
                  }
                >
                  Delete
                </Button> 
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Admin_women;

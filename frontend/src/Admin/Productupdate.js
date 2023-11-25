import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import { useContext } from "react";
import { mycontext } from "../Components/Context";
import { Axios } from '../App';

const Productupdate = () => {
  const { products, setProducts } = useContext(mycontext);
  // const[products,setProducts]=useState([]);
  const nav = useNavigate();

  const fetchData = async () => {
    try {
      const response = await Axios.get('/admin/products');
      console.log(response)
      if (response.status === 200) {
        setProducts(response.data.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {

    fetchData();
  }, []); 



  const deleteProduct = async (id) => {
    try {
      const response = await Axios.delete(`admin/product/${id}`);
      if (response.status === 200) {
        window.location.reload();

        fetchData();  // Refetch data after deleting a product
        return;
      }
    } catch (error) {
      console.log(error.message);
    }
  };






  return (
    <div className="tablediv">
      <h1>Product Details</h1>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>PRICE</th>
            <th>IMAGE</th>

            <th>CATEGORY</th>
            <th>Edit product</th>
            <th>Delete product</th>
          </tr>
        </thead>
        <tbody>
          {products && products.map((products, i) => (
            <tr key={products._id}>
              <td>{products._id}</td>

              <td>{products.title}</td>
              <td>{products.price}</td>
              <td>
                <img src={products.image} alt="photos" width={50} />
              </td>
              <td>{products.category}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => nav(`/Editproduct/${products._id}`)}
                >
                  Edit
                </Button>
              </td>
              <td>
                <Button
                  variant="danger"
                  id={i}
                  onClick={() =>deleteProduct(products._id)}>
                  Delete
                </Button>
              </td>
              <td>
                <Button
                  variant="primary"
                  id={i}
                  onClick={() => nav(`/Admin/productdetail/${products._id}`)}>
                  get details
                </Button>
              </td>
            </tr>
         ))}
         </tbody>
       </Table>
     </div>
  );
};

export default Productupdate;

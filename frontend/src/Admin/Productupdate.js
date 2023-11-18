import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table } from "react-bootstrap";

import { useContext } from "react";
import { mycontext } from "../Components/Context";

const Productupdate = () => {
  const { products,setProducts } = useContext(mycontext);
  const nav = useNavigate();
  console.log(products)

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

            <th>QUANTITY</th>
            <th>Edit product</th>
            <th>Delete product</th>
          </tr>
        </thead>
        <tbody>
          {products.map((products, i) => (
            <tr key={products.id}>
              <td>{products.id}</td>

              <td>{products.name}</td>
              <td>{products.price}</td>
              <td>
                <img src={products.image} alt="photos" width={50} />
              </td>
              <td>{products.quantity}</td>
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
                    setProducts((p) => p.filter((a) => a.id !== products.id))
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
};

export default Productupdate;

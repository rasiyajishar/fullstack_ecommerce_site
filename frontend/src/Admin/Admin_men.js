import React from "react";
import { Button, Table } from "react-bootstrap";
import { useContext } from "react";
import { mycontext } from "../Components/Context";
import { useNavigate } from "react-router-dom";

function Admin_men() {
  const nav = useNavigate();
  const { products ,setProducctts} = useContext(mycontext);

    const filteredproduct=products.filter((product)=>product.type==="men");

    // const filteredproduct = products.filter(
    //   (e) => e.type.toLowerCase() === "men"
    // );
  return (
    <div className="tablediv">
      <h2>Product Category Men</h2>
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
          {filteredproduct.map((products, i) => (
            <tr key={products.id}>
              <td>{products.id}</td>

              <td>{products.name}</td>
              <td>
                <img src={products.image} alt="photos" width={50} />
              </td>
              <td>{products.price}</td>

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

export default Admin_men;

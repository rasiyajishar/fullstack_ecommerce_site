import React, { useContext } from "react";

import Form from "react-bootstrap/Form";
import { mycontext } from "../Components/Context";
function Addproduct() {
  const { products, setProducctts,setProducts} = useContext(mycontext);


  const handleInputChange = (product) => {
    product.preventDefault();
    const productname = product.target.title.value;
    console.log(productname);
     const producttype = product.target.category.value;
     console.log(producttype);
    const productimage = product.target.image.value;
    const productprice = product.target.price.value;

    const productdescription = product.target.description.value;
    setProducts([
      ...products,{
        id:products.length+1,
        name: productname,
        image: productimage,
        category:producttype,
        price: productprice,
        description: productdescription
      }
    ]);

    console.log(products);
  };
  return (
    <>
      <div className="containeraddprod">
        <h1>Add Product</h1>
        <form onSubmit={handleInputChange}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input type="text" className="form-control" id="title" required />
          </div>

          <Form.Select
            id="category"
            required
            title="Category"
            aria-label="Default select example"
          >
            <option> Select a Category</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
          </Form.Select>
          <br></br>

          <div className="mb-3">
            <label htmlFor="src" className="form-label">
              Image:
            </label>
            <input type="text" className="form-control" id="image" required />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price:
            </label>
            <input type="text" className="form-control" id="price" required />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <textarea className="form-control" id="descr" required />
          </div>
          <button className="btn btn-primary" type="submit">Add </button>
        </form>
      </div>
    </>
  );
}

export default Addproduct;

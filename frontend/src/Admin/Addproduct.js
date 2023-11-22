import React, { useContext } from "react";

import Form from "react-bootstrap/Form";
import { mycontext } from "../Components/Context";
import { Axios } from "../App";
import uploadToCloudinary from "./uploadToCloudinary";
function Addproduct() {
  const { products,setProducts} = useContext(mycontext);


  const handleInputChange = async (product) => {
    product.preventDefault();
    const productname = product.target.title.value;
    const producttype = product.target.category.value;
    const productimage = product.target.image.files[0];
    const productprice = product.target.price.value;
    const productdescription = product.target.description.value;

    const imageLink = await uploadToCloudinary(productimage);

    const formData = new FormData();
    formData.append("image", imageLink);
    formData.append("title", productname);
    formData.append("price", productprice);
    formData.append("description", productdescription);
    formData.append("category", producttype);

    try {
      const response = await Axios.post("/admin/products", formData);
      if (response.status === 200) {
        console.log(response)
        setProducts(response.data);
        //  navigate("/dashboard/products");
      }
   } catch (error) {
      console.error(error.response.data.message)
   }
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
            <input type="file" className="form-control" id="image" required />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price:
            </label>
            <input type="number" className="form-control" id="price" required />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <textarea className="form-control" id="description" required />
          </div>
          <button className="btn btn-primary" type="submit">Add </button>
        </form>
      </div>
    </>
  );
}

export default Addproduct;

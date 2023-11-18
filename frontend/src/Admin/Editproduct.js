


import React, { useContext, useState, useEffect } from 'react'; // Import useState and useEffect
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { mycontext } from '../Components/Context';

const Editproduct = () => {
  const { products, setProducts } = useContext(mycontext);
  const { id } = useParams();
  const eid = id;
  
  // Find the product to edit based on the ID
  const productToEdit = products.find((item) => parseFloat(item.id) === parseFloat(eid));

  // Initialize state for form values
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    type: '',
    price: '',
    description: '',
  });

  useEffect(() => {
    // Populate the form with the current product data when component mounts
    if (productToEdit) {
      setFormData({
        name: productToEdit.name,
        image: productToEdit.image,
        type: productToEdit.type,
        price: productToEdit.price.toString(), // Convert price to string
        description: productToEdit.descr,
      });
    }
  }, [productToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a copy of the products array
    const updatedProducts = [...products].map((product) => {
      if (parseFloat(product.id) === parseFloat(eid)) {
        // Update the product with the new form data
        return {
          ...product,
          name: formData.name,
          image: formData.image,
          type: formData.type,
          price: parseFloat(formData.price), // Convert price to float
          descr: formData.description,
        };
      }
      return product;
    });

    setProducts(updatedProducts);
  };

  const handleChange = (e) => {
    // Update the form data when input values change
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className='viewdiv'>
        <div className="container">
          <h1>Edit Product</h1>
          <br />
          {productToEdit && (
            <div className='d-flex'>
              <div className='half-screen-div'>
                <div className=''>
                  <img
                    src={productToEdit.image}
                    alt="Photos"
                    style={{ width: '200px', height: '150px' }}
                  />
                </div>
                <div>
                  <h3>{productToEdit.name}</h3>
                  <h3>{productToEdit.type}</h3>
                  <h3>{productToEdit.price}</h3>
                  <h5>{productToEdit.descr}</h5>
                </div>
              </div>
              <div key={productToEdit.id}>
                <form id={productToEdit.id} onSubmit={handleSubmit} style={{ width: '100vh' }}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <Form.Select
                    id="type"
                    title="Category"
                    aria-label="Default select example"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    <option>Open this select Category</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                  </Form.Select>
                  <br />

                  <div className="mb-3">
                    <label htmlFor="image" className="form-label">
                      Image:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="image"
                      name='image'
                      value={formData.image}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="price" className="form-label">
                      Price:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="price"
                      name='price'
                      value={formData.price}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description:
                    </label>
                    <textarea
                      className="form-control"
                      id="description"
                      name='description'
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>
                  <button className="btn btn-primary" type='submit'>Update</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Editproduct;

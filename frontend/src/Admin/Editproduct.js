


import React, { useContext, useState, useEffect } from 'react'; // Import useState and useEffect
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { mycontext } from '../Components/Context';
import { Axios } from '../App';

const Editproduct = () => {
  const { products, setProducts } = useContext(mycontext);
  const { id } = useParams();
  
  // Find the product to edit based on the ID
  // const productToEdit = products.find((item) => parseFloat(item.id) === parseFloat(eid));

  // Initialize state for form values
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    category: '',
    price: '',
    description: '',
  });

  useEffect(() => {
    const fetchData = async () => {
       try {
          const response = await Axios.get(`/admin/products/${id}`);
          setFormData(response.data);
       } catch (error) {
          console.error(error.response.data.message);
       }
    };
    
    fetchData();
 }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDatas = new FormData();
    formDatas.append("title", formData.title);
    formDatas.append("price", formData.price);
    formDatas.append("description", formData.description);
    formDatas.append("category", formData.category);
    formDatas.append("image", formData.image);

    console.log(FormData)

    try {
      const response = await Axios.put(`/admin/productsupdate/${id}`, formData);
      if (response.status === 200) {
        console.log(response)
        setProducts(response.data.result);
      }
   } catch (error) {
      console.error(error.response.data.message);
   }
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
          <div className='d-flex'>
              <div className='half-screen-div'>
                <div className=''>
                  <img
                    src={formData.image}
                    alt="Photos"
                    style={{ width: '200px', height: '150px' }}
                  />
                </div>
                <div>
                  <h3>{formData.title}</h3>
                  <h3>{formData.category}</h3>
                  <h3>{formData.price}</h3>
                  <h5>{formData.description}</h5>
                </div>
              </div>
              <div key={formData.id}>
                <form id={formData.id} onSubmit={handleSubmit} style={{ width: '100vh' }}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name='title'
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </div>

                  <Form.Select
                    id="caregory"
                    title="category"
                    aria-label="Default select example"
                    name="category"
                    value={formData.category}
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
                      type="number"
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
                      id="title"
                      name='title'
                      value={formData.title}
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
   
        </div>
      </div>
    </>
  );
};

export default Editproduct;

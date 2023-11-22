
import React, { useContext, useState, useEffect } from "react";
import { Button,Table } from 'react-bootstrap'
import { mycontext } from '../Components/Context'

import { useNavigate } from 'react-router-dom';
function Admin_women() {
  


  const { products ,setProducctts} = useContext(mycontext);
  const [category,setCategory]= useState(products);
  const [selectedOption, setSelectedOption] = useState("All");
  

// const filteredproduct=products.filter((product)=>product.type==="women");
const nav=useNavigate()



useEffect(() => {
  selectedOption === "All"
     ? setCategory(products)
     : setCategory(products.filter((product) => product.category === selectedOption));
}, [selectedOption, products]);









  return (
    <div className='tablediv'>
 <h2>Product Category Women</h2>
      <Table striped bordered hover>
<thead>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>PRICE</th>
    <th>IMAGE</th>
    
    <th>QUANTITY</th>
  </tr>
</thead>
<tbody>

  {category.map((products,i)=>(
<tr key={products._id}>

<td>{products._id}</td>
<td>{products.title}</td>
<td>{products.price}</td>
<td>{products.image}</td>

{/* <td>{products.quantity}</td> */}
<td>
                 <Button
                  variant="primary"
                  onClick={() => nav(`/Editproduct/${products.id}`)}
                >
                  Edit
                </Button> 
              </td>
              <td>
                {/* <Button
                  variant="danger"
                  id={i}
                   onClick={() =>
                    setProducctts((p) => p.filter((a) => a.id !== products.id))
                  }
                >
                  Delete
                </Button>  */}
              </td>
</tr>



  ))}
</tbody>




      </Table> 

      
    </div>
  )
}

export default Admin_women
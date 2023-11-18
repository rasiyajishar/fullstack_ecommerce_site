import React, { useContext } from 'react'
import { Table } from 'react-bootstrap';
import { value } from './Userdata';
import { mycontext } from '../Components/Context';
function User() {
    const {value,signup,setSignup}=useContext(mycontext)
  return (
    <div className='userview'>
         <div> <h2>View Users</h2>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {signup.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </Table></div>
    </div>
  )
}

export default User
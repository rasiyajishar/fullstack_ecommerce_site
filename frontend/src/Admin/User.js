import React, { useContext } from 'react'
import { Nav, Table } from 'react-bootstrap';
import { useEffect } from 'react';
import { mycontext } from '../Components/Context';
import { Axios } from '../App';
import { useNavigate } from 'react-router-dom';
function User() {
    const {signup,setSignup}=useContext(mycontext)
const nav = useNavigate()

useEffect(()=>{
  const fetchData= async () =>{
    try {
      const response = await Axios.get('admin/users');
      // console.log(response)
      setSignup(response.data.usersdata)
    } catch (error) {
      console.log(error)
    }
  }
  fetchData()
},[setSignup]);







  return (
    <div className='userview'>
         <div> <h2>View Users</h2>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>orders</th>
        </tr>
      </thead>
      <tbody>
        {signup && signup.map((user) => (
          <tr key={user._id}>
            <td>{user._id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.orders.length}</td>
           
            <td><button onClick={() => nav(`/Admin/Userdetail/${user._id}`)}>get details</button>
</td>

          </tr>
         //`/Admin/Userdetails/${user._id}`
        ))}
      </tbody>
    </Table></div>
    </div>
  )
}

export default User
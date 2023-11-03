import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
const Read = () => {
    const[data,setData] = useState([]);

const setToLocalStorage=(id,password ,email )=>{
localStorage.setItem("id",id);
localStorage.setItem("email",email);
localStorage.setItem("password",password);
}


function getData(){
    axios.get("https://654365ed01b5e279de204951.mockapi.io/:endpoint")
    .then((res) =>{
console.log(res.data);
setData(res.data);
    });
}
const handleDelete=(id)=>{
    axios.delete(`https://654365ed01b5e279de204951.mockapi.io/:endpoint/${id}`
    ).then(()=>{
        getData()
    })
}


useEffect(()=>{
    getData(); 
},[])

  return (
    <>
    <h2>Read</h2>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  {
    data.map((eachData) =>{
        return(
            <>
             <tbody>
    <tr>
      <th scope="row">{eachData.id}</th>
      <td>{eachData.email}</td>
      <td>{eachData.password}</td>
      <td>
        <Link to="/update" >
        <button className='btn-success' onClick={()=>setToLocalStorage(
            eachData.id,eachData.email,eachData.password
        )}> Edit</button>
        </Link>
      </td>
      <td>
        <button className='btn-danger'
        onClick={()=>handleDelete(eachData.id)}
        > Delete</button>
      </td>
    </tr>
     
  </tbody>
            </>
        )
    })
  }
 
</table>
</>
  )
}

export default Read
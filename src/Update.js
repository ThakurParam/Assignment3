import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate }from 'react-router-dom'

function Update() {
const {id,setId} = useState("");
const {email,setEmail} = useState("");
const {password,setPassword} = useState("");

const navigate = useNavigate();

useEffect(()=>{
   setId( localStorage.getItem("id"));
   setEmail( localStorage.getItem("email"));
   setPassword( localStorage.getItem("password"));
},[]);


const handleUpdate=(e)=>{
    e.preventDefault();
    console.log("Id...",id)
axios.put(`https://654365ed01b5e279de204951.mockapi.io/:endpoint/${id}`,

{ email:'email',
password:'pasword'}

).then(()=>{
    navigate("/read");
})
}
  return (
    <>
    <h2>Update</h2>
    <form>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Email address</label>
     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
     value={email}
     onChange={(e)=>setEmail(e.target.value)}/>
     <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
   </div>
   <div class="mb-3">
     <label for="exampleInputPassword1" class="form-label">Password</label>
     <input type="password" class="form-control" id="exampleInputPassword1"
     value={password}
     onChange={(e)=>setPassword(e.target.value)}/>
   </div>
   <div class="mb-3 form-check">
     <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
     <label class="form-check-label" for="exampleCheck1">Check me out</label>
   </div>
   <button type="submit" class="btn btn-primary" onClick={handleUpdate}>Update</button>
 </form>
    
    
    </>
  )
}

export default Update
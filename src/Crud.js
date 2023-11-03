import axios from 'axios'
import React from 'react'
import useState from 'react'
import Read from './Read'
import {useNavigate} from 'react-router-dom'





function Crud() {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
const history= useNavigate()
// const header ={"Access-Control-Allow-Origin":""}
const handleSubmit=(e) =>{
    e.preventDefault();
    console.log('');
axios.post(
'https://654365ed01b5e279de204951.mockapi.io/:endpoint',
{ email:'email',
password:'pasword'}

)
.then(()=>{
    history('/read');
});
};

  return (
   <>
   <h2>Create</h2>
   <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    onChange={(e)=>setEmail(e.target.value)}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"
    onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
   
   
   </>
  )
}

export default Crud;
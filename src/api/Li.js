import React, { useState } from 'react'
import { url } from './BURL';

const Li = () => {
   
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const LiApi=()=>{

        try {
            const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "email": email,
  "password": password
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch(`${url}/learner/login`, requestOptions)
  .then((response) => response.json())
  .then((result) => {

    if(result.status ==='001'){
     
        const token = result.token;
        
        localStorage.setItem('token', token);
        alert(result.message);
       }
   
  })
  .catch((error) => console.error(error));
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
 <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={LiApi}>Login</button>

    </div>
  )
}

export default Li

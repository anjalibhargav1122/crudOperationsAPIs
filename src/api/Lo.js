import React from 'react'
import { url } from './BURL';

const Lo = () => {
    const LoApi= ()=>{ 
        
        try {
            const myHeaders = new Headers();
            const token = localStorage.getItem('token');

myHeaders.append("Authorization", `Bearer ${token}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch(`${url}/learner/logout`, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    if(result.status ==='001'){
        localStorage.removeItem('token');
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
        <button onClick={LoApi}>Log out</button>
    </div>
  )
}

export default Lo

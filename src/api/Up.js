import React from 'react'
import { url } from './BURL';

const Up = () => {

    const Updt=()=>{

        try {
            const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
const token = localStorage.getItem("token");
myHeaders.append("Authorization", `Bearer ${token}`);

const raw = JSON.stringify({
  "id": 7
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch(`${url}/learner/update/task`, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    if(result.status ==='001'){
     
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
        <button onClick={Updt}>update</button>
    </div>
  )
}

export default Up
import React from 'react'
import { url } from './BURL';

const Edittittle = () => {

    const edit=()=>{
        try {
            const myHeaders = new Headers();
            const token = localStorage.getItem("token");
myHeaders.append("Authorization", `Bearer ${token}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};


const id = 6,
tittle = "dfjrufre"; 

fetch(`${url}/learner/edit/task/title/${id}/${tittle}`, requestOptions)
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
    <div><button onClick={edit}>Edit tittle</button></div>
  )
}

export default Edittittle
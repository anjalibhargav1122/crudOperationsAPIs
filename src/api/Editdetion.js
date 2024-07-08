import React from 'react'
import { url } from './BURL';

const Editdetion = () => {

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
desc = "dfjrufre"; 

fetch(`${url}/learner/edit/task/desc?id=${id}&desc=${desc}`, requestOptions)
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
    <div><button onClick={edit}>edit description</button></div>
  )
}

export default Editdetion
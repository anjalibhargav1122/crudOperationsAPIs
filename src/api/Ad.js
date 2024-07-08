import React, { useState } from 'react'
import { url } from './BURL';

const Ad = () => {

    const[title, setTitle]= useState("");
    const[description, setDescription]= useState("");


    const add=()=>{

        try {

            const myHeaders = new Headers();
            const token = localStorage.getItem("token");

myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer ${token}`);

const raw = JSON.stringify(    {
    
    "title":title,
    "description": description
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch(`${url}/learner/add/task`, requestOptions)
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
 <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input type='text' value={description} onChange={(e)=>setDescription(e.target.value)}/>
        <button onClick={add}>Add task</button>

    </div>
  )
}

export default Ad

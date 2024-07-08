import React, { useEffect, useState } from 'react'
import { url } from './BURL';

const Di = () => {
const [data, setData] = useState([]);

    const DiApi=()=>{

        try {
            const myHeaders = new Headers();
            const token = localStorage.getItem('token');

myHeaders.append("Authorization", `Bearer ${token}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch(`${url}/learner/get/tasks`, requestOptions)
  .then((response) => response.json())
  .then((result) => {
if(result.status ===  "001"){
  setData(result.data);
}
  })

  .catch((error) => console.error(error));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
      DiApi();
    },[])
  return (
    <div>
    {
      data?.map((itm, i)=>{
        return(

          <div key={i}>
            <p>id: {itm.id}</p>
            <p>user_id: {itm.user_id}</p>
            <p>title: {itm.title}</p>
            <p>description: {itm.description}</p>
            <p>isDone: {itm.isDone}</p>
            <p>created_at: {itm.created_at}</p>
<hr/>
          </div>
        )
      })
    }
    </div>
  )
}

export default Di

import React, { useState } from 'react'
import { url } from './BURL';

const UplodProfil = () => {
    
    const [img, setImg] = useState();
    const [profile, setProfile] = useState();
    const uplod = () => {

        try {
            const myHeaders = new Headers();
            const token = localStorage.getItem("token");
            myHeaders.append("Authorization", `Bearer ${token}`);

            const formdata = new FormData();
            formdata.append("image", img, img.name);

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: formdata,
                redirect: "follow"
            };

            fetch(`${url}/learner/upload/profile`, requestOptions)
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
        <div>  <input
            onChange={(e) => {
                const file = e.target.files[0];
                setImg(file);
                setProfile(URL.createObjectURL(file));
            }}
            type='file'
            accept='image/*'
        />

            <h1>{img?.name}</h1>

            <img height="100vh" width="100vw" src={profile} alt="Profile Preview" />
            <button onClick={uplod}>upload</button>
        </div>
    )
}

export default UplodProfil


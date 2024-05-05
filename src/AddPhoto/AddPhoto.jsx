import React, { useState, useEffect } from "react"; 
import "./AddPhoto.css"
import axios from 'axios'; 

import TitlePhoto from "./TitlePhoto/TitlePhoto";
import ImgPhoto from "./ImgPhoto/ImgPhoto";
import DescriptionPhoto from "./DescriptionPhoto/DescriptionPhoto";
import CategoryPhoto from "./CategoryPhoto/CategoryPhoto";


const axiosInstance = axios.create({
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': 'Token ' + localStorage.getItem('token')
    }
  });

  

const AddPhoto = ({dataCategory}) => {

    const [title, setTitle] = useState()
    const [img, setImg]  = useState()
    const [descr, setDescr] = useState()
    const [category, setCategory] = useState()

    const handleFileChange = (e) => {
        setImg(e.target.files[0]);
    }
    

    const CreatePhoto = () => {
        let Data = new FormData();

        let data = {
            'title': document.getElementById("title").value,
            'photo': img,
            'description': document.getElementById("description").value,
            'category_id': document.getElementById("categorySelect").value
        }

        Data.append('title',document.getElementById("title").value)
        Data.append('photo', document.getElementById("photo").file)
        Data.append('description', document.getElementById("description").value)
        Data.append('category_id', document.getElementById("categorySelect").value)
        console.log(data)

        axiosInstance.post('/core_api/photos/', data)
        .then(response => {   
            console.log(response.headers); 
        })  
        .catch(error => {  
            console.error(error);  
        }); 
    }

    return (
        <div className='addPhoto'>
            <TitlePhoto />
            <ImgPhoto handleFileChange={handleFileChange}/>
            <DescriptionPhoto />
            <CategoryPhoto dataCategory={dataCategory}/>
            <button onClick={CreatePhoto} className="addButton">Отправить</button>
        </div>
    )
}

export default AddPhoto;
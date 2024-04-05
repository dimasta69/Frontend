import React, {useState} from "react"; 
import axios from 'axios'; 
import "./PhotoOne.css";
import Box from "./Box/Box";
import Box1 from "./Box1/Box1";
import Comments from "./Comments/Comments";
import Pagination from "../../Pagination/Pagination";
import Message from "./Message/Message";
import Descriptions from "./Description/Descriptions";
import CategorySelect from "./CategorySelect/CategorySelect";
import ChangePhoto from "./ChangePhoto/ChangePhoto";

const axiosInstance = axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + localStorage.getItem('token')
    }
  });

const axiosPost = axios.create({
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': 'Token ' + localStorage.getItem('token')
    }
  });



const PhotoOne = ({ data, like, dataCategory}) => {

        const [category_post, setCategoryPost] = useState(null)
        const [photo_post, setPhotoPost] = useState(null)

        const setCategory = (category) => {
            setCategoryPost(category)
            }


        const setPhoto = (photo) => {
            console.log(photo)
            setPhotoPost(photo)
        }


        const ChangePost = () => {
            let Url = 'http://127.0.0.1:8000/core_api/photo/' + data.id + '/'
            const formData1 = new FormData();

            formData1.append('description', document.getElementById('changeDesc').value); 
            formData1.append('title', document.getElementById('changeTitle').value); 
            formData1.append('category_id', document.getElementById('category_id').value); 
            
            
            if (photo_post != null){
                formData1.append('photo', photo_post);
            }



            axiosPost.put(Url, formData1)
            .then(response => {
                window.location.reload();
            }
            ).catch(error => {
                console.error(error);
            });
        }

        const DeletePost = () => {
            let Url = 'http://127.0.0.1:8000/core_api/photo/' + data.id + '/'

            axiosPost.patch(Url)
            .then(response => {
                window.location.reload();
            }
            ).catch(error => {
                console.error(error);
            });
        }






        const [buttonChange, setButtonChange] = useState({text: 0, id: 0});

        const SetChange = (text, id) => {
            setButtonChange({text, id})
        }


        const [buttonReply, setButtonReply] = useState({name_reply: 0, id: 0});

        const SetReply = (name_reply, id) => {
            setButtonReply({name_reply, id})
        }

        const [buttonStyle, setButtonStyle] = useState('buttons1');

        const changeButtonStyle = () => {
            if (buttonStyle === 'butLike')
            {
                setButtonStyle('buttons1')
            }
            else {
                setButtonStyle('butLike')
            }
        };

        const [buttonStyle1, setButtonStyle1] = useState('butLike');

        const changeButtonStyle1 = () => {
            if (buttonStyle1 === 'butLike')
            {
                setButtonStyle1('buttons1')
            }
            else {
                setButtonStyle1('butLike')
            }
        };

    if (!data || !data.photo) {
        return null; 
    }
    
    let Url = "http://127.0.0.1:8000/" + data.photo;

    let enter = () => {
        if (localStorage.getItem('token'))
        {
            let Url = 'http://127.0.0.1:8000/core_api/like/?photo_id=' + data.id
            axiosInstance.post(Url)
            .then(response => {
                changeButtonStyle1();
                changeButtonStyle();
            }
            ).catch(error => {
                console.error(error);
            });
        }
    }

    let category_title;
    if(!data.category)
    {
        category_title= 'Без категории'
    }
    else 
    {
        category_title= data.category.title
    }

    let status;
    if (data.status == 'Moderation')
    {
        status = 'На модрации'
    }
    else if (data.status == 'Published')
    {
        status = 'Опубликованно'
    }
    else if (data.status == 'Delete')
    {
        status = 'На удалении'
    }
    else if (data.status == 'Reject')
    {
        status = 'Отклоненно'
    }

    const Avtorization = () => {
        if (localStorage.getItem('user_id') == data.user.id)
        {   return(
                <div>   
                    <ChangePhoto data={data} setPhoto={setPhoto} />
                    <p style={{ width: '480px', color: '#605b53' }}>Статус:</p>
                    <p style={{ width: '480px', color: 'white', 'margin': '0 10px'}}>{status}</p>
                    <p style={{ width: '480px', color: '#605b53' }}>Описание:</p>
                    <Descriptions data={data} /> 
                    <p style={{ width: '480px', color: '#605b53', 'padding': "5px 0"}}>Категория:</p>
                    <CategorySelect category_change={category_title} dataCategory={dataCategory} setCategory={setCategory} />
                    <div className="butt">
                        <button className="but3" onClick={ChangePost}>Сохранить изменения</button>
                        <button className="but4" onClick={DeletePost}>Удалить</button>
                    </div>
                    <p style={{ width: '480px', color: '#605b53' }}>Комментарии:</p>
                </div>
            )
        }
        else if (localStorage.getItem('token')){
            return (
                <div>
                    <p style={{ width: '480px', color: '#605b53' }}>Описание:</p>
                    <Descriptions data={data}/>
                    <p style={{ width: '480px', color: '#605b53' }}>Категория:</p>
                    <div className="category3">{category_title}</div>
                    <p style={{ width: '480px', color: '#605b53' }}>Комментарии:</p>
                </div>
            );
        }
        else {
            return (
                <div>
                    <p style={{ width: '480px', color: '#605b53' }}>Описание:</p>
                    <Descriptions data={data}/>
                    <p style={{ width: '480px', color: '#605b53' }}>Категория:</p>
                    <div className="category3">{category_title}</div>
                    <p style={{ width: '480px', color: '#605b53' }}>Комментарии:</p>
                </div>
            );
        }
    }

    if (!like.photo_id && like !=1)
    {
        return (
            <div className="photo_one">
                <img src={Url} style={{ width: '480px', height: '270px' }} />
                    <Box data={data}/>
                    <Box1 data={data}/>
                    <div className="center">
                        <button onClick={enter} className={buttonStyle}></button>
                    </div>
                <Avtorization />
                <Comments id={data.id}/> 
                <Pagination />
                <Message id={data.id} buttonReply={buttonReply} SetReply={SetReply} buttonChange={buttonChange} SetChange={SetChange}/>
            </div>
        );
    }
    else if (like == 1) 
    {
        return(
        <div className="photo_one">
            <img src={Url} style={{ width: '480px', height: '270px' }} />
                    <Box data={data}/>
                    <Box1 data={data}/>
                <Avtorization />
                <Comments id={data.id} SetReply={SetReply} SetChange={SetChange}/>
                <Pagination />
            </div>
        )
    }

    else
    {
        return (
            <div className="photo_one">
                <img src={Url} style={{ width: '480px', height: '270px' }} />
                    <Box data={data}/>
                    <Box1 data={data}/>
                    <div className="center">
                        <button onClick={enter} className={buttonStyle1}></button>
                    </div>
                <Avtorization />
                <Comments id={data.id} SetReply={SetReply} SetChange={SetChange}/>
                <Pagination />
                <Message id={data.id} buttonReply={buttonReply} SetReply={SetReply} buttonChange={buttonChange} SetChange={SetChange}/>
            </div>
        );
    }
    
}

export default PhotoOne;    
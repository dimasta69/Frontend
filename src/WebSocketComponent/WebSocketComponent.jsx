import React, { Component } from 'react';
import Modal from 'react-modal';
import './WebSocketComponent.css'; 


class WebSocketComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      websocket: null,
      isOpen: false,
      message: ''
    };
  }

  componentDidMount() {
    const websocket = new WebSocket('ws://127.0.0.1:7000/ws/change_status/' + localStorage.getItem('user_id') + "/");

    websocket.onopen = () => {
      console.log('WebSocket connected');
    };

    websocket.onmessage = (event) => {
      this.setState({ message: event.data});
      this.openModal(); 
    };

    websocket.onclose = () => {
      console.log('WebSocket disconnected');
    };

    this.setState({ websocket });
  }

  componentWillUnmount() {
    if (this.state.websocket) {
      this.state.websocket.close();
    }
  }

  openModal = () => {
    this.setState({ isOpen: true });
    setTimeout(() => {
      this.setState({ isOpen: false });
    }, 5000); 
  };

  render() {
    if(this.state.message){
    if(JSON.parse(this.state.message).message == 'Status changed')
    {
      return (
        <div>
          <Modal isOpen={this.state.isOpen}  className="modal">
            <div>
              <p>Фотография id: {JSON.parse(this.state.message).photo_id}, наименование: "{JSON.parse(this.state.message).title}"</p>
              <p>Статус изменен на: {JSON.parse(this.state.message).status}</p>
            </div>
          </Modal>
          {this.state.isOpen && <div className="overlay" style={{ display: 'none' }}/>}
        </div>
      );
    }
    else if(JSON.parse(this.state.message).message == 'Снят лайк' ||  JSON.parse(this.state.message).message == 'Добавлен лайк')
    {
      return (
        <div>
          <Modal isOpen={this.state.isOpen}  className="modal">
            <div>
              <p>{JSON.parse(this.state.message).message} id: {JSON.parse(this.state.message).photo_id}, наименование: "{JSON.parse(this.state.message).title}"</p>
              <p>пользователем: {JSON.parse(this.state.message).username}</p>
              <p style={{'color': 'red'}}>общее количество лайков: {JSON.parse(this.state.message).count_like}</p>
            </div>
          </Modal>
          {this.state.isOpen && <div className="overlay" style={{ display: 'none' }}/>}
        </div>
      );
    }
    else if(JSON.parse(this.state.message).message == 'Добавлен комментарий')
    {
      return (
        <div>
          <Modal isOpen={this.state.isOpen}  className="modal">
            <div>
              <p>{JSON.parse(this.state.message).message} id: {JSON.parse(this.state.message).photo_id}, наименование: "{JSON.parse(this.state.message).title}"</p>
              <p>пользователем: {JSON.parse(this.state.message).username}</p>
              <p style={{'color': 'red'}}>общее количество комментариев: {JSON.parse(this.state.message).count_comments}</p>
            </div>
          </Modal>
          {this.state.isOpen && <div className="overlay" style={{ display: 'none' }}/>}
        </div>
      );
    }
    else if(JSON.parse(this.state.message).message == 'Ваш комментарий скоро будет удален')
    {
      return (
        <div>
          <Modal isOpen={this.state.isOpen}  className="modal">
            <div>
              <p>{JSON.parse(this.state.message).message} id: {JSON.parse(this.state.message).photo_id}, наименование: "{JSON.parse(this.state.message).title}"</p>
            </div>
          </Modal>
          {this.state.isOpen && <div className="overlay" style={{ display: 'none' }}/>}
        </div>
      );
    }
  }
}
}

export default WebSocketComponent;
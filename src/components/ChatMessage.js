import React from "react";



class ChatMessage extends React.Component {

  render() {

    const messages = this.props.information;
    
    return (
      <ul className="spremnik">

        {messages.map(element => this.createMessage(element))}

      </ul>
    );
  }



  createMessage(msg) {

    let tabStyle = "";
    const user = msg.user;
    
    const text = msg.text;
    const timestamp = msg.timestamp;

    const currentUser = this.props.currentUser;
    const myMessage = user.id === currentUser.id;
    
    
    if (myMessage) {
      tabStyle = "poruke moj-tab";
    } else {
      tabStyle = "poruke";
    }
  

  
    return (
      <li className={tabStyle}>

        <div className="randomColor" style={{backgroundColor: user.clientData.avatarColor}} />

        <div className="sadrzaj">

            <div className="sillyName"> {user.clientData.name} </div>

            <div className="text"> {text} </div>

            <div className="vrijeme">Poslano u {timestamp.getHours()}:{timestamp.getMinutes()<10?"0":""}{timestamp.getMinutes()} , {timestamp.getDate()}.{timestamp.getMonth()+1}.{timestamp.getFullYear()}.</div>

        </div>
      </li>
    );
  }
}



export default ChatMessage;
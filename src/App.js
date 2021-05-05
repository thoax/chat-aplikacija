import './App.css';
import React from "react";

import RandomColor from "randomcolor";
import SillyName from "sillyname";

import Text from "./components/Text";
import ChatMessage from "./components/ChatMessage";



class App extends React.Component {

  state = {

    user: {

      avatarColor: RandomColor(),

      name: SillyName()
    },

    text: []
  }



  constructor() {
    super();

    this.chat = new window.Scaledrone("Af1WMZZhiayCV7XN", {data: this.state.user});

    this.chat.on('open', error => {
      if (error) {
        return console.error(error);
      }
    
    const user = { ...this.state.user };

    user.id = this.chat.clientId;

    this.setState({user});
    });




    const chatroom = this.chat.subscribe("observable-room");

    chatroom.on('data', (data, user) => {

      const information = this.state.text;

      information.push({user, text: data, timestamp: new Date()});
      
      this.setState({information});
    });
  }



  render() {
    return (
      <div className="App">

        <div className="zaglavlje">
          <h2>Chat Aplikacija</h2>
        </div>

        <ChatMessage currentUser={this.state.user} information={this.state.text} />
        
        <Text onSendMessage={this.Send} />

        <h3 style={{color: "white", paddingRight: "30px", display: "flex", flexDirection: "row-reverse"}}>Igor Vereš, 15.03.2021.</h3>

      </div>
    );
  }



  Send = (message) => {
    this.chat.publish({
      room: "observable-room",
      message
    });
  }

}




export default App;
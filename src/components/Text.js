import React from "react";



class Input extends React.Component {
  state = {

    text: "",

    error: ""

  }



  textSent(element) {
     
    this.setState({text: ""}); 

    if (this.state.text && this.state.text.length > 0) {

      this.props.onSendMessage(this.state.text); 
      
    } else {

      this.setState({ error: 'Polje za unos je prazno. Molimo upišite poruku!' })
    }

    element.preventDefault();
  }



  textChange(element) {

    this.setState({text: element.target.value}); 

    if (element.target.value) {

      this.setState({ error: ' '});
    }
  }
  


  render() { 
    
    const error = this.state.error ? <div className="greska" >{this.state.error}</div> : '';

    return (
      <div className="input">
        
        {error}

        <form onSubmit = {element => this.textSent(element)}>
        
          <input onChange = {element => this.textChange(element)} value = {this.state.text} autoFocus type="text" placeholder="Upišite poruku (ENTER za unos)" />
          
        </form>
        
      </div>
    );
  }
}



export default Input;
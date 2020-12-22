import React from 'react';

class LoginPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {value:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
this.setState({value: event.target.value});
  }

  handleSubmit(event){
    let sendMail = {
      "email":'dasfda',
      "password":'dsfaf'
    }
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className = "LoginPage">
          <h1>BAZAAR</h1>
          <input type = "text" id= "email" name= "email" value={this.state.value} onChange={this.handleChange} placeholder="example@example.com"/>
          <input type = "text" id= "password" name= "password" placeholder="password"/>          
          <button type="submit" value="Submit" id="loginButton">Login</button>
        </div>
      </form>      
    );
  }
}
export default LoginPage;








import React from 'react';
import { withRouter } from 'react-router-dom';
import './LoginPage.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueOfEmail: '',
      valueOfPassword: ''
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({
      valueOfEmail: event.target.value
    });
  }

  handleChangePassword(event) {
    this.setState({
      valueOfPassword: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let sendMail = {
      "email": this.state.valueOfEmail,
      "password": this.state.valueOfPassword
    }

    postData(sendMail).then(result => {
      localStorage.setItem('userData', JSON.stringify(result))
      this.props.history.push('/products');
    });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="LoginPage">
            <i class="fas fa-address-card"></i>
            <h1>BAZAAR</h1>
            <input type="text" id="email" name="email" value={this.state.value} onChange={this.handleChangeEmail} placeholder="example@example.com" />
            <input type="text" id="password" name="password" value={this.state.value} onChange={this.handleChangePassword} placeholder="password" />
            <button type="submit" value="Submit" id="loginButton">Login</button>
          </div>
        </form>
      </>
    );
  }
}
export default withRouter(LoginPage);


function postData(userData) {
  let baseUrl = "http://localhost:8080/api/login";
  return new Promise((resolve, reject) => {
    fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(responseJson => {
        resolve(responseJson);
      })
      .catch(error => {
        alert('Email or password wrong!');
      });
  })
};
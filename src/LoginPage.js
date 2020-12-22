import React from 'react';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueOfEmail: '',
      valueOfPassword: '',
      userInformation: []
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
      fetch('/*URL*/')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data })
      })
      .catch(console.log)
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

  handleSubmit(event) {
    event.preventDefault();

    let sendMail = {
      "email": this.state.valueOfEmail,
      "password": this.state.valueOfPassword
    }

    PostData(sendMail).then(result => {
      console.log(result);
    });

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="LoginPage">
          <h1>BAZAAR</h1>
          <input type="text" id="email" name="email" value={this.state.value} onChange={this.handleChangeEmail} placeholder="example@example.com" />
          <input type="text" id="password" name="password" value={this.state.value} onChange={this.handleChangePassword} placeholder="password" />
          <button type="submit" value="Submit" id="loginButton">Login</button>
        </div>
      </form>
    );
  }
}
export default LoginPage;


export function PostData(userData) {
  let BaseUrl = "https://localhost:8080/api/login";
  return new Promise((resolve, reject) => {
  fetch(BaseUrl, {
    method: "POST",
    headers: {
      "Content-Type":"application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(userData)
  })
    .then(response => response.json())
    .then(responseJson => {
      resolve(responseJson);
    })
    .catch(error => {
      reject(error);
    });
  })};
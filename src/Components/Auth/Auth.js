import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { updateUser } from '../../redux/userReducer'
import './Auth.css'

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      user_name: '',
      password: '',
    };

  }


  register = () => {
    const { user_name, password } = this.state
    if (password === ''){alert("Password cannot be empty")}
    else{
    axios.post('/auth/register', { user_name, password })
      .then(res => {
        this.setState({ user_name: '', password: '' })
        this.props.updateUser(res.data)
        this.props.history.push('/Loggedin')
      })
      .catch(err => {
        this.setState({ user_name: '', password: '' })
        alert(err.response.request.response)
      })
      console.log('axios test')
    }
  }

  login = () => {
    const { user_name, password } = this.state
    axios.post('/auth/login', { user_name, password })
      .then(res => {
        this.setState({ user_name: '', password: '' })
        this.props.updateUser(res.data)
        this.props.history.push('/Loggedin')
      })
      .catch(err => {
        this.setState({ user_name: '', password: '' })
        alert(err.response.request.response)
      })
  }


  

  handleUsernameInput = (value) => {
    this.setState({ user_name: value})

  }

  handlePasswordInput = (value) => {
    this.setState({
      password:value
    })
  }

  render() {
    const { user_name, password } = this.state;
    const { user } = this.props;
    return (
      <div className="no-auth">
        <div className='auth-form'>
        <input
          type="text"
          placeholder="Username"
          value={user_name}
          onChange={e => this.handleUsernameInput(e.target.value)} />
        <input
         className='pass'
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => this.handlePasswordInput(e.target.value)} />
        <button onClick={this.login}>Log In</button>
        <button onClick={this.register} id="reg"> Register </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return reduxState
}

export default connect(mapStateToProps,{updateUser})(withRouter(Auth))
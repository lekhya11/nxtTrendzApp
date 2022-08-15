import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    userName: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const UserDetails = {userName, password}

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(UserDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUser = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPassword = () => {
    const {password} = this.state

    return (
      <div className="input-container">
        <label className="label" htmlFor="UserName">
          PASSWORD
        </label>
        <input
          type="text"
          className="input-value"
          value={password}
          id="UserName"
          placeholder="Password"
          onChange={this.onChangePassword}
        />
      </div>
    )
  }

  renderUserName = () => {
    const {userName} = this.state

    return (
      <div className="input-container">
        <label className="label" htmlFor="UserName">
          USERNAME
        </label>
        <input
          type="text"
          className="input-value"
          value={userName}
          id="UserName"
          placeholder="User Name"
          onChange={this.onChangeUser}
        />
      </div>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="mobile-image"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo"
        />

        <form className="form-container" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="form-website-logo"
          />
          {this.renderUserName()}
          {this.renderPassword()}
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm

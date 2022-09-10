import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogin } from "../../Redux/Login/actions";
import Homepage from "../Homepage";

class Login extends PureComponent {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = () => {
    <Homepage />
  }

//   login = (e) => {
//     e.preventDefault();
//     this.setState({ email: "", password: "" });
//     this.props.login(this.state);
//     this.props.history.push(<Homepage/>);
//   };

  render() {
    return (
      <form className="loginForm">
        {this.props.loggedIn ? "Logged in" : ""}
        {this.props.loginProcessing && !this.props.loggedIn ? "Logging.." : ""}
        

        <h1 className="heading">Log In</h1>

        <div className="field">
          <div className="customInput">
            <input
              className="inputfield"
              type="email"
              placeholder="Email.."
              autoComplete="username"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="customInput">
            <input
              className="inputfield"
              type="password"
              placeholder="Password.."
              autoComplete="current-password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <span className="linkfield">Forgot Password?</span>
        </div>
        <div className="field submitfield">
          <Link to="/Homepage"><button>Login</button></Link>
        </div>
        <div className="field signupfield">
          <span className="linkfield">
            
          </span>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    loginProcessing: state.loginProcessing
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(startLogin(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

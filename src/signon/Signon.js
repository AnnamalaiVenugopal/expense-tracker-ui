import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import Register from "./register";

const Signon = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  const handleUserNameChange = (event) => {
    const userName = event.target.value;
    setUserName(userName);
  };
  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setIsValid(validatePassword(newPassword));
  };
  const validatePassword = (password) => {
    const minLength = 6;
    const maxLength = 20;
    return password.length >= minLength && password.length <= maxLength;
  };
  const userLogin = () => {
    console.log("User Name = " + userName);
    console.log("Password = " + password);
  };
  const userRegister = () => {
    <Register userName={userName} password={password}/>
  };
  return (
    <div className="container">
      <div className="box">
        <div className="sign-on justify-content-center">
          <div className="col-md-8">
            <h2 className="header-signon">Expense Tracker</h2>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email Id: </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Email id"
                  onChange={handleUserNameChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className={
                    isValid ? "form-control" : "form-control is-invalid"
                  }
                  id="password"
                  placeholder="Enter password"
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <br />
              <button
                type="submit"
                className="btn btn-outline-primary"
                onClick={userLogin}
              >
                Login
              </button>
              &nbsp;
              <button
                type="submit"
                className="btn btn-outline-success"
                onClick={userRegister}
              >
                Register
              </button>
              <br />
              <br />
              <GoogleLogin
                clientId="963673206719-2man8vtt7prkj0eeh802kqai66956q9q.apps.googleusercontent.com"
                onSuccess={responseMessage}
                onError={errorMessage}
              ></GoogleLogin>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signon;

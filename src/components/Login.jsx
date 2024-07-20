import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("Username:", userName);
    // console.log("Password:", passWord);
    if (userName === userName && passWord === passWord) {
      const loginresponse = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userName,
          password: passWord,
        }),
      });
      const data = await loginresponse.json();

      console.log("loginresponse", loginresponse);
      console.log("data", data);
      if (loginresponse.status === 200) {
        // alert('Suucessfull CREDENTIALS')
        sessionStorage.setItem("username", data.username);
        sessionStorage.setItem("Token", data.token);
        navigate("/home");
      } else if (loginresponse.status === 400) {
        alert("INVALID CREDENTIALS");
      }
    }
  };
  return (
    <>
      <div className="container">
        <div className="signin-form">
          <h2>Login Form</h2>
          <form onSubmit={handleSubmit} method="post">
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={passWord}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
          
    </>
  );
};

export default Login;

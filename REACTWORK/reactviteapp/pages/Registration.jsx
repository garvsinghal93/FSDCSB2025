import { Alert } from "bootstrap";
import React, { use, useState } from "react";

const Registration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [regData, setRegData] = useState({});

    const submitFunct = (e) => {
        e.preventDefault();
        setRegData({ email, password });
        alert(`email is ${email} and password is ${password}`);
        setEmail("");
        setPassword("");
    }

  return (
    <div>
      <h2>This is ragistration page</h2>
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e)=> setEmail(e.target.value)}
          />
          <small id="emailHelp" calss="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label >Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e)=> setPassword(e.target.value)}
          />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button onClick={submitFunct} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registration;
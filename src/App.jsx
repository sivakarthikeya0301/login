import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [message, setMessage] = useState("");

  // Registration
  function handleRegister(e) {
    e.preventDefault();
    setUser({ name, email, password });
    setMessage("");
  }

  // Login
  function handleLogin(e) {
    e.preventDefault();

    if (
      user &&
      loginEmail === user.email &&
      loginPassword === user.password
    ) {
      setMessage("Login Successful!");
    } else {
      setMessage("Invalid Email or Password!");
    }
  }

  return (
    <div>
      <h2>Registration Form</h2>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Register</button>
      </form>

      {user && (
        <div>
          <h3>Registered Details</h3>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}

      <hr />

      <h2>Login Form</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>

      <h3>{message}</h3>
    </div>
  );
}

export default App;
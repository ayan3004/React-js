import React, { useState, useEffect } from 'react';
import { ref, set, onValue } from "firebase/database";
import { database } from './firebaseconfig';


function Registration() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || password.trim() === "") {
      setError("Username and password are required.");
      return;
    }

    const newUserRef = ref(database, `users/${name}`);
    set(newUserRef, { name, password })
      .then(() => {
        setSuccess("User registered successfully!");
        setName("");
        setPassword("");
        setError("");
      })
      .catch((err) => {
        setError("Error registering user. Please try again.");
        console.error(err);
      });
  };

  useEffect(() => {
    const usersRef = ref(database, 'users');
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      const userList = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
      setUsers(userList);
    });
  }, []);

  return (
    <div className="registration-container">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit} className="registration-form">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="Register" />
      </form>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <h2>Registered Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Registration;

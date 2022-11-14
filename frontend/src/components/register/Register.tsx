import React, { useState } from "react";
import "./Register.css";
import Axios from "axios";

// ? Might need
//  interface user {
//   email: string;
//   password: string;
//   name: string;
//   dog: string;
//   bio: string;
//   age: number;
// }

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [dog, setDog] = useState("");
  const [bio, setBio] = useState("");
  const [age, setAge] = useState(0);

  const newUser = {
    email: email,
    password: password,
    name: name,
    dog: dog,
    bio: bio,
    age: age,
  };

  const submitUser = (e: any) => {
    e.preventDefault();
    Axios.post("/register", newUser)
      .then(function (res) {
        alert("You are signed up Woofer!");
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  return (
    <div className="signUp-container">
      <p className="signUp-intro">
        OOOO we have a new member! Welcome Welcome Friend! Fill out some
        standard information below.
      </p>
      <form className="signUp-form">
        <input
          className="signUp-input"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          className="signUp-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <input
          className="signUp-input"
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <input
          className="signUp-input"
          type="text"
          placeholder="Dog Breed"
          value={dog}
          onChange={(e) => {
            setDog(e.target.value);
          }}
        ></input>
        <input
          className="signUp-input"
          type="text"
          placeholder="Bio"
          value={bio}
          onChange={(e) => {
            setBio(e.target.value);
          }}
        ></input>
        <input
          className="signUp-input"
          type="number"
          placeholder="How old is your dog?"
          value={age}
          onChange={(e) => {
            setAge(e.target.valueAsNumber);
          }}
        ></input>
        <button className="signUp-button" onClick={submitUser}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

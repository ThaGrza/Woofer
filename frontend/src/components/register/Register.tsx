import React, { useState } from "react";
import "./Register.css";
import Axios from "axios";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRe, setPasswordRe] = useState("");
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
    if (password === passwordRe) {
      Axios.post("/register", newUser)
        .then(function (res) {
          alert("You are signed up Woofer!");
        })
        .catch(function (err) {
          console.log(err);
        });
    } else {
      alert("Passwords do not match");
    }
  };
  return (
    <div className="signUp-container">
      <p className="signUp-intro">
        OOOO we have a new member! Welcome Welcome Friend! Fill out some
        standard information below.
      </p>
      <form className="sign_up_form">
        <label>
          Email:
          <input
            className="sign_up"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          ></input>
        </label>
        <label>
          Password:
          <input
            className="sign_up"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          ></input>
        </label>
        <label>
          Re-enter Password:
          <input
            className="sign_up"
            type="password"
            placeholder="re-renter password"
            value={passwordRe}
            onChange={(e) => {
              setPasswordRe(e.target.value);
            }}
            required
          ></input>
        </label>
        <label>
          Name:
          <input
            className="sign_up"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          ></input>
        </label>
        <label>
          Dog Breed:
          <input
            className="sign_up"
            type="text"
            placeholder="Dog Breed"
            value={dog}
            onChange={(e) => {
              setDog(e.target.value);
            }}
            required
          ></input>
        </label>
        <label>
          Favorite Toys / Personality:
          <input
            className="sign_up"
            type="text"
            placeholder="Bio"
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
            required
          ></input>
        </label>
        <label>
          How old is your woofer?
          <input
            className="sign_up"
            type="number"
            placeholder="How old is your dog?"
            value={age}
            onChange={(e) => {
              setAge(e.target.valueAsNumber);
            }}
            required
          ></input>
        </label>
        <button className="signUp-button" onClick={submitUser}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

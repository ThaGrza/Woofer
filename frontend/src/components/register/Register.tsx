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
            <div className="sign-up-container">
            <h1 className="sign-up-intro">
            OOOO we have a new member! Welcome Welcome Friend! Fill out some
            standard information below.
            </h1>
            <form className="sign-up-form">
            <label className="sign-up-label" htmlFor="email">
            Email:
            </label>
            <input
            className="sign-up-input"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => {
            setEmail(e.target.value);
            }}
            required
            ></input>
            <label className="sign-up-label" htmlFor="password">
            Password:
            </label>
            <input
            className="sign-up-input"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
    onChange={(e) => {
        setPassword(e.target.value);
    }}
    required
        ></input>
        <label className="sign-up-label" htmlFor="repassword">
        Re-enter Password:
        </label>
        <input
        className="sign-up-input"
        name="repassword"
        type="password"
        placeholder="re-renter password"
        value={passwordRe}
    onChange={(e) => {
        setPasswordRe(e.target.value);
    }}
    required
        ></input>
        <label className="sign-up-label" htmlFor="name">
        Name:
        </label>
        <input
        className="sign-up-input"
        name="name"
        type="text"
        placeholder="Name"
        value={name}
    onChange={(e) => {
        setName(e.target.value);
    }}
    required
        ></input>
        <label className="sign-up-label" htmlFor="breed">
        Dog Breed:
        </label>
        <input
        className="sign-up-input"
        name="breed"
        type="text"
        placeholder="Dog Breed"
        value={dog}
    onChange={(e) => {
        setDog(e.target.value);
    }}
    required
        ></input>
        <label className="sign-up-label" htmlFor="toys">
        Favorite Toys / Personality:
        </label>
        <input
        className="sign-up-input"
        name="toys"
        type="text"
        placeholder="Bio"
        value={bio}
    onChange={(e) => {
        setBio(e.target.value);
    }}
    required
        ></input>
        <label className="sign-up-label" htmlFor="age">
        How old is your woofer?
        </label>
        <input
        className="sign-up-input"
        name="age"
        type="number"
        placeholder="How old is your dog?"
        value={age}
    onChange={(e) => {
        setAge(e.target.valueAsNumber);
    }}
    required
        ></input>
        <button className="signUp-button" onClick={submitUser}>
        Sign Up
        </button>
        </form>
        </div>
        );
}

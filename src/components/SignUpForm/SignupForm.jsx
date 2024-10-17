import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../../supabaseClient";
import s from "./SignupForm.module.scss";

export const SignupForm = () => {
  const handleSignup = async (e) => {
    e.preventDefault();

    const userEmail = e.target.email.value;
    const username = e.target.username.value;
    const userPassword = e.target.password.value;

    console.log(userEmail);
    console.log(userPassword);
    console.log(username);

    const { data, error } = await supabase.auth.signUp(
      {
        email: userEmail,
        password: userPassword,
      },
      {
        data: {
          username,
        },
      }
    );

    if (error) {
      console.error(`Error in sign up: ${error.message}`);
    } else {
      console.log(`Signup successful: ${data}`);
    }
  };

  return (
    <form onSubmit={(e) => handleSignup(e)} className={s.formStyling}>
      <header>
        <h2>Sign up</h2>
        <span>
          Already have an Account? <Link to="/">Login</Link>
        </span>
      </header>
      <fieldset>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" required />
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" required />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" required />
      </fieldset>
      <input type="submit" value="Sign Up" />
      <input type="reset" value="Reset" />
    </form>
  );
};

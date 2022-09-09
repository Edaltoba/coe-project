import React, { useState } from "react";
import Styles from "../../styles/signUp.module.scss";
import Animation from "../../components/animation/animation.jsx";
import Link from "next/link";
import { Formik } from "formik";

const defaultFormFields = {
  fullname: "",
  role: {},
  location: {},
  industry: "",
  email: "",
  password: "",
};
const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { fullname, role, location, industry, email, password } = formFields;

  //HTML Element > React (Typescript)

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
  };

  return (
    <section className={Styles.container}>
      <Animation />
      <div className={Styles.login}>
        <div className={Styles.logo}>Logo?</div>
        <div className={Styles.column}>
          <input type="text" name="fullname" placeholder="Fullname" />
          <input type="select" name="role" placeholder="Role" />
        </div>
        <div className={Styles.column}>
          <input type="text" name="location" placeholder="Location" />
          <input type="text" name="industry" placeholder="Industry" />
        </div>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <label htmlFor="password" id="password"></label>
        <input type="password" name="password" placeholder="Repeat Password" />
        <label htmlFor="password" id="password"></label>
        <button className={Styles.button} type="button">
          Sign Up
        </button>
        <footer className={Styles.footer}>
          <span>
            Already got an account? <Link href="/auth/signIn">Login here!</Link>
          </span>
        </footer>
      </div>
    </section>
  );
};

export default SignUp;

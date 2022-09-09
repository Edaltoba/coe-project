import { useState } from "react";
import Styles from "../../styles/signIn.module.scss";
import Animation from "../../components/animation/animation.jsx";
import Social from "../../components/socialButtons/socialButtons";
import Link from "next/link";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

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
        <input type="text" name="username" placeholder="Username" id="user" />
        <label htmlFor="username" id="user"></label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          id="password"
        />
        <label htmlFor="password" id="password"></label>
        <button className={Styles.button} type="button">
          Login
        </button>
        <Social />
        <footer className={Styles.footer}>
          <span>
            Don't have an account? <Link href="/auth/signUp">Sign up!</Link>
          </span>
        </footer>
      </div>
    </section>
  );
};

export default SignIn;

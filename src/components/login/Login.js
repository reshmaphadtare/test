// import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import styles from "./Login.module.css";
import Validation from "./Validation";
let authenticate="false";
const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const value = e.target.value;
    try {
      setData((prevState) => ({
        ...prevState,
        [e.target.name]: value,
      }));
      if (data) {
        setErrors(Validation(data));
        authenticate="true";
      }
    } catch (err) {
      return err;
    }
  };

  const handleSubmit = (e) => {
    debugger
    e.preventDefault();
    console.log(data.email, data.password);
    setErrors(Validation(data));
    console.log("tetst",authenticate)
    if(authenticate=="true"){
    navigate('/SuccessfulLogin');
   
  }
  };

  return (
    // <div className={styles.loginForm}>
    //   <form onSubmit={handleSubmit}>
    //     <label htmlFor="email" className={styles.formlabel}>
    //       Email <br/>
    //       <input
    //         placeholder="Enter email"
    //         type="email"
    //         name="email"
    //         value={data.email}
    //         onChange={handleChange}
    //       />
    //     </label>
    //     {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
    //     <label htmlFor="password">
    //       Password <br/>
    //       <input
    //         placeholder="Enter password"
    //         type="password"
    //         name="password"
    //         value={data.password}
    //         onChange={handleChange}
    //       />
    //     </label>  <br/>
    //     {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
    //     <button  type="submit" className={styles.loginButton}>
    //       Login <br/>
    //     </button>
    //   </form>
    // </div>
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Email</label>
        <input
          className={styles.formField}
          type="text"
          placeholder="Enter email"
          aria-label="Email field"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        {errors.email && (
          <p className={styles.formFieldErrorMessage}>{errors.email}</p>
        )}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Password</label>
        <input
          className={styles.formField}
          type="password"
          placeholder="Enter Password"
          aria-label="Password field"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>
      <div className={styles.formActions}>
        <button className={styles.formSubmitBtn} type="submit">
          Login
        </button>
        <Link to="/SuccessfulLogin">Hiiiiiiiiiiiiiiii</Link>
      </div>
    </form>
  );
};

export default Login;

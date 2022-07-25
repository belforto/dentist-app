import React from "react";
import Login from "../../components/login/Login";
import style from './login.module.scss'

export default function index() {
  return (
    <div className={style.loginContainer}>
      <Login />
    </div>
  );
}

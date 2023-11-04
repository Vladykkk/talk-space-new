import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";
import { useRegisterMutation } from "./authApiSlice";

import "../../assets/css/auth.css";

import AuthLayout from "../../components/AuthLayout";
import Button from "../../components/Button";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [matchPwd, setMatchPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [register, { isLoading }] = useRegisterMutation();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await register({ user, pwd }).unwrap();
      dispatch(setCredentials({ ...userData, user }));
      setUser("");
      setPwd("");
      setMatchPwd("");
      navigate("/welcome");
    } catch (err) {
      if (!err?.originalStatus) {
        setErrMsg("No Server Response");
      } else if (err.originalStatus?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  const handleUserInput = (e) => setUser(e.target.value);
  const handlePwdInput = (e) => setPwd(e.target.value);
  const handleMatchPwdInput = (e) => setMatchPwd(e.target.value);

  const content = isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <AuthLayout>
      <section className="register">
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>

        <h1 className="title">Реєстрація!</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Ім'я користувача:</label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={handleUserInput}
            value={user}
            required
          />

          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            onChange={handlePwdInput}
            value={pwd}
            required
          />

          <label htmlFor="confirm_password">Підтвердження паролю:</label>
          <input
            type="password"
            id="confirm_password"
            onChange={handleMatchPwdInput}
            value={matchPwd}
            required
          />

          <button
            className="authButton"
            disabled={
              !user || !pwd || !matchPwd || pwd !== matchPwd ? true : false
            }
          >
            Зареєструватись
          </button>
        </form>
      </section>
    </AuthLayout>
  );

  return content;
};

export default Register;

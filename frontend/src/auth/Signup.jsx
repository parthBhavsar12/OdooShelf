import { useEffect, useState } from "react";
import "./auth.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../state/authSlice";
import { Button } from "@/components/ui/button";
export const Signup = () => {
  // const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const error = useSelector((state) => state.auth.error);
  const submitLogin = (e) => {
    e.preventDefault();
    dispatch(signup({ email, password, confirmPassword }));
  };
  useEffect(() => {
    // If user is logged in, navigate to homepage
    if (isLoggedIn) {
      navigate("/", { replace: true });
    }
  }, [isLoggedIn]);
  return (
    <>
      <div className="auth-form">
        <div className="signup-form">
          <div className="auth-heading">
            <h1>Welcome to Book</h1>
            <p>Please sign up to continue.</p>
          </div>
          <form className="form-fields" onSubmit={submitLogin}>
            {/* <div className="form-field">
              <label htmlFor="fullName">Enter Full Name</label>
              <input
                type="text"
                id="fullName"
                className="form-input"
                placeholder="e.g. Virat Kohli"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div> */}
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="abc@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                className="form-input"
                placeholder="confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <Button>Sign up</Button>
            <p style={{ textAlign: "center" }}>
              Already started your journery ?{" "}
              <Link className="underline" to="/login">
                login here
              </Link>
              <p className="m-2">OR</p>
              Are you Librarain ?{" "}
              <Link className="underline" to="/librarian-login">
                login here
              </Link>
            </p>
            {/* <p style={{ textAlign: "center", textDecoration: "underline" }}>
              OR
            </p>
            <p style={{ textAlign: "center" }}>
              Are u doctor? <NavLink to="/signup-doctor">Join us</NavLink>
            </p> */}
            {error && <p style={{ textAlign: "center" }}>{error.message}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

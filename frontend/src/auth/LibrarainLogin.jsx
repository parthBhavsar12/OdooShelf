import { useEffect, useState } from "react";
import "./auth.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { login } from "../state/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const LibrarainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn) ?? false;
  const error = useSelector((state) => state.auth.error);
  const notify = () => {
    // toast("Default Notification !");

    // toast.success("Success Notification !", {
    //   position: "top-right",
    // });

    toast.error(error && error.message, {
      position: "top-right",
    });

    // toast.warn("Warning Notification !", {
    //   position: "bottom-left",
    // });

    // toast.info("Info Notification !", {
    //   position: "bottom-center",
    // });

    // toast("Custom Style Notification with css class!", {
    //   position: "bottom-right",
    //   className: "foo-bar",
    // });
  };
  const submitLogin = async (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
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
        <div className="login-form">
          <div className="auth-heading">
            <h1>Welcome back!</h1>
            <p>Please sign in to continue to Odoo Shelf.</p>
          </div>
          <form className="form-fields" onSubmit={submitLogin}>
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
            <Button onClick={notify}>Log in</Button>
            <p style={{ textAlign: "center" }}>
              Are u new user?{" "}
              <Link className="underline" to="/signup">
                sign up here
              </Link>
            </p>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              // transition: Bounce,
            />

            {/* {error && <p>{error.message}</p>} */}
          </form>
        </div>
      </div>
    </>
  );
};

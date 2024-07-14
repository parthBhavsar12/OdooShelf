import { useEffect, useState } from "react";
import "./auth.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { login } from "../state/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn) ?? false;
  const error = useSelector((state) => state.auth.error);
  // const [userRole, setUserRole] = useState("customer");
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

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../app.css";
// import { useDispatch } from "react-redux";
// import { login } from "@/state/authSlice";
// // import { useFormState, useFormStatus } from 'react-dom';
// export const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn) ?? false;
//   const error = useSelector((state) => state.auth.error);
//   const submitLogin = async (e) => {
//     e.preventDefault();
//     dispatch(login({ email, password }));
//   };
//   useEffect(() => {
//     // If user is logged in, navigate to homepage
//     if (isLoggedIn) {
//       navigate("/", { replace: true });
//     }
//   }, [isLoggedIn]);
//   return (
//     <main className="container mx-auto mt-36 flex max-w-7xl justify-center">
//       <div className="flex flex-col p-4 lg:w-1/3">
//         <div className="text-center">
//           <h1 className="text-3xl font-bold">Login</h1>
//           <p className="text-gray-500">
//             Enter your email below to login to your account
//           </p>
//         </div>
//         <div className="mt-6">
//           <LoginForm />
//         </div>
//         <div className="mt-4 text-center text-sm">
//           Don&apos;t have an account?{" "}
//           <Link className="underline" to="/signup">
//             Sign up
//           </Link>
//         </div>
//       </div>
//     </main>
//   );
// };
// function LoginForm() {
//   //   const [state, action] = useFormState(login, undefined);
//   const handleSubmit = () => {};
//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="flex flex-col gap-2">
//         <div>
//           <Label htmlFor="email">Email</Label>
//           <Input
//             id="email"
//             name="email"
//             placeholder="m@example.com"
//             type="email"
//           />
//           {/* {state?.errors?.email && (
//             <p className="text-sm text-red-500">{state.errors.email}</p>
//           )} */}
//         </div>
//         <div className="mt-4">
//           <div className="flex items-center justify-between">
//             <Label htmlFor="password">Password</Label>
//             <Link className="text-sm underline" to="#">
//               Forgot your password?
//             </Link>
//           </div>
//           <Input id="password" type="password" name="password" />
//           {/* {state?.errors?.password && (
//             <p className="text-sm text-red-500">{state.errors.password}</p>
//           )} */}
//         </div>
//         {/* {state?.message && (
//           <p className="text-sm text-red-500">{state.message}</p>
//         )} */}
//         <LoginButton />
//       </div>
//     </form>
//   );
// }

// export function LoginButton() {
//   //   const { pending } = useFormStatus();
//   const [pending, setPending] = useState(false);
//   return (
//     <Button aria-disabled={pending} type="submit" className="mt-4 w-full">
//       {pending ? "Submitting..." : "Log in"}
//     </Button>
//   );
// }

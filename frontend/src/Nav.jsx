import React, { useEffect } from "react";
import "./nav.css";
// import '../../css/var.css';
import Logo from "./assets/fav-icon.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkUser, logout } from "./state/authSlice";
import { Button } from "./components/ui/button";
// import { Link } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  useEffect(() => {
    dispatch(checkUser())
      .then(() => {
        // setUserRole(user || "patient");
        // setCheckedUserStatus(true);
        // console.log(user);
      })
      .catch((error) => {
        console.error("Error checking user status:", error);
      });
  }, [dispatch]);
  const handleLogout = async () => {
    try {
      // Dispatch the logoutUser action
      await dispatch(logout());
      navigate("/login", { replace: true });
      // Redirect or perform any other action after successful logout
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <>
      <nav>
        <ul>
          <div className="left">
            <li>
              <Link to="/">
                <img src={Logo} alt="logo" className="logo" />
                OdooShelf
              </Link>
            </li>
          </div>
          <div className="center">
            <li>
              <Link to="books">
                <i class="zmdi zmdi-library"></i> Books
              </Link>
            </li>
            <li>
              <Link to="#">
                <i class="zmdi zmdi-notifications"></i> Notifications
              </Link>
            </li>
          </div>
          <div className="right">
            <li>
              {isLoggedIn ? (
                <Button className="nav-btn" onClick={handleLogout}>
                  Log out
                </Button>
              ) : (
                <NavLink to="signup">
                  {/* Sign up */}
                  <Button className="nav--btn">Sign up</Button>
                </NavLink>
              )}
              {/* <button className="btnLogout">
                <i class="zmdi zmdi-power"></i>Log Out
              </button> */}
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Nav;

import React from 'react';
import './nav.css';
import '../../css/var.css';
import Logo from './../../assets/fav-icon.png';
// import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav>
        <ul>
          <div className="left">
            {/* <li><Link to="#"><img src={Logo} alt="logo" className="logo"/>OdooShelf</Link></li> */}
            <li><img src={Logo} alt="logo" className="logo"/>OdooShelf</li>
          </div>
          <div className="center">
            {/* <li><Link to="#"><i class="zmdi zmdi-library"></i> Books</Link></li> */}
            <li><i class="zmdi zmdi-library"></i> Books</li>
            {/* <li><Link to="#"><i class="zmdi zmdi-notifications"></i> Notifications</Link></li> */}
            <li><i class="zmdi zmdi-notifications"></i> Notifications</li>
          </div>
          <div className="right">
            <li><button className='btnLogout'><i class="zmdi zmdi-power"></i>Log Out</button></li>
          </div>
        </ul>
      </nav>
    </>
  )
}

export default Nav

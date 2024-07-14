import React from 'react';
import './nav.css';
import '../../css/var.css';
// import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav>
        <ul>
          <div className="left">
            {/* <li><Link to="#"><i class="zmdi zmdi-home"></i><img src="" alt="logo" /></Link></li> */}
            <li><i class="zmdi zmdi-home"></i><img src="" alt="logo" /></li>
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

import React from 'react';
import './nav.css';
import '../../css/var.css';

function Nav() {
  return (
    <>
      <nav>
        <ul>
          <div className="left">
            <li><i class="zmdi zmdi-home"></i><img src="https://www.google.com/imgres?q=library%20logo&imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20200701%2Foriginal%2Fpngtree-hand-drawn-cartoon-polygon-library-bookshelf-illustration-png-image_5357151.jpg&imgrefurl=https%3A%2F%2Fpngtree.com%2Fso%2Flibrary-logo&docid=rbz_vd8Qa-bn9M&tbnid=MtvvIu6OddhHrM&vet=12ahUKEwj35qTDy6WHAxXmXmwGHQthCoQQM3oECH4QAA..i&w=1200&h=1200&hcb=2&ved=2ahUKEwj35qTDy6WHAxXmXmwGHQthCoQQM3oECH4QAA" alt="logo" /></li>
          </div>
          <div className="center">
            <li><i class="zmdi zmdi-library"></i>Books</li>
            <li><i class="zmdi zmdi-notifications"></i>Notifications</li>
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

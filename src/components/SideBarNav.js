import React from "react";
import { NavLink } from "react-router-dom";




const SideBarNav = () => (
    <nav className="side-bar">
      <div className="side-bar__content" >
        <NavLink to='/dashboard' className='side-bar__link' activeClassName="active">
          <img src="./images/home.svg" />
          <p>Home</p>
        </NavLink>
        <NavLink to='/expense' className='side-bar__link' activeClassName="active">
          <img src="./images/expense.svg" />
          <p>Expense</p>
        </NavLink>
        <NavLink to='/income' className='side-bar__link' activeClassName="active">
          <img src="./images/wallet-icon.svg" />
          <p>Income</p>
        </NavLink>
      </div>
    </nav>
)

export default SideBarNav;
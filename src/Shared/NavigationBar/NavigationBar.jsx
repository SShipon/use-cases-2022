import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/icon/logo (2).svg'
import logo2 from '../../assets/icon/g2-winter-2022 (1).svg'
const NavigationBar = () => {
    const navBarItems = <React.Fragment>
            <li><Link to='/'>Use cases</Link></li>
            <li><Link>Pricing</Link></li>
            <li><Link>Resources</Link></li>
            <li><Link>What's new</Link></li>
            <li><Link>Start Ryting<i class="fa-solid fa-arrow-right font-bold"></i></Link></li>     
    </React.Fragment>
    return (
        <div className="navbar bg-base-100 mx-16">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navBarItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl"><img className='mr-2' style={{width:'30px', height:'30px'}} src={logo} alt="" /> <span className='text-2xl font-bold mr-1'>Rytr</span> <img style={{width:'30px', height:'30px'}} src={logo2} alt="" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navBarItems}
          </ul>
        </div>
      </div>
    );
};

export default NavigationBar;
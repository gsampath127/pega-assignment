import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { SidebarTopItems, SidebarBottomItems } from './SidebarData';
import '../App.css';
import './Sidebar.css';
import { IconContext } from 'react-icons';
import {Link} from 'react-router-dom';

const getsidebarItem =(item, sidebar)=>{
    return (
        <>
        <li key={item.title} className={item.className}>
             <Link to={item.path}>{item.icon} <span >{ sidebar? item.title :null}</span></Link>
        </li>
        </>
    )
}
function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = ()=> setSidebar(!sidebar);
    return (
        <div className="sidebar">
        <IconContext.Provider value={{ color: '#fff' }}>
        <nav className={sidebar? 'nav-menu active': 'nav-menu'}>
            <ul className="nav-menu-items" onMouseEnter={showSidebar} onMouseLeave={showSidebar}>
                <li className='navbar-toggle'>
                    <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars/>
                    </Link>
                </li>
                {SidebarTopItems.map((item)=> getsidebarItem(item, sidebar))}
                <ul className="nav-menu-items-bottom"  >
                   {SidebarBottomItems.map((item)=> getsidebarItem(item, sidebar))}
                </ul>
            </ul>
            

        </nav>
        </IconContext.Provider>
        </div>
    )
}

export default Sidebar

import React from 'react'
import { Link ,useLocation} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'

import { logout } from '../../redux/actions/authAction'

import Avatar from '../Avatar'

const Menu = () => {

    const {auth,theme} = useSelector(state=>state)
    const dispatch = useDispatch()

    const { pathname } = useLocation()

    const handleLogout = () => {
        dispatch(logout())
    }
    const navLink = [
        { label: "Home", icon: 'home', path: '/' },
        { label: "Message", icon: 'near_me', path: '/message' },
        { label: "Discover", icon: 'explore', path: '/discover' },
        { label: "Notify", icon: 'favorite', path: '/notify' }
    ]

    const isActive = (pn) => {
        if (pn === pathname) return 'active'
    }


    return (
        <div className="menu">
        <ul className="navbar-nav flex-row  align-items-center ">
            {
                navLink.map((link, index) => (
                    <li key={index} className={`nav-item px-2 ${isActive(link.path)}`}>
                        <Link className="nav-link" to={link.path}>
                            <span className="material-icons">
                                {link.icon}
                            </span>
                        </Link>
                    </li>
                ))
            }


            <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <Avatar src={auth.user.avatar} size="medium-avatar" />
                </span>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to={`/profile/${auth.user._id}`}>Profile</Link>

                    {/* label của input theme ở component App.js */}
                    <label htmlFor='theme' className='dropdown-item'
                        onClick={() => dispatch({ type: 'THEME', payload: !theme })}>
                        {theme ? 'Light mode' : 'Dark mode'}
                    </label>

                    <div className="dropdown-divider"></div>

                    <Link className="dropdown-item" to="/"
                        onClick={handleLogout}>
                        Logout
                    </Link>
                </div>
            </li>

        </ul>
    </div>
    )
}

export default Menu

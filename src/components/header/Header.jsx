import {
    Link, NavLink, Outlet
} from "react-router-dom";
import * as selectors from "../../store/profile/selectors";

import { useSelector, useDispatch } from 'react-redux/es/exports';

import styles from "./Header.module.css";
import { Button } from "@mui/material";
import { logOut } from "../../services/firebase";


export function Header() {
    const navigate = [
        {
            id: 1,
            name: 'Main',
            to: '/'
        },
        {
            id: 2,
            name: 'Chats',
            to: '/chats'
        },
        {
            id: 3,
            name: 'Profile',
            to: '/profile'
        },
        {
            id: 4,
            name: 'Gists',
            to: '/gists'
        },
        {
            id: 5,
            name: 'Login',
            to: '/login'
        },
        {
            id: 6,
            name: 'Sign Up',
            to: '/signup'
        }
    ]

    const isAuth = useSelector(selectors.selectIsAuth)
    const userName = useSelector(selectors.getUserName)

    const onLogoutClick = async (event) => {
        try {
            await logOut()
            navigate('/login')
        }
        catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <header>
                <nav>
                    <div className={styles.nav}>
                        {/* with redirects
                    <a className={styles.navItem} href={`/`}>Home</a>
                    <a className={styles.navItem} href={`chats`}>Chats</a>
                    <a className={styles.navItem} href={`profile`}>Profile</a> 
                    */}

                        {/* <Link className={styles.navItem} to='/' >Home</Link>
                    <Link className={styles.navItem} to='chats' >Chats</Link>
                    <Link className={styles.navItem} to='profile' >Profile</Link> */}

                        {
                            navigate.map((item) =>
                                <NavLink
                                    key={item.id}
                                    className={styles.navItem}
                                    style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
                                    to={item.to}
                                >
                                    {item.name}
                                </NavLink>)
                        }

                        {isAuth && (<Button onClick={onLogoutClick} variant='contained'>Logout</Button>)}
                        {userName && (<div className={styles.userName}>{userName}</div>)}
                    </div>
                </nav>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    )
}
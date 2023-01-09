import {
    Link, NavLink, Outlet
} from "react-router-dom";

import styles from "./Header.module.css";


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
        }
    ]

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

                    </div>
                </nav>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    )
}
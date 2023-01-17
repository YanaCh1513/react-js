import { Link } from "react-router-dom"
import styles from "./HomePage.module.css"
import appStyles from './../../App.module.css'


export function HomePage() {
    return (<>
        <div className={[styles.container, appStyles.lazureContainer].join(' ')}>
            <h3> Home</h3>
            <div>
                <Link to="/login">Sign In</Link>
            </div>
            <div>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    </>)
}
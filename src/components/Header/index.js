// Import - Styles
import styles from './index.module.css'

// Import - Images
import logo from '../../img/logo.png'
import avatar from '../../img/avatar.png'

function Header({black}) {
    return (
        <header className={black ? styles.black : ''}>
            <div className={styles.logo}>
                <a href="/">
                    <img src={logo} alt="logo" />
                </a>
            </div>

            <div className={styles.user}>
                <a href="/">
                    <img src={avatar} alt="avatar" />
                </a>
            </div>
        </header>
    )
}

export default Header
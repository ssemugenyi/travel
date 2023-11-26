import React from "react"
import styles from "./Header.module.css"
import Navigation from "./Navigation/Navigation"

const Header = () => {
    return (
        <div className={styles.header}>
            <div>
                <h2 style={{ color: "#4468e2" }}>Proto</h2>
            </div>
            <div>
                <Navigation />
            </div>
            <div className={styles.header__button}>
                <button type="button">Login</button>
            </div>
        </div>
    )
}

export default Header

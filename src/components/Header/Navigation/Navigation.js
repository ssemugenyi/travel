import React from "react"
import styles from "./Navigation.module.css"

const Navigation = () => {
    return (
        <ul className={styles.nav_list__items}>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/places">Places</a>
            </li>
            <li>
                <a href="/careers">Careers</a>
            </li>
            <li>
                <a href="/blog">Blog</a>
            </li>
        </ul>
    )
}

export default Navigation

import React from "react"
import styles from "./Filter.module.css"

const Filter = () => {
    return (
        <div className={styles.filter}>
            <form className={styles.form}>
                <div className={styles.form_control}>
                    <label htmlFor="search">Where You Want to go</label>
                    <input
                        type="text"
                        id="search"
                        placeholder="Search your location"
                    />
                </div>
                <div
                    className={styles.form_control}
                    style={{
                        borderLeft: "1px solid #000",
                        borderRight: "1px solid #000",
                    }}
                >
                    <label htmlFor="search">Check-In</label>
                    <input type="date" id="search" placeholder="Add date" />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="search">Check-out</label>
                    <input type="date" id="search" placeholder="Add date" />
                </div>
                <div className={styles.filter__button}>
                    <button type="button">Explore now</button>
                </div>
            </form>
        </div>
    )
}

export default Filter

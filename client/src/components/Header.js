import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css'

const Header = (props) => {
    const { pageInd } = props;
    return (
        <header className={styles.header}>
            <h1>{pageInd}</h1>
            {
                pageInd === "Pirat Crew" ?
                <Link className={styles.headerlink} to= {"/pirate/new"}> Add Pirat</Link>:
                <Link className={styles.headerlink} to= {"/pirates"}> Crew Board</Link> 
            }
        </header> 
    )
}

export default Header;
import React, {useContext, useEffect} from 'react';
import styles from '../../css/header.module.css';
import {NavLink as Navlink} from 'react-router-dom';

import { NavToggleContext } from '../../Contexts/NavToggleContext';

import facebookIcon from '../../img/facebook.svg';
import twitterIcon from '../../img/twitter.svg';
import instagramIcon from '../../img/instagram.svg';
import cart from '../../img/cart.svg';
import menu from '../../img/menu.svg';

function Header() {
    const {isNavOpen, changeNavStatus} = useContext(NavToggleContext);

    const width = window.innerWidth;
    
    useEffect(() => {
        const nav = document.getElementById("nav");
        if(isNavOpen) {
            if(nav != null) nav.style.display = "unset";
        } else {
            if(nav != null) nav.style.display = "none";
        }
    }, [isNavOpen]);

    //Desktop Device
    if(width >= 1024) {
        return(
            <React.Fragment>
            <div className={styles.upperHeader}>
                <div className={styles.info}>
                    <p>Ph No. :9876543210</p>
                    <p>Email : abc@gmail.com</p>
                </div>
    
                <div className={styles.socialMedia}>
                    <img src={facebookIcon} alt="facebook" />
                    <img src={twitterIcon} alt="twitter" />
                    <img src={instagramIcon} alt="instagram" />                
                </div>
            </div>
    
            <div className={styles.mainHeaderWrapper}>
                <div className= {styles.mainHeader}>
                <h1>Logo</h1>
                <form className={styles.searchBox}>
                    <input type="search" placeholder="Search..." />
                    <input type="button" value="Search" />
                </form>
                <img src={cart} alt="cart" />
                </div>
            </div>
    
            <nav>
                <ul>
                    <Navlink to="/" exact activeClassName="iconActive" className={styles.link}><li>Home</li></Navlink>
                    <Navlink to="/shop" activeClassName="iconActive" className={styles.link}><li>Shop</li></Navlink>
                    <Navlink to="/contact" activeClassName="iconActive" className={styles.link}><li>Contact</li></Navlink>
                </ul>
            </nav>
            </React.Fragment>
        );
    }
    //Mobile Device
    else {
        return (
            <React.Fragment>
                <div className={styles.mobMainHeader}>
                    <h1>LOGO</h1>
                    <img src={menu} alt="menu" onClick={() => changeNavStatus()} />
                        <ul id="nav">
                            <Navlink to="/" exact activeClassName="iconActive" className={styles.link} onClick={() => changeNavStatus()}><li>Home</li></Navlink>
                            <Navlink to="/shop" activeClassName="iconActive" className={styles.link} onClick={() => changeNavStatus()}><li>Shop</li></Navlink>
                            <Navlink to="/contact" activeClassName="iconActive" className={styles.link} onClick={() => changeNavStatus()}><li>Contact</li></Navlink>
                            <input type="button" value="Close" onClick={() => changeNavStatus()} />
                        </ul>
                </div>
                <div className={styles.cart}>
                    <img src={cart} className={styles.mobCart} alt="cart" />
                </div>
            </React.Fragment>
        );
    }
}

export default Header;
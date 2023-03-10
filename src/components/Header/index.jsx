import React from 'react'
import { useCart } from '../../hooks/useCart'
import {Link} from "react-router-dom";
import styles from './Header.module.scss'

function Header(props) {

   const {totalPrice} = useCart()

    return (
        <header className={styles.header}>
            <Link to="">
                <div className={styles.headerLogo}>
                    <img width={40} height={40} src="img/logo.png" alt="logo" />
                    <div>
                        <h3>React Sneakers</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <ul className={styles.headerRight}>
            <li onClick={props.onClickCart}>
                <img width={18} height={18} src="img/cart.svg" alt="cart" />
                <span>{totalPrice} руб.</span>
            </li>
            <li>
                <Link to="favorite"><img width={18} height={18} src="img/favorite.svg" alt="favorite" /></Link>
            </li>
            <li>
                <Link to="orders"> <img width={18} height={18} src="img/user.svg" alt="user" /> </Link>
            </li>
            </ul>
        </header>
    )
}

export default Header
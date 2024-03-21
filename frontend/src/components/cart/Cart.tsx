import styles from './Cart.module.css'
import {IoCloseOutline} from "react-icons/io5";
import MyButton from "../../UI/button/MyButton.tsx";
import { useState} from "react";
import List from "../list/List.tsx";
import CartItem from "./cartItem/cartItem.tsx";


const Cart = () => {
    const [cartState, setCartState] = useState<boolean>(false)
    const handleClose = () =>{
        setCartState(!cartState)
    }
    return (
        <div>
            <div className={`${styles.cart} ${cartState ? styles.active : ''}`} onClick={() => handleClose()}></div>
            <div className={`${styles.cart__body} ${cartState ? styles.active : ''}`}>
                <div className={styles.cart__icon} onClick={() => handleClose()}>Корзина</div>
                <div className={`${styles.cart__content} ${cartState ? styles.active : ''}`}>
                    <IoCloseOutline size={45} className={styles.cart__close} onClick={() => handleClose()}
                                    style={{cursor: "pointer"}}/>
                    <div className={styles.cart__header}>
                        <div>
                            <h3>Корзина</h3>
                            <p className={styles.cart__subtitle}>В вашей корзине 1 товар</p>
                        </div>
                    </div>
                    <div className={styles.cart__items}>
                        <List item={[1,2,3]} renderItem={(index)=><CartItem key={index}/>} type={'cart'}/>
                    </div>
                    <div className={styles.cart__footer}>
                        <p>Итого:</p>
                        <h3>880 руб.</h3>
                        <MyButton>Перейти к оформлению</MyButton>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Cart;
import styles from './Cart.module.css'
import {IoCloseOutline} from "react-icons/io5";
import MyButton from "../../UI/button/MyButton.tsx";
import { useState} from "react";
import List from "../list/List.tsx";
import CartItem from "./cartItem/cartItem.tsx";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import {ICartItem} from "../../store/cart/cart.types.ts";



const Cart = () => {
    const [cartState, setCartState] = useState<boolean>(false)
    const cart = useTypedSelector(state => state.cart)
    console.log(cart)

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
                            <p className={styles.cart__subtitle}>В вашей корзине <strong>{cart.length} </strong> {cart.length === 1 ? 'товар' : cart.length < 5 ? 'товара' : 'товаров'} </p>
                        </div>
                    </div>
                    <div className={styles.cart__items}>
                        <List item={cart} renderItem={(item:ICartItem, index)=><CartItem key={index} cartItem={item}/>} type={'cart'}/>
                    </div>
                    <div className={styles.cart__footer}>
                        <p>Итого:</p>
                        <h3>0 руб.</h3>
                        <MyButton>Перейти к оформлению</MyButton>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Cart;
import styles from './Cart.module.css'
import {IoCloseOutline} from "react-icons/io5";
import  { useMemo, useState} from "react";
import List from "../list/List.tsx";
import CartItem from "./cartItem/cartItem.tsx";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import {ICartItem} from "../../store/cart/cart.types.ts";
import {CiShoppingCart} from "react-icons/ci";
import OrderButton from "../OrderButton.tsx";
import { setLocalStorage} from "../../utils/localStorageUtil.ts";



const Cart = () => {
    const [cartState, setCartState] = useState<boolean>(false)
    const cart = useTypedSelector(state => state.cart)
    const [fullPrice, setFullPrice] = useState<number>(0)

    useMemo(()=>{
        setFullPrice(0)
        cart.items.forEach(item =>{
            setFullPrice(prevState => prevState + item.price)
        })
        setLocalStorage(cart)
    }, [cart])

    const handleClose = () =>{
        setCartState(!cartState)
    }


    return (
        <div>
            <div className={`${styles.cart} ${cartState ? styles.active : ''}`} onClick={() => handleClose()}></div>
            <div className={`${styles.cart__body} ${cartState ? styles.active : ''}`}>
                <div className={styles.cart__pick} onClick={() => handleClose()}>
                    <div className={styles.cart__icon}>
                        <CiShoppingCart size={40}/>
                        <div className={styles.cart__count}>{cart.items.length}</div>
                    </div>
                </div>
                <div className={`${styles.cart__content} ${cartState ? styles.active : ''}`}>
                    <IoCloseOutline size={45} className={styles.cart__close} onClick={() => handleClose()}
                                    style={{cursor: "pointer"}}/>
                    <div className={styles.cart__header}>
                        <div>
                            <h3>Корзина</h3>
                            <p className={styles.cart__subtitle}>В вашей корзине <strong>{cart.items.length} </strong> {cart.items.length === 1 ? 'товар' : cart.items.length < 5 && cart.items.length !=0  ? 'товара' :'товаров'} </p>
                        </div>
                    </div>
                    <div className={styles.cart__items}>
                        <List item={cart.items} renderItem={(item:ICartItem, index)=><CartItem key={index} cartItem={item}/>} type={'cart'}/>
                    </div>
                    <div className={styles.cart__footer}>
                        <p>Итого:</p>
                        <h3>{fullPrice} руб.</h3>
                        <div onClick={()=> setCartState(false)}>
                            <OrderButton/>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Cart;
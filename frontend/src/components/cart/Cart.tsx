import styles from './Cart.module.css'
import {IoCloseOutline} from "react-icons/io5";
import  { useMemo, useState} from "react";
import List from "../list/List.tsx";
import CartItem from "./cartItem/cartItem.tsx";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import {ICartItem} from "../../store/cart/cart.types.ts";
import {CiShoppingCart} from "react-icons/ci";
import { setLocalStorage} from "../../utils/localStorageUtil.ts";
import MyButton from "../../UI/button/MyButton.tsx";
import MyModal from "../../UI/modal/MyModal.tsx";
import {useActions} from "../../hooks/useActions.ts";
import OrderForm from "../order/OrderForm.tsx";




const Cart = () => {
    const [cartState, setCartState] = useState<boolean>(false)
    const [fullPrice, setFullPrice] = useState<number>(0)
    const cart = useTypedSelector(state => state.cart)
    const {visible} = useTypedSelector(state => state.modal)
    const {toggleModal, toggleOrder} = useActions()


    useMemo(()=>{
        setFullPrice(0)
        if (cart.items){
            cart.items?.forEach(item =>{
                setFullPrice(prevState => prevState + item.price)
            })
        }
        setLocalStorage(cart)
    }, [cart])

    const handleClose = () =>{
        setCartState(!cartState)
    }

    const makingOrder = () =>{
        toggleModal({visible})
        toggleOrder({status:false})
    }

    return (
        <div>
            <div className={`${styles.cart} ${cartState && styles.active}`} onClick={() => handleClose()}></div>
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
                        <div onClick={()=> {setCartState(false)}}>
                        </div>
                        <div><MyButton onClick={()=> makingOrder()}  disabled={cart.items.length <=0}>Перейти к оформлению</MyButton></div>
                    </div>
                </div>
            </div>
            <MyModal>
                <OrderForm/>
            </MyModal>
        </div>


    );
};

export default Cart;
import styles from './Cart.module.css'
import {IoCloseOutline} from "react-icons/io5";
import MyButton from "../../UI/button/MyButton.tsx";
const Cart = () => {
    return (
        <div className={styles.cart}>
            <div className={styles.cart__content}>
                <div className={styles.cart__header}>
                    <div>
                        <h2>Корзина</h2>
                        <p className={styles.cart__subtitle}>В вашей корзине 1 товар</p>
                    </div>
                    <IoCloseOutline size={45}/>
                </div>
                <div className={styles.cart__items}></div>
                <div>
                    <p>Итого:</p>
                    <p>880 руб.</p>
                </div>
                <MyButton>Перейти к оформлению</MyButton>
            </div>
        </div>
    );
};

export default Cart;
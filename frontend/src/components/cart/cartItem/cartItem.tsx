import styles from './CartItem.module.css'
import {FC, useState} from "react";
import {ICartItem} from "../../../store/cart/cart.types.ts";

interface CartProps{
    cartItem:ICartItem,
}
const CartItem:FC<CartProps> = ({cartItem}:CartProps) => {
    const [total, setTotal] = useState<number>(cartItem.count)


    const selectCount = (type:'plus' | 'minus') =>{
        if (type === 'plus'){
            setTotal(prev => prev + 1)
        }
        else{
            setTotal(prev => prev > 1 ? prev - 1 : prev = 1)
        }
    }

    return (
        <div className={styles.card}>
            <img src={cartItem.product.image} alt="" className={styles.card__image}/>
            <div className={styles.card__body}>
                <div className={styles.card__title}>{cartItem.product.title} {cartItem.size === 0 ? '35 см' : '25 см'}</div>
                <div className={styles.card__count}>
                    <button className={styles.card__counter} onClick={() => selectCount('minus')}>-</button>
                    <div className={styles.card__total}>{total}</div>
                    <button className={styles.card__counter} onClick={() => selectCount('plus')}>+</button>
                </div>
                <div className={styles.card__price}>{0} руб.</div>
            </div>
        </div>
    );
};

export default CartItem;
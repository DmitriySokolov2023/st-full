import styles from './CartItem.module.css'
import {FC} from "react";
import {ICartItem} from "../../../store/cart/cart.types.ts";
import {useActions} from "../../../hooks/useActions.ts";
import {MdDeleteSweep} from "react-icons/md";



interface CartProps{
    cartItem:ICartItem,
}
const CartItem:FC<CartProps> = ({cartItem}:CartProps) => {
    const  {exchangeCount, removeToCart} = useActions()
    const countProduct = (type:'plus' | 'minus') => {
            exchangeCount({id:cartItem.id,size:cartItem.size, type})
    }

    return (
        <div className={styles.card}>
            <img src={cartItem.product.image} alt="" className={styles.card__image}/>
            <div className={styles.card__body}>
                <div className={styles.card__title}>{cartItem.product.title} {cartItem.size === 0 ? '35 см' : '25 см'}</div>
                <div className={styles.card__count}>
                    <button className={styles.card__counter} onClick={() => countProduct('minus')}>-</button>
                    <div className={styles.card__total}>{cartItem.count}</div>
                    <button className={styles.card__counter} onClick={() => countProduct('plus')}>+</button>
                    <MdDeleteSweep size={37} className={styles.card__remove} onClick={()=> removeToCart({id:cartItem.id, size:cartItem.size})}/>
                </div>
                <div className={styles.card__price}>{cartItem.price} руб.</div>
            </div>
        </div>
    );
};

export default CartItem;
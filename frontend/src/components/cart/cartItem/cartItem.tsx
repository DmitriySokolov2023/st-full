import styles from './CartItem.module.css'
import {FC, useMemo, useState} from "react";
import {ICartItem} from "../../../store/cart/cart.types.ts";
import {useActions} from "../../../hooks/useActions.ts";
import {getPriceBySize} from "../../../utils/getPriceBySize.ts";




interface CartProps{
    cartItem:ICartItem,
    getFullPrice?: (price: number) => void
}
const CartItem:FC<CartProps> = ({cartItem}:CartProps) => {
    const [total, setTotal] = useState<number>(cartItem.count)
    const {exchangeCount} = useActions()
    let price = getPriceBySize(cartItem.size, cartItem.product.price, total)

    useMemo(()=>{

    }, [total])
    const selectCount = (type:'plus' | 'minus') =>{
        if (type === 'plus'){
            setTotal(prev => prev + 1)
        }
        else{
            setTotal(prev => prev > 1 ? prev - 1 : prev = 1)
        }
        exchangeCount({id:cartItem.id, price:price})
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
                <div className={styles.card__price}>{price} руб.</div>
            </div>
        </div>
    );
};

export default CartItem;
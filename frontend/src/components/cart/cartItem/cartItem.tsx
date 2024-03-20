import styles from './CartItem.module.css'
import {useState} from "react";
const CartItem = () => {
    const [total, setTotal] = useState<number>(1)


    return (
        <div className={styles.card}>
            <img src="https://distfood.ru/upload/resize_cache/iblock/2b4/500_500_1/2b4bba4a22376413248600da9ec23f48.jpg" alt="" className={styles.card__image}/>
            <div className={styles.card__body}>
                <div className={styles.card__title}>Пицца 35см</div>
                <div className={styles.card__count}>
                    <button className={styles.card__counter}
                            onClick={() => setTotal(prev => prev > 1 ? prev - 1 : prev = 1)}>-
                    </button>
                    <div className={styles.card__total}>{total}</div>
                    <button className={styles.card__counter} onClick={() => setTotal(prev => prev + 1)}>+</button>
                </div>
                <div
                    className={styles.card__price}>880 руб.
                </div>
            </div>
        </div>
    );
};

export default CartItem;
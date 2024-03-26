import styles from './Card.module.css'
import {FC, useMemo, useState} from "react";
import {IProduct} from "../../types/product.types.ts";
import AddCartButton from "../cart/cartButton/AddCartButton.tsx";



interface CardProps{
    product:IProduct
}

const Card:FC<CardProps> = ({product}) => {
    const [total, setTotal] = useState<number>(1)
    const [size, setSize]  = useState<number>(0)
    const [price, setPrice] = useState<number>(product.price)

    useMemo(()=>{
        if (size === 0) setPrice(product.price * total)
        else setPrice(product.price * 0.75 * total)
    }, [total, size])


    return (
        <div className={styles.card}>
            <div className={styles.card__body}>
                <img src={product.image} alt="" className={styles.card__image}/>
                <div className={styles.card__content}>
                    <div className={styles.card__title}>{product.title}</div>
                    <div className={styles.cart__buttons}>
                        <button className={`${styles.card__btn} ${size != 0 && styles.active}`}  onClick={()=>setSize(0)}>35см</button>
                        <button className={`${styles.card__btn} ${size === 0 && styles.active}`} onClick={()=>setSize(1)}>25см</button>
                    </div>
                    <div className={styles.card__price}>{price} руб.</div>
                    <div className={styles.card__footer}>
                        <div className={styles.card__count}>
                            <button className={styles.card__counter} onClick={() => setTotal(prev => prev > 1 ? prev - 1 : prev = 1)}>-</button>
                            <div className={styles.card__total}>{total}</div>
                            <button className={styles.card__counter} onClick={() => setTotal(prev => prev + 1)}>+</button>
                        </div>
                        <AddCartButton product={product} size={size} total={total} price={price}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
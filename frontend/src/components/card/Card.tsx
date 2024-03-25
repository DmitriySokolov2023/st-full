import styles from './Card.module.css'
import MyButton from "../../UI/button/MyButton.tsx";
import {FC, useMemo, useState} from "react";
import {IProduct} from "../../types/product.types.ts";
import {useActions} from "../../hooks/useActions.ts";



interface CardProps{
    product:IProduct
}
const Card:FC<CardProps> = ({product}) => {
    const [total, setTotal] = useState<number>(1)
    const [size, setSize]  = useState(0)
    const {addToCart} = useActions()
    let price = product.price

    useMemo(()=>{
        if (size === 0) price = product.price * total
        else price = price * 0.75 * total
    }, [total, size])


    const addToCardItem = () =>{
        if(product){
            addToCart({
                id:product.id,
                product,
                size,
                count:total,
                price
            })
        }
    }

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
                        <MyButton onClick={()=>addToCardItem()}>В корзину</MyButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
import styles from './Card.module.css'
import MyButton from "../../UI/button/MyButton.tsx";
import {FC, useState} from "react";
import {IProduct} from "../../types/product.types.ts";
import {useActions} from "../../hooks/useActions.ts";

interface CardProps{
    product:IProduct
}
const Card:FC<CardProps> = ({product}) => {
    const [total, setTotal] = useState<number>(1)
    const [activeButton, setActiveButton]  = useState({
        small:0,
        big:1
    })

    const {getText} = useActions()
    return (
        <div className={styles.card}>
            <div className={styles.card__body}>
                <img src={product.image} alt="" className={styles.card__image}/>
                <div className={styles.card__content}>
                    <div className={styles.card__title}>{product.title}</div>
                    <div className={styles.cart__buttons}>
                        <button className={`${styles.card__btn} ${activeButton.big != 1 && styles.active}`}  onClick={()=>setActiveButton({small: 0, big: 1})}>35см</button>
                        <button className={`${styles.card__btn} ${activeButton.small != 1 && styles.active}`} onClick={()=>setActiveButton({small: 1, big: 0})}>25см</button>
                    </div>
                    <div className={styles.card__price}>{activeButton.big === 1 ? (product.price*total) : (product.price/100*75)*total} руб.</div>
                    <div className={styles.card__footer}>
                        <div className={styles.card__count}>
                            <button className={styles.card__counter} onClick={() => setTotal(prev => prev > 1 ? prev - 1 : prev = 1)}>-</button>
                            <div className={styles.card__total}>{total}</div>
                            <button className={styles.card__counter} onClick={() => setTotal(prev => prev + 1)}>+</button>
                        </div>
                        <MyButton onClick={()=>getText()} >В корзину</MyButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
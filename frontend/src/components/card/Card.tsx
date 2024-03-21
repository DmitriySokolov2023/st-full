import styles from './Card.module.css'
import MyButton from "../../UI/button/MyButton.tsx";
import {FC, useState} from "react";
import {ICartItem, IProduct} from "../../types/product.types.ts";
import {useActions} from "../../hooks/useActions.ts";



interface CardProps{
    product:IProduct
}
const Card:FC<CardProps> = ({product}) => {
    const [total, setTotal] = useState<number>(1)
    const [cartItem, setCartItem] = useState<ICartItem>({title:'', count:1, image:'', price:0, size:1})
    const [size, setSize]  = useState({small:0, big:1})
    const {addToCart} = useActions()



    const addToCardItem = () =>{
        setCartItem({
            title:product.title,
            image:product.image,
            size,
            count:total,
            price:size.big === 1 ? (product.price*total) : (product.price/100*75)*total
        })
        addToCart(cartItem)
    }


    return (
        <div className={styles.card}>
            <div className={styles.card__body}>
                <img src={product.image} alt="" className={styles.card__image}/>
                <div className={styles.card__content}>
                    <div className={styles.card__title}>{product.title}</div>
                    <div className={styles.cart__buttons}>
                        <button className={`${styles.card__btn} ${size.big != 1 && styles.active}`}  onClick={()=>setSize({small: 0, big: 1})}>35см</button>
                        <button className={`${styles.card__btn} ${size.small != 1 && styles.active}`} onClick={()=>setSize({small: 1, big: 0})}>25см</button>
                    </div>
                    <div className={styles.card__price}>{size.big === 1 ? (product.price*total) : (product.price/100*75)*total} руб.</div>
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
import {IProduct} from "../../../types/product.types.ts";
import {FC, useEffect, useState} from "react";
import {useActions} from "../../../hooks/useActions.ts";
import MyButton from "../../../UI/button/MyButton.tsx";
import {useTypedSelector} from "../../../hooks/useTypedSelector.ts";

interface IAddCartButton{
    product:IProduct,
    size:number,
    total:number,
    price:number
}
const AddCartButton:FC<IAddCartButton> = ({product, total, size, price}) => {

    const {toggleToCart} = useActions()
    const [cartState, setCartState] = useState(false)
    const cart = useTypedSelector(state => state.cart)

    useEffect(() => {
        setCartState(cart.items.some(item => item.id === product.id && item.size === size))
    }, [cart, size]);

     const toggleToCardItem = () =>{
        setCartState(!cartState)
        if(product){
            toggleToCart({
                id:product.id,
                product,
                size,
                count:total,
                price
            })
        }
    }
    return(
        <div>
            <MyButton onClick={()=>toggleToCardItem()} state={cartState ? 'passive' : 'active'}>{cartState ? 'Убрать' : 'В корзину'}</MyButton>
        </div>
    )
};
export default AddCartButton;
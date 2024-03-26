import {IProduct} from "../../../types/product.types.ts";
import {FC} from "react";
import {useActions} from "../../../hooks/useActions.ts";
import MyButton from "../../../UI/button/MyButton.tsx";

interface IAddCartButton{
    product:IProduct,
    size:number,
    total:number,
    price:number
}
const AddCartButton:FC<IAddCartButton> = ({product, total, size, price}) => {

    const {addToCart} = useActions()
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
    return(
        <div>
            <MyButton onClick={()=>addToCardItem()}>В корзину</MyButton>
        </div>
    )
};
export default AddCartButton;
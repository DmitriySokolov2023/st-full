import {useTitle} from "../../hooks/useTitle.ts";
import Card from "../../components/card/Card.tsx";
import List from "../../components/list/List.tsx";
import {IProduct} from "../../types/product.types.ts";
import {useProducts} from "../../hooks/useProducts.ts";





const PizzaPage = () => {
    const {data} = useProducts(1)

    useTitle('Пицца')
    return (
        <div>
            <List item={data ? data : []} renderItem={(product:IProduct)=><Card product={product} key={product.id}/>}/>
        </div>
    );
};

export default PizzaPage;
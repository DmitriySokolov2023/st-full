import {useTitle} from "../../hooks/useTitle.ts";
import Card from "../../components/card/Card.tsx";
import ProductsList from "../../components/products/ProductsList.tsx";
import {IProduct} from "../../types/product.types.ts";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";





const PizzaPage = () => {
    const {data} = useQuery({queryKey:['products'], queryFn: ()=> axios.get('http://localhost:4200/api/products/category/1'), select:({data}) => data})
    console.log(data)
    useTitle('Пицца')
    return (
        <div>

            <ProductsList item={data ? data : []} renderItem={(product:IProduct)=><Card product={product} key={product.id}/>}/>
        </div>
    );
};

export default PizzaPage;
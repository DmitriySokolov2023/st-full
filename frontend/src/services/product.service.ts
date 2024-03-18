import axios from "axios";

export class ProductService{

    private URL = 'http://localhost:4200/api/products'
    async getProductByCategory(id:number){
        return await axios.get(`${this.URL}/category/${id}`)
    }
}

export default new ProductService()
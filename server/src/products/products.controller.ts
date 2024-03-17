import {Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {ProductsService} from './products.service';
import {ProductDto} from "./product.dto";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {
    }

    @Get()
    async getAllProducts() {
        return this.productsService.getAllProducts()
    }

    @UsePipes(new ValidationPipe())
    @Get(':productId')
    async getById(@Param ('productId') productId:string) {
        return this.productsService.getById(+productId)
    }

    @Get('/category/:categoryId')
    async getByCategory(@Param ('categoryId') categoryId:string){
        return this.productsService.getByCategory(+categoryId)
    }

    @Post()
    async createProduct(@Body() dto:ProductDto) {
        return this.productsService.createProduct(dto)
    }

    @Delete(':productId')
    async deleteProduct(@Param ('productId') productId:string) {
        return this.productsService.deleteProduct(+productId)
    }

}

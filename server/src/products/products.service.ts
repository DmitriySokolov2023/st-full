import {Injectable, NotFoundException} from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import {ProductDto} from "./product.dto";

@Injectable()
export class ProductsService {
    constructor(private prisma:PrismaService) {
    }

    async getAllProducts(){
        const product =  await this.prisma.product.findMany({
            orderBy:{
                id:'asc'
            }
        })

        if (!product){
            throw new NotFoundException('Products not found')
        }
        return product
    }

    async getById(id:number){

        const product = await this.prisma.product.findUnique({
            where:{
                id:id
            }
        })

        if (!product){
            throw new NotFoundException('Product not found')
        }

        return product
    }

    async getByCategory(categoryId:number){
        const product =  await this.prisma.product.findMany({
            where:{
                categoriesId:categoryId
            },
        })

        if (!product){
            throw new NotFoundException('Product not found')
        }

        return product
    }

    async createProduct(dto:ProductDto){
        return this.prisma.product.create({
            data:{
                title:dto.title,
                size:dto.size,
                image:dto.image,
                count:dto.count,
                price:dto.price,
                categoriesId:dto.categoriesId
            }
        })
    }

    async deleteProduct(id:number){
        return this.prisma.product.delete({
            where:{
                id
            }
        })
    }
}

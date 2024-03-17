// @ts-ignore
import {Category, PrismaClient, Product, User} from "@prisma/client";


const prisma = new PrismaClient();

const createProduct = async () => {
    const categories = [
        {categories: 'Пицца'},
        {categories: 'Горячие роллы'},
        {categories: 'Гунканы'},
        {categories: 'Запеченные ролы'},
        {categories: 'Холодные роллы'},
    ]
    const user = [
        {email: 'user1@yandex.ru', name: 'Alex', password: '00012004'},
        {email: 'user2@yandex.ru', name: 'Dmitriy03', password: '00012004'},
        {email: 'user3@yandex.ru', name: 'Sasha123', password: '00012004'},
    ]

    const products = [
        {
            title: '5 сыров',
            size: 1,
            image: 'https://distfood.ru/upload/resize_cache/iblock/2b4/500_500_1/2b4bba4a22376413248600da9ec23f48.jpg',
            count: 1,
            price: 820,
            categoriesId: 1
        },
        {
            title: 'Deluxe',
            size: 1,
            image: 'https://distfood.ru/upload/resize_cache/iblock/c46/500_500_1/c460b006c9322449d7535855f426e629.jpg',
            count: 1,
            price: 710,
            categoriesId: 1
        },
        {
            title: 'Пепперони',
            size: 1,
            image: 'https://distfood.ru/upload/resize_cache/iblock/b20/500_500_1/b2030f73dee444a499f1c5e96157b547.jpg',
            count: 1,
            price: 695,
            categoriesId: 1
        },
        {
            title: 'Цыплёнок BBQ',
            size: 1,
            image: 'https://distfood.ru/upload/resize_cache/iblock/165/500_500_1/16570e9335a6aa61ab19d975d3a34ccc.jpg',
            count: 1,
            price: 768,
            categoriesId: 1
        },
        {
            title: 'Карбонара',
            size: 1,
            image: 'https://distfood.ru/upload/resize_cache/iblock/322/500_500_1/322b364006bbd7ae7eb2007e6f443b49.jpg',
            count: 1,
            price: 738,
            categoriesId: 1
        },
        {
            title: 'Чикенбургер',
            size: 1,
            image: 'https://distfood.ru/upload/resize_cache/iblock/fba/500_500_1/fba2870c9e923db24ffc5c6582988829.jpg',
            count: 1,
            price: 745,
            categoriesId: 1
        },
        {
            title: 'Норвежская',
            size: 1,
            image: 'https://distfood.ru/upload/resize_cache/iblock/ef9/500_500_1/ef982e26cbd7196ab7323268f5658013.jpg',
            count: 1,
            price: 964,
            categoriesId: 1
        },
        {
            title: 'Тропикана',
            size: 1,
            image: 'https://distfood.ru/upload/resize_cache/iblock/8e7/500_500_1/8e7eeb97338cd7285aa0f02d435ba736.jpg',
            count: 1,
            price: 735,
            categoriesId: 1
        },

        {
            title: 'Нежная креветка темпура',
            image: 'https://distfood.ru/upload/resize_cache/iblock/054/278_278_1/054256d3a6fe7f5792cf72e6c80e42a1.jpg',
            count: 1,
            price: 354,
            categoriesId: 2
        },
        {
            title: 'Гункан с креветкой',
            image: 'https://distfood.ru/upload/resize_cache/iblock/5da/278_278_1/5da99ef0c9ff36db4cc732cf33553190.jpg',
            count: 1,
            price: 115,
            categoriesId: 3
        },
        {
            title: 'Креветка tasty',
            image: 'https://distfood.ru/upload/resize_cache/iblock/219/278_278_1/219dbbd588ba17bb67d440a5cd924717.jpg',
            count: 1,
            price: 477,
            categoriesId: 4
        },
        {
            title: 'Филадельфия',
            image: 'https://distfood.ru/upload/resize_cache/iblock/d19/278_278_1/d19bb5b5a91d85762f22b516c67558e1.jpg',
            count: 1,
            price: 430,
            categoriesId: 5
        },
    ]

    for (let i = 0; i < categories.length; i++) {
        await prisma.category.create({
            data: {
                categories: categories[i].categories
            }
        })
    }

    for (let i = 0; i < products.length; i++) {
        await prisma.product.create({
            data: {
                title: products[i].title,
                image: products[i].image,
                count: products[i].count,
                size: products[i].size,
                price: products[i].price,
                categoriesId: products[i].categoriesId,
            }
        })
    }

    for (let i = 0; i < user.length; i++) {
        await prisma.user.create({
            data: {
                email: user[i].email,
                name: user[i].name,
                password: user[i].password,
            }
        })
    }
}

createProduct()
.catch(e=>console.log(e))
.finally(async ()=>{
    await prisma.$disconnect()
})
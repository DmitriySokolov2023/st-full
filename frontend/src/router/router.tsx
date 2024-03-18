import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/home/HomePage.tsx";
import PizzaPage from "../pages/products/PizzaPage.tsx";
import SushiPage from "../pages/products/SushiPage.tsx";
import WokPage from "../pages/products/WokPage.tsx";
import DessertsPage from "../pages/products/DessertsPage.tsx";
import DrinksPage from "../pages/products/DrinksPage.tsx";
import SalePage from "../pages/sale/SalePage.tsx";
import App from "../App.tsx";
import ErrorPage from "../pages/error/ErrorPage.tsx";
import SnacksPage from "../pages/products/SnacksPage.tsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element:<App/> ,
        errorElement:<ErrorPage/>,
        children:[
            {
                path: "/",
                element:<HomePage/> ,
            },
            {
                path: "/pizza",
                element:<PizzaPage/> ,
            },
            {
                path: "/sushi",
                element:<SushiPage/> ,
            },
            {
                path: "/wok",
                element:<WokPage/> ,
            },
            {
                path: "/desserts",
                element:<DessertsPage/> ,
            },
            {
                path: "/snacks",
                element:<SnacksPage/> ,
            },
            {
                path: "/drinks",
                element:<DrinksPage/> ,
            },
            {
                path: "/sale",
                element:<SalePage/> ,
            },
        ]
    },
]);
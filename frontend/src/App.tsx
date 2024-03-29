import Layout from "./layout/Layout.tsx";
import Header from "./layout/header/Header.tsx";
import Content from "./layout/content/Content.tsx";
import Footer from "./layout/footer/Footer.tsx";
import Cart from "./components/cart/Cart.tsx";
import MyModal from "./UI/modal/MyModal.tsx";
import MyInput from "./UI/input/MyInput.tsx";


function App() {

    return (
        <Layout>
            <MyModal title={'Оформление заказа'} text={'Введите ваши данные и мы оформим заказ'}>
            </MyModal>
            <Cart/>
            <Header/>
            <Content/>
            <Footer/>
        </Layout>
    )
}

export default App

import Layout from "./layout/Layout.tsx";
import Header from "./layout/header/Header.tsx";
import Content from "./layout/content/Content.tsx";
import Footer from "./layout/footer/Footer.tsx";
import Cart from "./components/cart/Cart.tsx";



function App() {
    return (
        <Layout>
            <Cart/>
            <Header/>
            <Content/>
            <Footer/>
        </Layout>
    )
}

export default App

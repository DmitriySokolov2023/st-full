import './App.css'
import Layout from "./layout/Layout.tsx";
import Header from "./layout/header/Header.tsx";
import Content from "./layout/content/Content.tsx";
import Footer from "./layout/footer/Footer.tsx";


function App() {

    return (
        <Layout>
            <Header/>
            <Content/>
            <Footer/>
        </Layout>
    )
}

export default App

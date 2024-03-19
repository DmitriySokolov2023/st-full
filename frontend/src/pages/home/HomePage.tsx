import homeImage from './main_image.jpg'
import styles from './HomePages.module.css'
import logo from '/public/logo_red.png'
import {useTitle} from "../../hooks/useTitle.ts";
const HomePage = () => {
    useTitle('ST & Food')
    return (
        <div className={styles.home}>
            <div className={styles.home__image}>
                <img src={homeImage} alt="" width='100%'/>
            </div>
            <div className={styles.home__rec}>
                <h1>Мы рекомендуем</h1>
                <p>Будет блок с рейтинговыми товарами....</p>
            </div >
            <div className={styles.home__community}>
                <div className={styles.home__reviews}>
                    <h1>Отзывы</h1>
                    <p>Будет блок с отзывами....</p>
                </div>
                <div className={styles.home__news}>
                    <h1>Новости</h1>
                    <p>Будет блок с отзывами....</p>
                </div>
            </div>
            <div className={styles.home__love}>
                <div><img src={logo} alt=""/></div>
                <h2>Ваша любимая доставка в Нижнем Новгороде</h2>
                <p>Оформите заказ на сайте, а мы бесплатно привезем его за 50 мин*</p>
                <p>Пицца из дровяной печи стоит того, чтобы немного подождать</p>
            </div>
        </div>
    );
};

export default HomePage;
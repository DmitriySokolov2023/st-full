import styles from './Footer.module.css'
import {FaTelegram} from "react-icons/fa";
import {SlSocialVkontakte} from "react-icons/sl";
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className='container'>
                <div className={styles.footer__content}>
                    <div className={styles.footer__messages}>
                        <FaTelegram style={{marginRight:'10px'}}/>
                        <SlSocialVkontakte />
                    </div>
                    <nav className={styles.footer__nav}>
                        <a href="">О нас</a>
                        <a href="">Доставка</a>
                        <a href="">Оплата</a>
                        <a href="">Новости и акции</a>
                        <a href="">Отзывы</a>
                        <a href="">Дисконтная программа</a>
                    </nav>
                    <div className={styles.footer__info}>
                        <p>+7 (920) 045-80-50</p>
                        <p>distfood@yandex.ru</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
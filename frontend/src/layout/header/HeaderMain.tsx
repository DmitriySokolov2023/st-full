import styles from "./Header.module.css";
import {Link} from "react-router-dom";
import logo from "/public/logo_red.png";
import {IoIosTimer} from "react-icons/io";
import {FiPhoneCall} from "react-icons/fi";

const HeaderMain = () => {
    return (
                <div className={styles.header__content}>
                    <Link to={`/`}>
                        <img src={logo} alt=""/>
                    </Link>
                    <div className={styles.header__text}>Готовим неаполитанскую пиццу
                        из натуральных продуктов
                    </div>
                    <div className={styles.header__chart}>
                        <IoIosTimer style={{fontSize: '50px', marginRight: '15px'}}/>
                        <div>
                            <div className={styles.header__time}>11:00 - 22:30</div>
                            <div className={styles.header__subtext}>без обеда и выходных</div>
                        </div>
                    </div>
                    <div className={styles.header__info}>
                        <FiPhoneCall style={{fontSize: '40px', marginRight: '15px'}}/>
                        <div>
                            <p>+7 (920) 045-80-50</p>
                            <p>+7 (831) 219-90-24</p>
                        </div>
                    </div>
                </div>
    );
};

export default HeaderMain;
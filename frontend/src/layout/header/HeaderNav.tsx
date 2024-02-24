import {NavLink} from "react-router-dom";
import MyButton from "../../UI/button/MyButton.tsx";
import styles from "./Header.module.css";
import {VscAccount} from "react-icons/vsc";
import {link} from "../../data/data.ts";


const HeaderNav = () => {
    return (
        <div className={styles.header__sub}>
            <nav className={styles.header__sub_nav}>
                {link.map(l =>
                    <NavLink key={l.id} to={l.path} className={({isActive, isPending}) =>
                        isActive
                            ? styles.active
                            : isPending
                                ? styles.pending
                                : styles.stay
                    }
                    >
                        {l.name}
                    </NavLink>
                )}
            </nav>
            <div className={styles.header__sub_button}>
                <MyButton>Заказать звонок</MyButton>
                <VscAccount style={{fontSize: '35px'}}/>
            </div>

        </div>

    );
};

export default HeaderNav;
import HeaderMain from "./HeaderMain.tsx";
import styles from "./Header.module.css";
import HeaderNav from "./HeaderNav.tsx";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className='container'>
                <HeaderMain/>
                <HeaderNav/>
            </div>
        </div>

    );
};

export default Header;
import styles from './Content.module.css'
import {Outlet} from "react-router-dom";




const Content = () => {
    return (
        <div className={styles.content}>
            <div className='container'>
                <Outlet/>
            </div>
        </div>
    );
};

export default Content;
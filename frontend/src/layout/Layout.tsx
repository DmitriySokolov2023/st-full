import React, {FC} from "react";
import styles from './Layout.module.css'

interface LayoutProps{
    children:React.ReactNode
}

const Layout:FC<LayoutProps> = ({children}) => {
    return (
        <div className={styles.layout}>
                {children}
        </div>
    );
};

export default Layout;
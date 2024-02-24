import {FC, ReactNode} from "react";
import styles from './MyButton.module.css'
interface MyButtonProps{
    children?:ReactNode
}

const MyButton:FC<MyButtonProps> = ({children}) => {
    return (
        <button className={styles.btn}>{children}</button>
    );
};

export default MyButton;
import {FC, MouseEventHandler, ReactNode} from "react";
import styles from './MyButton.module.css'
interface MyButtonProps{
    children?:ReactNode,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const MyButton:FC<MyButtonProps> = ({children,onClick}) => {
    return (
        <button className={styles.btn} onClick={onClick}>{children}</button>
    );
};

export default MyButton;
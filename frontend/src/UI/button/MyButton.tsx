import {FC, MouseEventHandler, ReactNode} from "react";
import styles from './MyButton.module.css'
interface MyButtonProps{
    children?:ReactNode,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    type?:'active' | 'passive'
}

const MyButton:FC<MyButtonProps> = ({children,onClick, type}) => {
    return (
        <button className={`${styles.btn} ${type === 'passive' && styles.passive}`} onClick={onClick}>{children}</button>
    );
};

export default MyButton;
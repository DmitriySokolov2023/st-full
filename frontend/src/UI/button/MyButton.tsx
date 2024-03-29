import {FC, MouseEventHandler, ReactNode} from "react";
import styles from './MyButton.module.css'
interface MyButtonProps{
    children?:ReactNode,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    state?:'active' | 'passive',

}

const MyButton:FC<MyButtonProps> = ({children,onClick, state}) => {
    return (
        <button className={`${styles.btn} ${state === 'passive' && styles.passive}`} onClick={onClick}>{children}</button>
    );
};

export default MyButton;
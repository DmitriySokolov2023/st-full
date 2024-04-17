import {FC, MouseEventHandler, ReactNode} from "react";
import styles from './MyButton.module.css'
interface MyButtonProps{
    children?:ReactNode,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    state?:'active' | 'passive',
    type?:'submit' | 'reset',
    disabled?:boolean

}

const MyButton:FC<MyButtonProps> = ({children,onClick, state, type, disabled}) => {
    return (
        <button className={`${styles.btn} ${state === 'passive' && styles.passive} ${disabled && styles.passive}`} type={type} onClick={onClick} disabled={disabled}>{children}</button>
    );
};

export default MyButton;
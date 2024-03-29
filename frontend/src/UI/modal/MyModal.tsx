import {FC, ReactNode} from "react";
import styles from "./MyModal.module.css"

interface MyModalProps {
    title: string,
    text?: string,
    children?: ReactNode
}

const MyModal: FC<MyModalProps> = ({title, text, children}) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modal__body}>
                <h2>{title}</h2>
                <p>{text}</p>
                <div className={styles.modal__content}>
                    {children}
                </div>
            </div>

        </div>
    );
};

export default MyModal;
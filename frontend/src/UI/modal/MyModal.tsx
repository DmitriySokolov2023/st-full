import {FC, ReactNode, useState} from "react";
import styles from "./MyModal.module.css"

interface MyModalProps {
    title: string,
    text?: string,
    children?: ReactNode,
    active?: boolean
}

const MyModal: FC<MyModalProps> = ({title, text, children, active}) => {
    const [visible, setVisible] = useState(true)
    return (
        <div>
            {visible &&
                <div className={styles.modal} onClick={()=> setVisible(prevState => !prevState)}>
                    <div className={styles.modal__body} onClick={(e)=>e.stopPropagation()}>
                        <h2>{title}</h2>
                        <p>{text}</p>
                        <div className={styles.modal__content}>
                            {children}
                        </div>
                    </div>
                </div>
            }
        </div>

    );
};

export default MyModal;
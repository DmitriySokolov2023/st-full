import {FC, ReactNode} from "react";
import styles from "./MyModal.module.css"
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import {useActions} from "../../hooks/useActions.ts";

interface MyModalProps {
    title?: string,
    text?: string,
    children?: ReactNode,
}

const MyModal: FC<MyModalProps> = ({title, text, children}) => {
    const {visible} = useTypedSelector(state => state.modal)
    const {toggleModal} = useActions()
    return (
                <div className={`${styles.modal} ${visible && styles.active}`} onClick={()=> toggleModal({visible})}>
                    <div className={`${styles.modal__body} ${visible && styles.active}`} onClick={(e)=>e.stopPropagation()}>
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
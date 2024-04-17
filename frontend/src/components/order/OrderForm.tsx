import { Form, Input, Result, Select} from "antd";
import styles from './Order.module.css'
import MyButton from "../../UI/button/MyButton.tsx";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import {useActions} from "../../hooks/useActions.ts";



const { Option } = Select;
const formItemLayout = {
    labelCol: {
        xs: { span: 5 },
        sm: { span:0 },
    },

};

const OrderForm = () => {
    const [form] = Form.useForm()
    const {status} = useTypedSelector(state => state.order)
    const {toggleOrder, resetCart} = useActions()

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 35 }}>
                <Option value="87">+7</Option>
            </Select>
        </Form.Item>
    );

    const onFinish = (values: any) => {
        console.log(values);
        if (values){
            toggleOrder({status:true})
            resetCart()
            form.resetFields()
        }
    };

    return (
        <div >
            {!status
                ?
                <>
                    <h2>Оформить заказ</h2>
                    <Form
                        form={form}
                        {...formItemLayout}
                        name="register"
                        onFinish={onFinish}
                        initialValues={{prefix: '+7'}}
                        scrollToFirstError
                        className={styles.form}
                    >

                        <div className={styles.form__body}>
                            <div className={styles.form__info}>
                                <Form.Item
                                    name="name"
                                    label="Имя"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Введите ваше имя !',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input placeholder={'Имя'} style={{width: 280}}/>
                                </Form.Item>

                                <Form.Item
                                    name="phone"
                                    label="Телефон"
                                    rules={[{required: true, message: 'Введите ваш телефон !'}]}
                                >
                                    <Input addonBefore={prefixSelector} placeholder={'920055555'} maxLength={10}/>
                                </Form.Item>
                            </div>
                            <div className={styles.form_email}>
                                <Form.Item
                                    name="email"
                                    label="E-mail"
                                    rules={[
                                        {
                                            type: 'email',
                                            message: 'Вы неверно ввели E-mail!',
                                        },
                                        {
                                            required: true,
                                            message: 'Введите ваш E-mail !',
                                        },
                                    ]}
                                >
                                    <Input placeholder="example@example.ru"/>
                                </Form.Item>
                            </div>
                            <div className={styles.form__delivery}>
                                <Form.Item
                                    name="delivery"
                                    label="Доставка"
                                    rules={[{required: true, message: 'Выберете способ доставки!'}]}
                                >
                                    <Select placeholder="Выберете способ доставки">
                                        <Option value="courier">Курьером</Option>
                                        <Option value="pickup">Самовывоз</Option>
                                    </Select>
                                </Form.Item>
                            </div>
                            <div className={styles.form__address}>
                                <Form.Item
                                    name="home"
                                    label="Улица"
                                    rules={[
                                        {
                                            required: true,
                                            message: '',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input style={{width: 240}} placeholder="Улица"/>
                                </Form.Item>
                                <Form.Item
                                    name="home"
                                    label="Дом"
                                    rules={[
                                        {
                                            required: true,
                                            message: '',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input style={{width: 80}} placeholder="Дом"/>
                                </Form.Item>
                                <Form.Item
                                    name="door"
                                    label="Подъезд"
                                    rules={[
                                        {
                                            required: true,
                                            message: '',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input style={{width: 80}} placeholder="Подъезд"/>
                                </Form.Item>
                                <Form.Item
                                    name="kv"
                                    label="Квартира"
                                    rules={[
                                        {
                                            required: true,
                                            message: '',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input style={{width: 80}} placeholder="Квартира"/>
                                </Form.Item>
                            </div>
                            <div className={styles.form__pay}>
                                <Form.Item
                                    name="pay"
                                    label="Оплата"
                                    rules={[{required: true, message: 'Выберете способ оплаты !'}]}
                                >
                                    <Select placeholder="Выберете способ оплаты">
                                        <Option value="card">Картой при получении</Option>
                                        <Option value="cash">Наличными</Option>
                                    </Select>
                                </Form.Item>
                            </div>
                        </div>
                        <Form.Item>
                            <MyButton type={'submit'}>Оформить заказ</MyButton>
                        </Form.Item>
                    </Form>
                </>
                :
                <Result
                    status="success"
                    title="Заказ № 345 оформлен!"
                    subTitle="В ближайшее время с вами свяжется наш сотрудни и уточнит про заказ."
                />
            }


        </div>
    );
};

export default OrderForm;
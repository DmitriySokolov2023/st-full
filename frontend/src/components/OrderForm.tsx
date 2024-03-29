import {Button, Form, FormProps, Input} from "antd";
import {MaskedInput} from "antd-mask-input";
import MyModal from "../UI/modal/MyModal.tsx";

const OrderForm = () => {
    type FieldType = {
        username?: string;
        password?: string;
        remember?: string;
    };

    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <MyModal title={'Оформление заказа'} text={'Введите ваши данные и мы оформим заказ'}>
                <Form
                    name="basic"
                    style={{ maxWidth: 800 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        name="password"
                        rules={[{ required: true, message: 'Вы забыли представиться!' }]}
                    >
                        <Input placeholder={'Имя'}/>
                    </Form.Item>
                    <Form.Item<FieldType>
                        name="username"
                        rules={[{ required: true, message: 'Укажите номер' }]}
                        style={{margin:'30px 0px 40px 0px'}}
                    >
                        <MaskedInput mask={'+7 (000) 000 00 00'} minLength={15} placeholder={'Номер телефона'}/>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{backgroundColor:'#fd4445', boxShadow:'none'}}>
                            Оформить заказ
                        </Button>
                    </Form.Item>
                </Form>
            </MyModal>
        </div>
    );
};

export default OrderForm;
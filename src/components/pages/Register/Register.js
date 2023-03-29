import React from 'react';
import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { axiosMovieChill } from '../../../utils/axiosConfig';
import {
    Button,
    Checkbox,
    Form,
    Input,
    Select,
} from 'antd';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};


const cx = classNames.bind(styles);


const onFinish = (values) => {
    console.log('Received values of form: ', values);
};




export default function Register() {
    const [form] = Form.useForm();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const navigate = useNavigate();

    const registerHandler = async (e) => {
        e.preventDefault();
        const res = await axiosMovieChill.post('/signup',{
           email: email,
           username: username,
           password: password,
           passwordConfirmation: confirm
        })
        console.log(res);
        navigate('/login');
        
    }
    return (
        <div className={cx('wrapper')}>
            <div style={{ fontSize: '2rem', textAlign: 'center', paddingBottom: '20px' }}>SIGN UP</div>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
                style={{ maxWidth: 600 }}
                scrollToFirstError
            >
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input  value={email} onChange={e => setEmail(e.target.value)}/>
                </Form.Item>

                <Form.Item
                    name="username"
                    label="Username"
                    tooltip="What do you want others to call you?"
                    rules={[{ required: true, message: 'Please input your username!', whitespace: true }]}
                >
                    <Input value={username} onChange={e => setUsername(e.target.value)}/>
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password value={password} onChange={e => setPassword(e.target.value)}/>
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password value={confirm} onChange={e => setConfirm(e.target.value)}/>
                </Form.Item>


                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                        },
                    ]}
                    {...tailFormItemLayout}
                >
                    <Checkbox>
                        I have read the <a href="">agreement</a>
                    </Checkbox>
                </Form.Item>
                <Form.Item {...tailFormItemLayout} >
                    <div style={{ width: '100%' }}>
                        <Button type="primary" htmlType="submit" style={{marginLeft: '20px'}} onClick={registerHandler}>
                            Register
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
};
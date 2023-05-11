import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import classNames from 'classnames/bind';
import styles from './Login.module.scss'
import { axiosMovieChill } from '../../../utils/axiosConfig';

const cx = classNames.bind(styles)

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const loginHandler = async e => {
    e.preventDefault();
    try {
      const res = await axiosMovieChill.post("http://localhost:3001/api/login", {
        username: username,
        password: password,
      })
      const { accessToken, refeshToken } = res;
      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('refesh_token', refeshToken);
      localStorage.setItem('user_id', res.user.id)
      navigate('/');
    } catch (error) {
      setErrorMessage(error.response.data);
    }
  }
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className={cx('wrapper')}>
      <div style={{ fontSize: '2rem', textAlign: 'center', paddingBottom: '20px' }}>SIGN IN</div>
      <Form
        name="normal_login"
        className={cx("login-form")}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className={cx("site-form-item-icon")} />} placeholder="Username" value={username} onChange={e => { setUsername(e.target.value) }} />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className={cx("site-form-item-icon")} />}
            type="password"
            placeholder="Password"
            value={password} onChange={e => { setPassword(e.target.value) }}
          />
        </Form.Item>
        <div style={{color: 'red', fontSize:'1.4rem'}}>{errorMessage}</div>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className={cx("login-form-forgot")} href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={cx('login-form-button')} onClick={loginHandler}>
            Log in
          </Button>
          Or <Link to="/register">register now!</Link>
        </Form.Item>
      </Form>
    </div>
  )
}

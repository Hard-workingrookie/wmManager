import React from 'react'
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.css'
import {setToken } from '../utils/auth'


function Login(props) {
    const onFinish = values => {
        console.log(values)
        setToken(values.username)
        props.history.push('./admin')
    }
    return (
        <Card title='王美的后台管理系统' className='login-form'>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: '请输入您的用户名!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入您的密码!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="密码"
                    />
                </Form.Item>
                <Form.Item >
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>
                    <a className="login-form-forgot" href="">忘记密码</a>
                </Form.Item>

                <Form.Item >
                    <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>或 <a  href="">去注册</a>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default Login

import React from 'react'
import { Form, Card, Button, Input, message } from 'antd'

function Edit(props) {
    const handleSubmit = e => {
        console.log(e)
        console.log('提交')
        // 此处调用API
    }
    const validateMessages = {
      };
    return (
        <Card title='商品编辑'>
            <Form onFinish={e => handleSubmit(e)} onFinishFailed={()=>{message.error('请输入正确的内容')}}  scrollToFirstError>
                <Form.Item
                    label='名字'
                    name='名字'
                    rules={[
                        {
                            required: true,
                            message: '请输入商品名字',
                        }
                    ]}>
                    <Input placeholder='请输入商品名字' />
                </Form.Item>
                <Form.Item
                    label='价格'
                    name='价格'
                    rules={[
                        {
                            required: true
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                              if (!value || value<1000000) {
                                return Promise.resolve();
                              }
                              return Promise.reject('价格必须是数字且不能大于1000000~');
                            },
                          }),
                    ]}>
                    <Input placeholder='请输入商品价格' />
                </Form.Item>
                <Form.Item >
                    <Button type='primary' htmlType='submit'>保存</Button>
                </Form.Item>
            </Form>
        </Card >
    )
}

export default Edit;

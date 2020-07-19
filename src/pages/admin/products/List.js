import React from 'react'
import { Card, Table, Button, Popconfirm } from 'antd'

const dataSource = [
    {
        id: 1,
        name: '卫士香皂',
        price: 5
    },
    {
        id: 2,
        name: '无线鼠标',
        price: 100
    },
    {
        id: 3,
        name: '医用口罩',
        price: 10
    },
    {
        id: 4,
        name: '南孚电池',
        price: 5
    },
    {
        id: 5,
        name: '马克杯杯子',
        price: 7
    },
    {
        id: 6,
        name: '发光镜子',
        price: 15
    },
]
function List(props) {
    const columns = [
        {
            title: '序号',
            key: 'id',
            width: 80,
            align: 'center',
            render: (txt, record, index) => index + 1
        },
        {
            title: '名字',
            dataIndex: 'name'
        },
        {
            title: '价格',
            dataIndex: 'price'
        },
        {
            title: '操作',
            render: (txt, record, index) => {
                return (
                    <div>
                        <Button size='small' type='primary' >修改</Button>
                        <Popconfirm title='是否删除此项？'
                            onCancel={() => {console.log('用户取消删除')}}
                            onConfirm={() => {console.log('用户确认删除')
                            // 此处调用APi接口进行相关操作
                        }}>
                            <Button size='small' type='danger' style={{ margin: '0 1rem' }}>删除</Button>
                        </Popconfirm>
                    </div>)
            }
        },
    ]
    return (
        <Card title='商品列表' extra={
            <Button type='primary' size='small' 
            onClick={()=>props.history.push('/admin/products/edit')}>新增</Button>
        }>
            <Table rowkey='id' columns={columns} bordered dataSource={dataSource} />
        </Card>
    )
}

export default List

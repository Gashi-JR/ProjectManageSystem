import React from 'react'
import { Card, Badge, Descriptions } from 'antd';

interface Iprops {
    userinfo: object
}
export default function Home(props: Iprops) {
    console.log(props.userinfo);

    return (
        <div>
            <Card
                title="用户信息"
                style={{
                    width: '100%',
                }}
            >
                <Descriptions layout="vertical" bordered>
                    <Descriptions.Item label="工号">Cloud Database</Descriptions.Item>
                    <Descriptions.Item label="姓名">Prepaid</Descriptions.Item>
                    <Descriptions.Item label="年龄">YES</Descriptions.Item>
                    <Descriptions.Item label="职称">2018-04-24 18:00:00</Descriptions.Item>
                    <Descriptions.Item label="学历">2018-04-24 18:00:00</Descriptions.Item>
                    <Descriptions.Item label="专业">
                        2019-04-24 18:00:00
                    </Descriptions.Item>
                    <Descriptions.Item label="状态" span={1}>
                        <Badge status="processing" text="在线" />
                    </Descriptions.Item>
                    <Descriptions.Item label="身份" span={2}>
                     职工
                    </Descriptions.Item>
                    <Descriptions.Item label="所属部门" span={2}>$80.00</Descriptions.Item>
                    <Descriptions.Item label="用户名">$20.00</Descriptions.Item>
                    <Descriptions.Item label="头像">$20.00</Descriptions.Item>
                </Descriptions>
            </Card>

        </div>
    )
}

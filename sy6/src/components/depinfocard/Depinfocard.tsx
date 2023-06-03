//@ts-nocheck
import React, { Children } from "react";
import { Card, Badge, Descriptions, Avatar } from "antd";


export default function Home(props: any) {
    console.log(props.userinfo);


    return (
        <>
            <div>
                <Card
                    style={{
                        width: "100%",
                    }}
                >
                    <Descriptions title="部门信息" layout="vertical" bordered>
                        <Descriptions.Item label="部门名称" >{props.userinfo[0]?.departmentname}</Descriptions.Item>
                        <Descriptions.Item label="地址" span={2}>{props.userinfo[0]?.officelocation}</Descriptions.Item>
                        <Descriptions.Item label="成员数量">{props.userinfo[0]?.employeenum}</Descriptions.Item>
                        <Descriptions.Item label="项目数量" span={3}>{props.userinfo[0]?.projectnum
                        }</Descriptions.Item>
                        <Descriptions.Item label="部门简介" span={4}>
                            {props.userinfo[0]?.introduction
                            }
                        </Descriptions.Item>

                        <Descriptions.Item label="部门历程">
                            {props.children}
                        </Descriptions.Item>
                    </Descriptions>
                </Card>
            </div>

        </>
    );
}
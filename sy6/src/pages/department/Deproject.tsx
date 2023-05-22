import Projectlist from '@/components/projectlist/Projectlist'
import { Card } from 'antd'
import React from 'react'

export default function Deproject() {
    return (
        <Card title='部门所有项目'>
            <Projectlist />
        </Card>
    )
}

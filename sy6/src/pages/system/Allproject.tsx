import Projectlist from '@/components/projectlist/Projectlist'
import { Card } from 'antd'
import React from 'react'

export default function Allproject() {
    return (
        <Card title='所有项目'>
            <Projectlist />
        </Card>
    )
}
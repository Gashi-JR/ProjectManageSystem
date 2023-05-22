import React from 'react'
import Projectlist from '@/components/projectlist/Projectlist'
import { Card } from 'antd'

export default function List() {
    return (
        <Card title="全部项目">
            <Projectlist />
        </Card>
    )
}

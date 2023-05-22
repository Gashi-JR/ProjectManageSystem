import Checklist from '@/components/checklist/Checklist'
import { Card, Button } from 'antd'
import React from 'react'

export default function Check() {
    return (
        <Card title='申请列表'>
            <Checklist />
            <Button type="primary" style={{ marginRight: 20 }}>通过</Button>
            <Button danger type="primary">拒绝</Button>
        </Card>
    )
}

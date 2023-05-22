import Timelines from '@/components/timelines/Timelines'
import { Card } from 'antd'
import React from 'react'
import Infocard from '@/components/infocard/Infocard'

export default function Info() {
    return (

        <div>
            <Card title='部门历程' style={{ position: 'fixed', right: 10, bottom: 10, zIndex: 1 }}>
                <Timelines />
            </Card>
            <Infocard userinfo={{}} />
        </div>

    )
}

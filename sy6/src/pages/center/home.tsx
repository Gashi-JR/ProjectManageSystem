import React, { useEffect, useState } from 'react'
import Infocard from '@/components/infocard/Infocard'
import { Button, notification } from 'antd';
//@ts-ignore
import Icon from "supercons";

export default function Home() {
  const [api, contextHolder] = notification.useNotification({
    top: 60
  });
  const [notificate, setNotificate] = useState(true)
  useEffect(() => {
    if (notificate)
      openNotification()

  }, [notificate])

  const openNotification = () => {
    api.open({
      message: '欢迎回来!',
      description:
        '当你有困难时请点击帮助',
      icon: (
        <Icon
          glyph="idea"
          size={32}
        />
      ),

    });
  };
  return (
    <div >

      <Infocard userinfo={{}} />


      {contextHolder}

    </div>
  )
}

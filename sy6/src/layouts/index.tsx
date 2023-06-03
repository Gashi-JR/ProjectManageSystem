import React from "react";
import Sidemenu from "@/components/sidemenu/Sidemenu";
import Topbar from "@/components/topbar/Topbar";
//@ts-ignore
import { Layout } from "antd";
import { Outlet, useLocation, getDvaApp } from "umi";
import '@/util/axios.config'
//持久化相关
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const { Header, Sider, Content } = Layout;
export default function Home() {
  const app = getDvaApp(); // 获取dva的实例
  const persistor = app._store.persist;
  const location = useLocation();
  if (location.pathname === "/login") {
    return <Outlet />;
  } else
    return (
      <PersistGate loading={null} persistor={persistor}>
        {" "}
        <Layout>
          <Header style={{ padding: 0 }}>
            <Topbar />
          </Header>
          <Layout>
            <Sider
              width={200}
              style={{
                background: "white",
                maxHeight: "calc(100vh - 64px)",
                overflow: "auto",
              }}
            >
              <Sidemenu />
            </Sider>
            <Layout>
              <Content
                style={{
                  padding: 15,
                  margin: 0,
                  //minHeight: 280,
                  maxHeight: "calc(100vh - 64px)",
                  overflow: "auto",
                }}
              >
                <Outlet></Outlet>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </PersistGate>
    );
}

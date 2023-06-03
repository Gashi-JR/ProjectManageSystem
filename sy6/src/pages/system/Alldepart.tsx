//@ts-nocheck
<<<<<<< HEAD
import { Avatar, Card, Divider, List, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
const Alldepart = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
=======
import http from '@/util/http';
import { Avatar, Card, Divider, List, Modal, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Depinfocard from '@/components/depinfocard/Depinfocard'
import Timelines from '@/components/timelines/Timelines';
import { log } from 'console';
import '@/pages/css/alldepart/alldepart.less'
const Alldepart = () => {
  const [deplist, setDeplist] = useState<Array<object>>([]);



  console.log(deplist);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hislist, setHislist] = useState<Array<object>>([]);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

>>>>>>> e00c4e0 (登录注册模块)
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
<<<<<<< HEAD
    fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
=======
    async function getdata() {
      let res = await http("post", "/showalldep", {});
      return res.data.data;
    }
    getdata().then((res) => {
      setDeplist(res)
      setLoading(false);
    });

>>>>>>> e00c4e0 (登录注册模块)
  };
  useEffect(() => {
    loadMoreData();
  }, []);
<<<<<<< HEAD
  return (
    <Card title='部门概览'>
        <Card
          id="scrollableDiv"
          style={{
            height: 400,
            overflow: 'auto',
            padding: '0 16px',
            border: '1px solid rgba(140, 140, 140, 0.35)',
          }}
        >
          <InfiniteScroll
            dataLength={data.length}
            next={loadMoreData}
            hasMore={data.length < 50}
            loader={
              <Skeleton
                avatar
                paragraph={{
                  rows: 1,
                }}
                active
              />
            }
            endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
            scrollableTarget="scrollableDiv"
          >
            <List
              dataSource={data}
              renderItem={(item) => (
                <List.Item key={item.email}>
                  <List.Item.Meta
                    avatar={<Avatar src={item.picture.large} />}
                    title={<a href="https://ant.design">{item.name.last}</a>}
                    description={item.email}
                  />
                  <div>Content</div>
                </List.Item>
              )}
            />
          </InfiniteScroll>
        </Card>
=======
  const handleClick = async (item) => {
    let res = await http("post", "/showdep", {
      departmentid: item.departmentid,
    });
    setHislist(res.data.data);
    setIsModalOpen(true)
  }
  return (
    <Card title='部门概览'>
      <Card
        id="scrollableDiv"
        style={{
          height: 400,
          overflow: 'auto',
          padding: '0 16px',
          border: '1px solid rgba(140, 140, 140, 0.35)',
        }}
      >

        <List
          dataSource={deplist}
          renderItem={(item) => (
            <List.Item key={item.departmentid}>
              <List.Item.Meta

                title={<a>{item.departmentname}</a>}
                description={item.introduction}
              />
              <a onClick={() => {
                handleClick(item)
              }}>预览</a>
            </List.Item>
          )}
        />

      </Card>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="确定"
        cancelText="取消"
        style={{ maxHeight: '60%', overflow: 'auto', borderRadius: 10 ,}}
      >
        <Depinfocard userinfo={hislist} >
          <Timelines userinfo={hislist} />
        </Depinfocard>
      </Modal>
>>>>>>> e00c4e0 (登录注册模块)
    </Card>
  );
};
export default Alldepart;
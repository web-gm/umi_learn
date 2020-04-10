import React from 'react';
import { Menu, Row, Col, Badge } from 'antd';
import { Link } from 'umi';
export default (props: any) => {
  return (
    <div>
      <Row>
        <Col span={18} offset={3}>
          <Menu mode="horizontal" defaultSelectedKeys={['discover']} theme='dark'>
            <Menu.Item key="discover">
              <Link to="/">发现音乐</Link>
            </Menu.Item>
            <Menu.Item key="my">
              <Link to="/my">我的音乐</Link>
            </Menu.Item>
            <Menu.Item key="friend">
              <Link to="/friend">朋友</Link>
            </Menu.Item>
            <Menu.Item key="store">
              <Link to="/store">商城</Link>
            </Menu.Item>
            <Menu.Item key="musicer">
              <Link to="/musicer">音乐人</Link>
            </Menu.Item>
            <Menu.Item key="download">
              <Link to="/download">
                  下载客户端
              </Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
      {props.children}
    </div>
  );
};

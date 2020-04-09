import React from 'react';
import styles from './index.less';
import {Menu} from 'antd'
import { Link } from 'umi'
export default (props: any) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link to='/'>发现音乐</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/my'>我的音乐</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/friend'>朋友</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/store'>商城</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/store'>音乐人</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/download'>下载客户端</Link>
        </Menu.Item>
      </Menu>
      {props.children}
    </div>
  );
}

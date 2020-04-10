import React from 'react';
import {Menu} from 'antd'
import { Link, useLocation } from 'umi'
export default (props: any) => {
  const match = useLocation()
  console.log(props.route)
  return (
    <div>
      <Menu mode="horizontal" defaultSelectedKeys={['push']}>
        <Menu.Item key='push'>
          <Link to='./push'>推荐</Link>
        </Menu.Item>
        <Menu.Item key='toplist'>
          <Link to='./toplist'>排行榜</Link>
        </Menu.Item>
        <Menu.Item key='playlist'>
          <Link to='./playlist'>歌单</Link>
        </Menu.Item>
        <Menu.Item key='djradio'>
          <Link to='./djradio'>主播</Link>
        </Menu.Item>
        <Menu.Item key='artist'>
          <Link to='./artist'>歌手</Link>
        </Menu.Item>
        <Menu.Item key='album'>
          <Link to='./album'>新碟上架</Link>
        </Menu.Item>
      </Menu>
      {props.children}
    </div>
  );
}

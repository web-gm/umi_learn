import React from 'react';
import {Menu} from 'antd'
import { Link } from 'umi'
export default (props: any) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link to='/'>推荐</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/my'>排行榜</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/friend'>歌单</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/store'>主播</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/store'>歌手</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/download'>新碟上架</Link>
        </Menu.Item>
      </Menu>
      {props.children}
    </div>
  );
}

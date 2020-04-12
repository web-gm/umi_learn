import React from 'react';
import { Carousel } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import styles from './PlayListItem.less';
interface item {
  picUrl: string;
  playCount: number;
  name: string;
  id: number;
}
export default (props: item) => {
  return (
    <div className={styles['list-item']}>
      <div className={styles['imgWraper']}>
        <img src={props.picUrl} alt="" />
        <div className={styles['shadow']}>
          <span>
            {String(props.playCount).length > 5
              ? parseInt(props.playCount / 10000 + '') + '万'
              : props.playCount}
          </span>
          <PlayCircleOutlined />
        </div>
      </div>
      <div className={styles.name}>{props.name}</div>
    </div>
  );
};

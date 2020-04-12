import React from 'react';
import { Row, Col } from 'antd';
import Card from '../components/Card';
import PlayListItem from '../components/PlayListItem';
interface props {
  data: Array<item>;
}
interface item {
  picUrl: string;
  playCount: number;
  name: string;
  id: number;
}
export default (props: props) => {
  return (
    <div>
      <Card title="热门推荐">
        <Row>
          {props.data.map((item, index) => {
            return (
              <Col span={4} offset={index % 5 === 0 ? 0 : 1}>
                <PlayListItem {...item} />
              </Col>
            );
          })}
        </Row>
      </Card>
    </div>
  );
};

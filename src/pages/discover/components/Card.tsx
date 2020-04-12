import React from 'react';
import { Card } from 'antd';
import { Link } from 'umi';

interface CardInt {
  title: string;
  link?: string;
  children: any;
}
export default (props: CardInt) => {
  return (
    <div>
      <Card
        title={
          props.link ? <Link to={props.link}>props.title</Link> : props.title
        }
        extra={props.link ? <Link to={props.link}>更多</Link> : null}
      >
        {props.children}
      </Card>
    </div>
  );
};

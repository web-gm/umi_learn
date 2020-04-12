import React from 'react';
import { Carousel } from 'antd';
interface props {
  banners: Array<banner>;
}
interface banner {
  imageUrl: string;
  targetId: number;
}
export default (props: props) => {
  return (
    <div>
      <Carousel autoplay>
        {props.banners.map(item => {
          return <img key={item.targetId} src={item.imageUrl} alt="" />;
        })}
      </Carousel>
    </div>
  );
};

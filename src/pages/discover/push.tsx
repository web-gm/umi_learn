import React, { useEffect, useState } from 'react';
import { getBanner, getPersonalized } from '@/model/push/index';
import Banner from './push/banner';
import { Col, Row } from 'antd';
import Playlist from './push/playlist';
export default () => {
  const [bannersData, setBanners] = useState([]);
  const [playListData, setPlayListData] = useState([]);
  useEffect(() => {
    getBannerFun();
    getPlayListFun();
  }, []);
  const getBannerFun = async () => {
    const res = await getBanner();
    console.log(res);
    setBanners(res.banners);
  };
  const getPlayListFun = async () => {
    const res = await getPersonalized();
    setPlayListData(res.result.slice(0, 10));
  };
  return (
    <div>
      <Row>
        <Col span={16} offset={4}>
          <Banner banners={bannersData}></Banner>
          <Playlist data={playListData} />
        </Col>
      </Row>
    </div>
  );
};

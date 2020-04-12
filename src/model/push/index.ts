// 推荐
import request from '../request';

// 获取轮播
const getBanner = () => {
  return request.get('/banner?type=0');
};
// 热门推荐
const getPersonalized = () => {
  return request.get('/personalized');
};
// 新碟上架
const getAlbum = () => {
  return request.get('/album/newest');
};
export { getBanner, getPersonalized, getAlbum };

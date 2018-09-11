import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xE9D3D4CFF240ad7C38e16d716623376DE5dA9476'
);

export default instance;

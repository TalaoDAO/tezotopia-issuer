import { http } from '../service/http';

const getQRUrl = async (id) => {
  return await http.get(`/vouchers/${id}/qr-url`);
};

export default {
  getQRUrl
}
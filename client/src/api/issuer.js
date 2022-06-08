import { http } from '../service/http';

const getQRUrl = async (id) => {
  return await http.get(`/issuer/${id}`);
};

export default {
  getQRUrl
}
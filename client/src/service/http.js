const axios_package = require('axios')

axios_package.interceptors.response.use(undefined, (err) => {
  switch (err.response.status) {
    case 401:
      if (!!localStorage.getItem('token')) {
        localStorage.removeItem('token')
      }
      break;
    default:
      break;
  }
  return Promise.reject(err)
});

export const http = axios_package.create({ baseURL: process.env.REACT_APP_BASE_URL });
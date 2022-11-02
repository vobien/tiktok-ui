import axiosClient from './axiosClient';

const searchApi = {
  getAccounts: async (path, options = {}) => {
    const response = await axiosClient.get(path, options);
    return response.data;
  },
};
export default searchApi;

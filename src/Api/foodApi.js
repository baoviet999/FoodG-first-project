import axiosClient from "./axiosClient";

const foodApi = {
    getAll: (type, params) => {
        return axiosClient.get(type, { params });
    },
    get: (id) => {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
};
export default foodApi;
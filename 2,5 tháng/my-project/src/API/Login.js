import axiosClient from "../commons/axiosClient";

const LoginAPI = {
    logIn: (params) => {
        // post bảo mặt hơn get, Get hiện thị thanh địa chỉ, Post ẩn địa chỉ đi
        //Post chuyền qua request Body(ẩn bên trong khi chuyền than số), Get chuyền qua urn
        return axiosClient.post("/auth", params);
    }
}

export default LoginAPI
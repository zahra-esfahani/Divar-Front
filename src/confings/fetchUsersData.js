import api from "./api";
const fetchDataProfile = () =>
  api.get("user/whoami").then((res) => res || false);

const getPosts = () => api.get("post/my");
const getAllPosts = () => api.get();
export { fetchDataProfile, getPosts, getAllPosts };

import { AxiosInstance } from "axios";

export const wrapAuth = (
  axios: AxiosInstance,
  getToken: () => Promise<string>
) => {
  // axios.interceptors.request.use(async (config) => {
  //   const token = await getToken();
  //   config.headers.Authorization = token;
  //   return config;
  // });
  return axios;
};

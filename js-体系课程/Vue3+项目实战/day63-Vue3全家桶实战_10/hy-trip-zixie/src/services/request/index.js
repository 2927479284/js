import axios from 'axios'

import { BASE_URL, TIMEOUT } from './config';
import useMainStore from "@/stores/moudules/main";
const mainStore = useMainStore();
class HYRequest {
  constructor(baseURL, timeout=10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    });

    // 请求拦截
    this.instance.interceptors.request.use(config => {
      mainStore.isLoading = true
      return config
    }, err => {
      mainStore.isLoading = false
      return err
    });

    // 响应拦截
    this.instance.interceptors.response.use(res => {
      mainStore.isLoading = false
      return res
    }, err => {
      mainStore.isLoading = false
      return err
    });
  }

  request(config) {
    // mainStore.isLoading = true;
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        // mainStore.isLoading = false;
        resolve(res.data);
      }).catch(err => {
        // mainStore.isLoading = false;
        reject(err);
      })
    });
  }

  get(config) {
    return this.request({ ...config, method: "get" });
  }

  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

export default new HYRequest(BASE_URL, TIMEOUT)



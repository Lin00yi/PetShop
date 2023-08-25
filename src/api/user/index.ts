import request from '@/utils/request'
import type {
  loginFormData,
  loginResponseData,
  userInfoResponseData,
} from './type'
// enum API {
//   LOGIN_URL = '/user/login',
//   USERINFO_URL = '/user/info',
//   LOGOUT_URL = '/user/logout',
// }
//项目用户相关的请求地址
enum API {
    // LOGIN_URL = '/admin/acl/index/login',
    LOGIN_URL='http://114.115.179.162:8022/prod-api/admin/acl/index/login',
    USERINFO_URL = '/admin/acl/index/info',
    LOGOUT_URL = 'admin/acl/index/logout',


    // LOGIN_URL='/admin/acl/index/login',
    // USERINFO_URL = '/admin/acl/index/info',
    // LOGOUT_URL = '/admin/acl/index/logout',
  }

// //登录接口
// export const reqLogin = (data: loginFormData) => {
//     request.post<any, loginResponseData>(API.Login_URL, data)
// }

//登录接口
export const reqLogin = (data: loginFormData) =>
  request.post<loginResponseData, any>(API.LOGIN_URL, data)
//获取用户信息接口
export const reqUserInfo = () =>
  request.get<userInfoResponseData, any>(API.USERINFO_URL)
//退出登录
export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)

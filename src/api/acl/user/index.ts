//用户管理模块的接口
import request from '@/utils/request'
import type {
  UserResponseData,
  User,
  AllRoleResponseData,
  SetRoleData,
} from './type'
//枚举地址
enum API {
    //获取全部用户账号信息
    ALLUSER_URL = '/admin/acl/user/',
    //新增一个新用户
    ADDUSER_URL = 'http://114.115.179.162:8022/prod-api/admin/acl/user/save',
    //更新一个已有用户
    UPDATEUSER_URL = 'http://114.115.179.162:8022/prod-api/admin/acl/user/update',

    //获取全部职位,当前账号拥有的职位接口
    ALLROLEURL = 'http://114.115.179.162:8022/prod-api/admin/acl/user/toAssign/',
    //给已有的用户分配角色接口
    SETROLE_URL = 'http://114.115.179.162:8022/prod-api/admin/acl/user/doAssignRole',

    //删除一个已有用户
    DELETEUSER_URL = '/admin/acl/user/remove/',
    //批量删除
    DELETEALLUSER_URL = 'http://114.115.179.162:8022/prod-api/admin/acl/user/batchRemove',
}

//获取用户账号信息接口
export const reqUserInfo = (page: number, limit: number, username: string) =>
    request.get<any, any>(API.ALLUSER_URL + `${page}/${limit}/?username=${username}`)

//删除某一个账号的信息
export const reqRemoveUser = (userId: number) =>
    request.delete<any, any>(API.DELETEUSER_URL + userId)

//批量删除的接口
export const reqSelectUser = (idList: number[]) =>
    request.delete(API.DELETEALLUSER_URL, { data: idList })

//添加用户与更新已有用户的接口
export const reqAddOrUpdateUser = (data: User) => {
    //携带参数有ID更新
    if (data.id) {
        return request.put<any, any>(API.UPDATEUSER_URL, data)
    } else {
        return request.post<any, any>(API.ADDUSER_URL, data)
    }
}
//获取全部职位以及包含当前用户的已有的职位
export const reqAllRole = (userId: number) =>
  request.get<any, AllRoleResponseData>(API.ALLROLEURL + userId)
//分配职位
export const reqSetUserRole = (data: SetRoleData) =>
  request.post<any, any>(API.SETROLE_URL, data)


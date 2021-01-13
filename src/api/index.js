/*  
包含N个接口请求函数的模块
函数返回值：promise对象
*/
import ajax from './ajax'
// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)
// 如何根据接口文档来定义接口请求函数
/* 比如：http://localhost:3000/position/:geohash    
      -- :geohash这部分是会发生变化的 它是由经度纬度组成
          * 两种选择， 1，先将经纬度拼接后再传
                      2，分成两个参数传递
      == 我们选择传递一个参数
*/   
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
// [2、获取食品分类列表](#2获取食品分类列表)
export const reqFoodTypes = () => ajax(`/index_category`)

// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)
// 两个值，一个参数。用大括号包起来
// export const reqShops = ({longitude, latitude}) => ajax()

// 传两个参数
export const reqShops = (longitude, latitude) => ajax(`/shops`, {longitude, latitude})
// [4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)
// [5、获取一次性验证码](#5获取一次性验证码)
// [6、用户名密码登陆](#6用户名密码登陆)
// [7、发送短信验证码](#7发送短信验证码)
// [8、手机号验证码登陆](#8手机号验证码登陆)
// [9、根据会话获取用户信息](#9根据会话获取用户信息)
// [10、用户登出](#10用户登出)



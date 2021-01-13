/*  
ajax请求函数模块
返回值：promise对象   (异步返回的数据是:response.data)
*/
import axios from 'axios'
// 传递三个参数
// 参数一，url地址
// 参数二，请求参数data，先给了个默认值
// 参数三，请求的方式， 默认是GET
export default function ajax(url, data={}, type="GET") {

  return new Promise(function (resolve, reject) {
    // 执行异步ajax请求  
    let promise;
    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
      } else {
        // 发送post请求
        promise = axios.post(url, data)
      }
      promise.then(function (response) {
        // 成功了调用resolve()
        // 取出数据
        resolve(response.data)
      }).catch(function (error) {
        //失败了调用reject()
        reject(error)
      })
  })
}
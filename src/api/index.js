import ajax from './ajax.js';
// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress=(geohash)=>ajax('/api/position/'+geohash);
// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqFoodList=()=>ajax('/api/index_category');
// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqShopList=(latitude,longitude)=>ajax('/api/shops',{latitude,longitude})
// [4、获取一次性验证码](#4获取一次性验证码)<br/>
export const reqCaptcha=()=>ajax('/api/captcha');
// [5、用户名密码登陆](#4用户名密码登陆)<br/>
export const loginPwd=(name,pwd,captcha)=>ajax('/api/login_pwd',{name,pwd,captcha},'post');
// [6、发送短信验证码](#5发送短信验证码)<br/>
export const sendCode=(phone)=>ajax('/api/sendcode',{phone});
// [7、手机号验证码登陆](#6手机号验证码登陆)<br/>
export const loginSms=(phone,code)=>ajax('/api/login_sms',{phone,code},'post')
// [8、根据会话获取用户信息](#7根据会话获取用户信息)<br/>
export const reqUserInfo=()=>ajax('/api/userinfo');
//mock数据的shop组件的路由
export const reqShopgoods=()=>ajax('/goods');
export const reqShopratings=()=>ajax('/ratings');
export const reqShopInfo=()=>ajax('/info');

// 验证码类型
export enum CaptchaType {
  REGISTER = 1, // 注册
  LOGIN = 2, // 登录
  FIND_USERNAME = 4, // 找回用户名/修改用户名
  RESET_PASSWORD = 8, // 找回密码/重置密码
  SET_MOBILE = 16, // 设置手机号码
  SET_EMAIL = 32, // 设置邮箱
  FORGET_USERNAME_AND_PASSWORD = 64 // 忘记用户名&密码
}

export interface TokenType {
  // 访问令牌
  token: string;
  // 过期时间
  expireAt: string;
}

export enum CaptchaTypeEnum {
  unknown = 0,
  register = 1,
  login = 2,
  findUsernameOrChangePassword = 4,
  setPassword = 8,
  setMobile = 16,
  setEmail = 32,
  forgotUsernameOrPassword = 64
}

import { cloneDeep } from 'lodash';
import { BaseModel } from '../base';
import { Dayjs } from 'dayjs';

export * from './enum'

// 用户信息类，用于封装用户信息对象
export class UserInfoType extends BaseModel<UserInfoType> {
  // ID
  id: React.Key = 0;
  // 用户名
  username: string = '';
  // 密码
  password: string = '';
  // 状态，0未激活、1正常、-1封号、-2异常、-3已注销
  state: number = 0;
  // 类型，0匿名、1用户、2微商、4商户、8广告主、16服务商、32运营中心、64后台
  type: number = 0;
  // 手机号码
  mobile: string = '';
  // 删除时间，用于软删除
  deletedAt?: Date | string = '';
  // 邮箱地址
  email: string = '';
  // 详细信息
  detail?: UserDetailType | null = null;
  // 角色名称列表
  roleNames: string[] = [];

  /**
   * 构造函数，用于用户信息对象
   *
   * @param initState 用户信息对象，包含用户的各种信息字段如果未提供数据，则默认为空对象
   */
  constructor(initState: Partial<UserInfoType> = {}) {
    // 调用基类的构造函数，并传入部分用户信息对象
    super();
    Object.assign(this, cloneDeep(initState));
  }
}

export class UserDetailType extends BaseModel<UserDetailType> {
  // 用户ID
  id: React.Key = 0;
  // 用户真实姓名
  realname: string = '';
  // 联合主账号名称
  unionMainName: string = '';
  // 最后登录的IP地址
  lastLoginIp: string = '';
  // 最后登录的地区
  lastLoginArea: string = '';
  // 最后登录的时间
  lastLoginAt: Dayjs | null = null;
  // 最后在线的时间
  lastHeartbeatAt: Dayjs | null = null;

  constructor(initState: Partial<UserDetailType> = {}) {
    // 调用父类的构造函数，并传入部分用户详细信息对象
    super();
    Object.assign(this, cloneDeep(initState));
  }
}

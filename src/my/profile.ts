import { cloneDeep } from 'lodash';
import { BaseModel, EmployeeType, UserInfoType } from '..';

export class ProfileType extends BaseModel<ProfileType> {
  // 可选的用户信息，用于存储普通用户的具体信息
  user?: UserInfoType;
  // 可选的员工信息，用于存储属于公司员工的具体信息
  employee?: EmployeeType;
  // 标识该用户是否为管理员，用于区分普通用户和管理员
  isAdmin = false;
  // 标识该用户是否为超级管理员，超级管理员通常拥有更高的权限级别
  isSuperAdmin = false;

  constructor(initState: Partial<ProfileType> = {}) {
    // 调用父类的构造函数，并传入部分用户信息对象
    super();
    Object.assign(this, cloneDeep(initState));
  }

  getUserInfo(): UserInfoType | null | undefined {
    // 如果存在员工信息，则返回员工信息
    if (this.employee) {
      return this.employee.user;
    }
    // 否则返回用户信息
    return this.user;
  }
}

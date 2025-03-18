import { cloneDeep } from "lodash";
import { BaseModel, sexSet, SexSet } from "../base";
import { UserDetailType, UserInfoType } from "../user";
import { TeamType } from "../team";
import { employeeStateSet, EmployeeStateSet } from "./enum";
import { Dayjs } from "dayjs";

export * from "./enum"

/** 员工类，实现了IEmployee接口，用于创建和管理员工实例 */
export class EmployeeType extends BaseModel<EmployeeType> {
  // ID
  id: React.Key = 0;
  // 员工编号，默认为空字符串
  no: string = '';
  // 头像链接，默认为空字符串
  avatar: string = '';
  // 姓名，默认为空字符串
  name: string = '';
  // 手机号，默认为空字符串
  mobile: string = '';
  // 关联主体ID，默认为0
  unionMainId: React.Key = 0;
  // 状态，默认为0
  state: EmployeeStateSet = employeeStateSet.UnActivated;
  // 最后活跃IP，默认为空字符串
  lastActiveIp: string = '';
  // 入职时间，默认为空字符串
  hiredAt: Dayjs | string = '';
  // 创建者ID，默认为0
  createdBy: React.Key = 0;
  // 创建时间，默认为空字符串
  createdAt?: string = '';
  // 最后更新者ID，默认为0
  updatedBy: React.Key = 0;
  // 更新时间，默认为空字符串
  updatedAt?: string = '';
  // 删除者ID，默认为0
  deletedBy: React.Key = 0;
  // 删除时间，默认为空字符串
  deletedAt: string = '';
  // 性别，默认为0
  sex: SexSet = sexSet.Unknown;
  // 备注，默认为空字符串
  remark: string = '';
  // 所属国家编码, 默认为空字符串
  countryCode: string = '';
  // 所属地区，默认为空字符串
  region: string = '';
  // 邮箱，默认为空字符串
  email: string = '';
  // 员工详细信息（可选），默认为null
  detail: UserDetailType | null = null;
  // 用户信息（可选），默认为null
  user: UserInfoType | null = null;
  // 所属团队列表，默认为空数组
  teamList: TeamType[] = [];

  /**
   * 构造函数，用于创建员工实例
   *
   * @param initState 部分员工信息对象，用于初始化员工实例，可选
   */
  constructor(initState: Partial<EmployeeType> = {}) {
    // 调用父类的构造函数，并传入部分员工信息对象
    super();
    Object.assign(this, cloneDeep(initState));
  }
}

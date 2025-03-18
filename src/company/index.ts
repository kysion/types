import { cloneDeep } from "lodash";
import { BaseModel } from "../base";
import { UserInfoType } from "../user";
import { authStateSet, AuthStateSet } from "../license/enum";

export * from './enum';

export class CompanyType extends BaseModel<CompanyType> {
  // ID
  id: React.Key = 0;
  // 名称
  name: string = '';
  // 商务联系人
  contactName: string = '';
  // 商务联系电话
  contactMobile: string = '';
  // 管理员ID
  userId: React.Key = 0;
  // 状态：0未启用，1正常
  state: number = 0;
  // 备注
  remark: string = '';
  // 创建者
  createdBy: React.Key = 0;
  // 创建时间
  createdAt: string = '';
  // 更新者
  updatedBy: React.Key = 0;
  // 更新时间
  updatedAt: string = '';
  // 删除者
  deletedBy: React.Key = 0;
  // 删除时间
  deletedAt: string = '';
  // 父级ID
  parentId: React.Key = 0;
  // 地址
  address: string = '';
  // 主体资质id
  licenseId: React.Key = 0;
  // 主体状态,和主体资质状态保持一致
  licenseState: AuthStateSet = authStateSet.Invalid;
  // 所属国家编码
  countryCode: string = '';
  // 所属地区
  region: string = '';
  // 返回数据(业务接口定义具体数据结构)
  adminUser: UserInfoType | null = null;
  // 综合服务分
  score: number = 0;
  // LOGO
  logoId: React.Key = 0;
  // 图文媒体文件
  mediaJson: string = '';

  constructor(initState: Partial<CompanyType> = {}) {
    super();
    Object.assign(this, cloneDeep(initState));
  }
}

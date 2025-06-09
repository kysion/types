import { cloneDeep } from "lodash";
import { BaseModel } from "../base";
import { UserInfoType, userTypeSet, UserTypeSet } from "../user";
import { authStateSet, AuthStateSet } from "../license/enum";
import { companyStateSet, CompanyStateSet } from "./enum";
import { CountryCodeSet } from "../base/country";
import { CompanyLicenseType, EmployeeInfoType, TeamInfoType } from "..";
export * from './enum';

export class CompanyInfoType extends BaseModel<CompanyInfoType> {
  // ID
  id: number = 0;
  // 名称
  name: string = '';
  // 商务联系人
  contactName: string = '';
  // 商务联系电话
  contactMobile: string = '';
  // 管理员ID
  userId: number = 0;
  // 状态：0未启用，1正常
  state: CompanyStateSet = companyStateSet.Disabled;
  // 备注
  remark: string = '';
  // 创建者
  createdBy: number = 0;
  // 创建时间
  createdAt: string = '';
  // 更新者
  updatedBy: number = 0;
  // 更新时间
  updatedAt: string = '';
  // 删除者
  deletedBy: number = 0;
  // 删除时间
  deletedAt: string = '';
  // 父级ID
  parentId: number = 0;
  // 地址
  address: string = '';
  // 主体资质id
  licenseId: number = 0;
  // 主体状态,和主体资质状态保持一致
  licenseState: AuthStateSet = authStateSet.UnVerified;
  // 所属国家编码
  countryCode: CountryCodeSet | '' = '';
  // 所属地区
  region: string = '';
  // 返回数据(业务接口定义具体数据结构)
  adminUser: UserInfoType | null = null;
  // 综合服务分
  score: number = 0;
  // LOGO
  logoId: number = 0;
  // 佣金
  commissionRate: number = 0;

  constructor(initState: Partial<CompanyInfoType> = {}) {
    super();
    Object.assign(this, cloneDeep(initState));
  }
}

// 公司信息视图类型
export class CompanyInfoViewType extends CompanyInfoType {
  userType: UserTypeSet = userTypeSet.Anonymous;
  teamList: TeamInfoType[] = [];
  license: CompanyLicenseType | null = null;
  employee: EmployeeInfoType | null = null;
  user: UserInfoType | null = null;

  constructor(initState: Partial<CompanyInfoViewType> = {}) {
    super(initState);
    Object.assign(this, cloneDeep(initState));
  }
}
import { cloneDeep } from 'lodash';
import { BaseModel, sexSet, SexSet } from '../base';
import { authStateSet, AuthStateSet } from './enum';

export class PersonalLicenseType extends BaseModel<PersonalLicenseType> {
  // ID
  id: React.Key = 0;
  // 身份证头像面照片
  idcardFrontPath: string = '';
  // 身份证国徽面照片
  idcardBackPath: string = '';
  // 身份证号
  no: string = '';
  // 性别
  gender: SexSet = sexSet.Unknown;
  // 民族
  nation: string = '';
  // 姓名
  name: string = '';
  // 出生日期
  birthday: Date | string = '';
  // 家庭住址
  address: string = '';
  // 签发机关
  issuingAuthorit: string = '';
  // 签发日期
  issuingDate: string = '';
  // 有效期
  expriyDate: string = '';
  // 创建时间
  createdAt: string | null = null;
  // 更新时间
  updatedAt: string | null = null;
  // 删除时间
  deletedAt: string | null = null;
  // 状态：0-失效、1-正常
  state: AuthStateSet = authStateSet.Invalid;
  // 认证类型
  authType: number = 0;
  // 备注信息
  remark: string = '';
  // 最新的审核记录ID
  latestAuditLogId: React.Key = 0;
  // 概述
  summary: string = '';
  constructor(initState: Partial<PersonalLicenseType> = {}) {
    super();
    Object.assign(this, cloneDeep(initState));
  }
}

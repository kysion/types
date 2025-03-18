import { cloneDeep } from 'lodash';
import { BaseModel } from '../base';
import { authStateSet, AuthStateSet, authTypeSet, AuthTypeSet } from './enum';

export class FileInfoType extends BaseModel<FileInfoType> {
  // 标题，可选
  title?: string;
  // id，必需
  id: React.Key = 0;
  // 描述，可选
  desc?: string;
  // 图片地址，可选
  url?: string;
  // 图片大小，可选
  size?: number;
  // 图片后缀，可选
  ext?: string;

  constructor(initState: Partial<FileInfoType> = {}) {
    super();
    Object.assign(this, cloneDeep(initState));
  }
}

export class CompanyLicenseType extends BaseModel<CompanyLicenseType> {
  // ID
  id: React.Key = 0;
  // 身份证头像面照片
  idCardFrontPath: string = '';
  // 身份证国徽面照片
  idCardBackPath: string = '';
  // 身份证号
  idCardNo: string = '';
  // 身份证有效期
  idCardExpiredDate: string | null = null;
  // 身份证户籍地址
  idCardAddress: string = '';
  // 负责人，必须是自然人
  personContactName: string = '';
  // 负责人，联系电话
  personContactMobile: string = '';
  // 公司全称
  businessLicenseName: string = '';
  // 公司地址
  businessLicenseAddress: string = '';
  // 营业执照图片地址
  businessLicensePath: string = '';
  // 经营范围
  businessLicenseScope: string = '';
  // 注册资本
  businessLicenseRegCapital: string = '';
  // 营业期限
  businessLicenseTermTime: string = '';
  // 组织机构代码
  businessLicenseOrgCode: string = '';
  // 统一社会信用代码
  businessLicenseCreditCode: string = '';
  // 法人
  businessLicenseLegal: string = '';
  // 法人证照，如果法人不是自然人，则该项必填
  businessLicenseLegalPath: string = '';
  // 最新的审核记录ID
  latestAuditLogId: React.Key = 0;
  // 状态：0失效、1正常
  state: AuthStateSet = authStateSet.Invalid;
  // 认证类型
  authType: AuthTypeSet = authTypeSet.Individual;
  // 备注信息
  remark: string = '';
  // 创建时间
  createdAt: string | null = null;
  // 更新时间
  updatedAt: string | null = null;
  // 删除时间
  deletedAt: string | null = null;
  // 品牌名称
  brandName: string = '';
  // 法人联系电话
  businessLicenseLegalMobile: string = '';
  // 服务电话
  serverMobile: string = '';
  // 门头照
  doorPicturesJson: string = '';
  doorPictures?: FileInfoType[] = [];

  constructor(initState: Partial<CompanyLicenseType> = {}) {
    super();
    Object.assign(this, cloneDeep(initState));
  }
}

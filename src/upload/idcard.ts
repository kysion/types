import { cloneDeep } from 'lodash';
import { BaseModel } from '../base';

export const IDCardEthnicGroups = [
  { value: '汉族', label: '汉族' },
  { value: '蒙古族', label: '蒙古族' },
  { value: '回族', label: '回族' },
  { value: '藏族', label: '藏族' },
  { value: '维吾尔族', label: '维吾尔族' },
  { value: '苗族', label: '苗族' },
  { value: '彝族', label: '彝族' },
  { value: '壮族', label: '壮族' },
  { value: '布依族', label: '布依族' },
  { value: '朝鲜族', label: '朝鲜族' },
  { value: '满族', label: '满族' },
  { value: '傣族', label: '傣族' },
  { value: '黎族', label: '黎族' },
  { value: '傈僳族', label: '傈僳族' },
  { value: '佤族', label: '佤族' },
  { value: '纳西族', label: '纳西族' },
  { value: '土家族', label: '土家族' },
  { value: '哈尼族', label: '哈尼族' },
  { value: '哈萨克族', label: '哈萨克族' },
  { value: '高山族', label: '高山族' },
  { value: '拉祜族', label: '拉祜族' },
  { value: '水族', label: '水族' },
  { value: '东乡族', label: '东乡族' },
  { value: '景颇族', label: '景颇族' },
  { value: '柯尔克孜族', label: '柯尔克孜族' },
  { value: '土族', label: '土族' },
  { value: '达斡尔族', label: '达斡尔族' },
  { value: '塔塔尔族', label: '塔塔尔族' },
  { value: '仫佬族', label: '仫佬族' },
  { value: '瑶族', label: '瑶族' },
  { value: '白族', label: '白族' },
  { value: '布朗族', label: '布朗族' },
  { value: '侗族', label: '侗族' },
  { value: '畲族', label: '畲族' },
  { value: '俄罗斯族', label: '俄罗斯族' },
  { value: '鄂温克族', label: '鄂温克族' },
  { value: '赫哲族', label: '赫哲族' },
  { value: '德昂族', label: '德昂族' },
  { value: '保安族', label: '保安族' },
  { value: '裕固族', label: '裕固族' },
  { value: '京族', label: '京族' },
  { value: '塔吉克族', label: '塔吉克族' },
  { value: '门巴族', label: '门巴族' },
  { value: '乌孜别克族', label: '乌孜别克族' },
  { value: '基诺族', label: '基诺族' },
  { value: '撒拉族', label: '撒拉族' },
  { value: '仡佬族', label: '仡佬族' },
  { value: '锡伯族', label: '锡伯族' },
  { value: '阿昌族', label: '阿昌族' },
  { value: '普米族', label: '普米族' },
  { value: '独龙族', label: '独龙族' },
  { value: '珞巴族', label: '珞巴族' }
];

// 身份证头像面信息类
export class OrcIDCardAvatarSideType extends BaseModel<OrcIDCardAvatarSideType> {
  // 图像方向
  direction: number = -1; // 默认值为 -1（未定义）
  // 图像状态
  imageStateText: string = '';
  // 风险类型
  riskType: string = '';
  // 地址信息
  address: string = '';
  // 身份证号
  idCardNumber: string = '';
  // 出生日期
  birthday: string = '';
  // 姓名
  realname: string = '';
  // 性别
  gender: string = '';
  // 民族
  nation: string = '';

  constructor(initState: Partial<OrcIDCardAvatarSideType> = {}) {
    super();
    Object.assign(this, cloneDeep(initState));
  }
}

// 身份证信息国徽面信息类
export class OrcIDCardDateSideType extends BaseModel<OrcIDCardDateSideType> {
  // 失效日期
  expiryDate: string = '';
  // 签发机关
  issuingAuthority: string = '';
  // 签发日期
  issuingDate: string = '';

  constructor(initState: Partial<OrcIDCardDateSideType> = {}) {
    super();
    Object.assign(this, cloneDeep(initState));
  }
}

// 身份证信息类
export class IDCardInfo extends BaseModel<IDCardInfo> {
  // 自增ID
  id: React.Key = 0;
  // 文件名称
  name: string = '';
  // 存储路径
  src: string = '';
  // URL地址
  url: string = '';
  // 扩展名
  ext: string = '';
  // 文件大小
  size: number = 0;
  // 文件分类
  category: string = '';
  // 用户ID
  userId: React.Key = 0;
  // 关联主体ID
  unionMainId: React.Key = 0;
  // 创建时间
  createdAt: string | null = '';
  // 更新时间
  updatedAt: string | null = '';
  // 本地路径
  localPath: string = '';
  // 身份证头像面
  ocrIDCardA: OrcIDCardAvatarSideType | null = null;
  // 身份证国徽面
  ocrIDCardB: OrcIDCardDateSideType | null = null;
  constructor(initState: Partial<IDCardInfo> = {}) {
    super();
    Object.assign(this, cloneDeep(initState));
  }
}

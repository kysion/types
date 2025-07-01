import { FdBillsDetailType as AccountDetailType, accountLimitStatusSet, AccountLimitStatusSet } from ".";
import { BaseModel, enabledStateSet, EnabledStateSet, ValueOf } from "../base";
import type { Dayjs } from 'dayjs';
import { UserInfoType } from "../user";
import { CompanyInfoType } from "../company";
import { cloneDeep } from "lodash";

// 账户类型图标类型
type AccountTypeIcon = 'fluent-mdl2:all-currency' |
  'si:credit-card-line' |
  'iconfont:icon-alipay-r' |
  'iconfont:icon-wepay' |
  'iconfont:icon-unionpay' |
  'simple-icons:applepay' |
  'simple-icons:paypal' |
  'simple-icons:amazon' |
  'mdi:cash' |
  'cryptocurrency:btc' |
  'mdi:dots-horizontal';

// 账户类型类型
export type AccountTypeType = {
  value: AccountTypeSet,
  i18nLabel: string,
  icon: AccountTypeIcon,
  color: AccountTypeColor
};

// 账户类型集合
export const accountTypeSet = {
  SystemAccount: 0,
  BankCard: 1,
  Alipay: 2,
  WeChat: 3,
  UnionPay: 4,
  ApplePay: 5,
  PayPal: 6,
  AmazonPay: 7,
  Cash: 8,
  BlockchainWallet: 9,
  Other: 100
} as const;

export type AccountTypeSet = ValueOf<typeof accountTypeSet>;

// 账户类型颜色类型
type AccountTypeColor = 'blue' | 'green' | 'orange' | 'purple' | 'red' | 'cyan' | 'gray' | 'yellow' | 'pink' | 'indigo' | 'teal';

// 账户类型数组
export const AccountTypeTypeArr: readonly AccountTypeType[] = [
  { value: accountTypeSet.SystemAccount, i18nLabel: 'kysion.common.enum.pay.SystemAccount', icon: 'fluent-mdl2:all-currency', color: 'blue' },
  { value: accountTypeSet.BankCard, i18nLabel: 'kysion.common.enum.pay.BankCard', icon: 'si:credit-card-line', color: 'green' },
  { value: accountTypeSet.Alipay, i18nLabel: 'kysion.common.enum.pay.Alipay', icon: 'iconfont:icon-alipay-r', color: 'orange' },
  { value: accountTypeSet.WeChat, i18nLabel: 'kysion.common.enum.pay.WePay', icon: 'iconfont:icon-wepay', color: 'purple' },
  { value: accountTypeSet.UnionPay, i18nLabel: 'kysion.common.enum.pay.UnionPay', icon: 'iconfont:icon-unionpay', color: 'red' },
  { value: accountTypeSet.ApplePay, i18nLabel: 'kysion.common.enum.pay.ApplePay', icon: 'simple-icons:applepay', color: 'gray' },
  { value: accountTypeSet.PayPal, i18nLabel: 'kysion.common.enum.pay.PayPal', icon: 'simple-icons:paypal', color: 'cyan' },
  { value: accountTypeSet.AmazonPay, i18nLabel: 'kysion.common.enum.pay.AmazonPay', icon: 'simple-icons:amazon', color: 'yellow' },
  { value: accountTypeSet.Cash, i18nLabel: 'kysion.common.enum.pay.Cash', icon: 'mdi:cash', color: 'pink' },
  { value: accountTypeSet.BlockchainWallet, i18nLabel: 'kysion.common.enum.pay.BlockchainWallet', icon: 'cryptocurrency:btc', color: 'indigo' },
  { value: accountTypeSet.Other, i18nLabel: 'kysion.common.enum.pay.Other', icon: 'mdi:dots-horizontal', color: 'teal' }
];

// 账户类型映射
export const AccountTypeMap = new Map<AccountTypeSet, AccountTypeType>(AccountTypeTypeArr.map(item => [item.value, item]));

/**
 * ****************************************
 */

// 是否允许存在负余额状态类型
export type AllowNegativeBalanceType = {
  value: AllowNegativeBalanceSet,
  i18nLabel: string,
  color: AllowNegativeBalanceColor
};

// 是否允许存在负余额状态集合
export const allowNegativeBalanceSet = {
  Forbidden: 0,
  Allowed: 1
} as const;

export type AllowNegativeBalanceSet = ValueOf<typeof allowNegativeBalanceSet>;

// 是否允许存在负余额状态颜色类型
type AllowNegativeBalanceColor = 'red' | 'green';

// 是否允许存在负余额状态数组
export const AllowNegativeBalanceTypeArr: readonly AllowNegativeBalanceType[] = [
  { value: allowNegativeBalanceSet.Forbidden, i18nLabel: 'kysion.common.enum.pay.Forbidden', color: 'red' },
  { value: allowNegativeBalanceSet.Allowed, i18nLabel: 'kysion.common.enum.pay.Allowed', color: 'green' }
];

// 是否允许存在负余额状态映射
export const AllowNegativeBalanceMap = new Map<AllowNegativeBalanceSet, AllowNegativeBalanceType>(AllowNegativeBalanceTypeArr.map(item => [item.value, item]));

/**
 * ****************************************
 */

export const i18nAccountType = {
  zh_CN: {
    'kysion.common.enum.pay.SystemAccount': '系统账户',
    'kysion.common.enum.pay.BankCard': '银行卡',
    'kysion.common.enum.pay.Alipay': '支付宝',
    'kysion.common.enum.pay.WePay': '微信',
    'kysion.common.enum.pay.UnionPay': '云闪付',
    'kysion.common.enum.pay.ApplePay': 'ApplePay',
    'kysion.common.enum.pay.PayPal': 'PayPal',
    'kysion.common.enum.pay.AmazonPay': 'AmazonPay',
    'kysion.common.enum.pay.Cash': '线下现金',
    'kysion.common.enum.pay.BlockchainWallet': '区块链钱包',
    'kysion.common.enum.pay.Other': '其他',
    'kysion.common.enum.pay.Forbidden': '禁止',
    'kysion.common.enum.pay.Allowed': '允许'
  },
  en_US: {
    'kysion.common.enum.pay.SystemAccount': 'System Account',
    'kysion.common.enum.pay.BankCard': 'Bank Card',
    'kysion.common.enum.pay.Alipay': 'Alipay',
    'kysion.common.enum.pay.WePay': 'WeChat',
    'kysion.common.enum.pay.UnionPay': 'UnionPay',
    'kysion.common.enum.pay.ApplePay': 'Apple Pay',
    'kysion.common.enum.pay.PayPal': 'PayPal',
    'kysion.common.enum.pay.AmazonPay': 'Amazon Pay',
    'kysion.common.enum.pay.Cash': 'Offline Cash',
    'kysion.common.enum.pay.BlockchainWallet': 'Blockchain Wallet',
    'kysion.common.enum.pay.Other': 'Other',
    'kysion.common.enum.pay.Forbidden': 'Forbidden',
    'kysion.common.enum.pay.Allowed': 'Allowed'
  }
};

// 财务账号
export class AccountInfoType extends BaseModel<AccountInfoType> {
  // ID，可选
  id: number = 0;
  // 账户名称，可选
  name: string = "";
  // 关联资质 ID，大于 0 时必须保值与 union_user_id 关联得上，可选
  unionLicenseId: number = 0;
  // 关联用户 ID，可选
  unionUserId: number = 0;
  // 货币代码，可选
  currencyCode: string = "";
  // 是否启用：1 启用，0 禁用，可选
  isEnabled: EnabledStateSet = enabledStateSet.Enabled;
  // 限制状态：0 不限制，1 限制支出、2 限制收入，可选
  limitState: AccountLimitStatusSet = accountLimitStatusSet.NoLimit;
  // 货币单位精度：1:元，10:角，100:分，1000:厘，10000:毫，……，可选
  precisionOfBalance: number = 0;
  // 当前余额，必须要与账单最后一笔交易余额对应得上，可选
  balance: number = 0;
  // 乐观锁所需数据版本字段，可选
  version: number = 0;
  // 创建时间，可选
  createdAt: Dayjs | string | null = "";
  // 创建者 ID，可选
  createdBy: number = 0;
  // 更新时间，可选
  updatedAt: Dayjs | string | null = "";
  // 更新者 ID，可选
  updatedBy: number = 0;
  // 删除时间，可选
  deletedAt: Dayjs | string | null = "";
  // 删除者 ID，可选
  deletedBy: number = 0;
  // 场景类型：0 不限、1 佣金收入，可选
  sceneType: number = 0;
  // 账户类型：1 系统账户、2 银行卡、3 支付宝、4 微信、5 云闪付、6 翼支付，可选
  accountType: AccountTypeSet = accountTypeSet.SystemAccount;
  // 账户编号，例如银行卡号、支付宝账号、微信账号等对应账户类型的编号，可选
  accountNumber: string = "";
  // 关联主体 ID，与 union_license_id 中的 union_main_id 一致，可选
  unionMainId: number = 0;
  // 是否允许存在负余额: 0 禁止、1 允许，可选
  allowExceed: AllowNegativeBalanceSet = allowNegativeBalanceSet.Allowed;
  // 详情，可选
  detail?: AccountDetailType;

  constructor(initState: Partial<AccountInfoType> = {}) {
    super();
    Object.assign(this, cloneDeep(initState));
  }
}

export class AccountInfoViewType extends AccountInfoType {
  user?: UserInfoType | null;
  unionMain?: CompanyInfoType | null;
  // 今日账户统计
  todayAccountSum: number = 0;
  // 今日账户统计更新时间
  todayUpdatedAt: Dayjs | string | null = null;
  // 本周账户统计
  weekAccountSum: number = 0;
  // 本周账户统计更新时间
  weekUpdatedAt: Dayjs | string | null = null;
  // 本月账户统计
  monthAccountSum: number = 0;
  // 本月账户统计更新时间
  monthUpdatedAt: Dayjs | string | null = null;
  // 本季度账户统计
  quarterAccountSum: number = 0;
  // 本季度账户统计更新时间
  quarterUpdatedAt: Dayjs | string | null = null;
  // 本年账户统计
  yearAccountSum: number = 0;
  // 本年账户统计更新时间
  yearUpdatedAt: Dayjs | string | null = null;

  constructor(initState: Partial<AccountInfoViewType> = {}) {
    super(initState);
    Object.assign(this, cloneDeep(initState));
  }
}
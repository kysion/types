import { BaseModel, ValueOf } from "../base";
import type { Dayjs } from 'dayjs';
import type React from 'react';

// 银行卡类型枚举类型
export type BankCardTypeSetType = {
  bankCardType: BankCardTypeSet,
  i18nLabel: string,
};

// 银行卡类型的取值集合
export const bankCardTypeSet = {
  DebitCard: 1,
  SavingCard: 2
} as const;

export type BankCardTypeSet = ValueOf<typeof bankCardTypeSet>;

export const bankCardTypeArr: readonly BankCardTypeSetType[] = [
  { bankCardType: bankCardTypeSet.DebitCard, i18nLabel: 'kysion.common.enum.BankCardType.DebitCard' },
  { bankCardType: bankCardTypeSet.SavingCard, i18nLabel: 'kysion.common.enum.BankCardType.SavingCard' }
];

export const bankCardTypeMap = new Map<BankCardTypeSet, BankCardTypeSetType>(bankCardTypeArr.map(item => [item.bankCardType, item]));

/**
 * ****************
 */

// 银行卡状态类型
export type BankCardStatusSetType = {
  state: BankCardStatusSet,
  i18nLabel: string,
  color: BankCardStatusColor
};

// 银行卡状态集合
export const bankCardStatusSet = {
  Disabled: 0,
  Normal: 1
} as const;

export type BankCardStatusSet = ValueOf<typeof bankCardStatusSet>;

// 银行卡状态颜色类型
type BankCardStatusColor = 'gray' | 'green';

// 银行卡状态数组
export const BankCardStatusTypeArr: readonly BankCardStatusSetType[] = [
  { state: bankCardStatusSet.Disabled, i18nLabel: 'kysion.common.enum.state.Disabled', color: 'gray' },
  { state: bankCardStatusSet.Normal, i18nLabel: 'kysion.common.enum.state.Normal', color: 'green' }
];

// 银行卡状态映射
export const BankCardStatusMap = new Map<BankCardStatusSet, BankCardStatusSetType>(BankCardStatusTypeArr.map(item => [item.state, item]));

export const i18nBankCard = {
  zh_CN: {
    'kysion.common.enum.state.Disabled': '禁用',
    'kysion.common.enum.state.Normal': '正常',
    'kysion.common.enum.BankCardType.DebitCard': '借记卡',
    'kysion.common.enum.BankCardType.SavingCard': '储蓄卡',
  },
  en_US: {
    'kysion.common.enum.state.Disabled': 'Disabled',
    'kysion.common.enum.state.Normal': 'Normal',
    'kysion.common.enum.BankCardType.DebitCard': 'Debit Card',
    'kysion.common.enum.BankCardType.SavingCard': 'Saving Card',
  }
};

/**
 * *******************
 */

export class BankCardType extends BaseModel<BankCardType> {
  // 银行名称，必需
  bankName: string = "";
  // 银行卡类型，必需
  cardType: BankCardTypeSet = bankCardTypeSet.SavingCard;
  // 银行卡号，必需
  cardNumber: string = "";
  // 有效期，可选
  expiredAt: Dayjs | string | null = "";
  // 银行卡开户名，必需
  holderName: string = "";
  // 银行卡所属用户 id，表示属于谁，可选
  userId: React.Key = 0;
  // 开户行，可选
  bankOfAccount: string = "";
  // 状态：0 禁用，1 正常，可选
  state: BankCardStatusSet = bankCardStatusSet.Normal;
  // 备注信息，可选
  remark: string = "";
}

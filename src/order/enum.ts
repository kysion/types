import { ValueOf } from "../base";

// 申诉状态类型
export type AppealStateType = {
  value: AppealStateSet,
  i18nLabel: string,
  color: AppealStateColor
};

// 申诉状态集合
export const appealStateSet = {
  None: 0,
  Appealing: 1,
  Completed: 2,
  Closed: 4
} as const;

export type AppealStateSet = ValueOf<typeof appealStateSet>;

// 申诉状态颜色类型（同样根据实际展示需求确定合适颜色）
type AppealStateColor = 'gray' | 'orange' | 'green' | 'red';

// 申诉状态数组
export const AppealStateTypeArr: readonly AppealStateType[] = [
  { value: appealStateSet.None, i18nLabel: 'types.orders.enum.None', color: 'gray' },
  { value: appealStateSet.Appealing, i18nLabel: 'types.orders.enum.Appealing', color: 'orange' },
  { value: appealStateSet.Completed, i18nLabel: 'types.orders.enum.Completed', color: 'green' },
  { value: appealStateSet.Closed, i18nLabel: 'types.orders.enum.Closed', color: 'red' }
];

// 申诉状态映射
export const AppealStateMap = new Map<AppealStateSet, AppealStateType>(AppealStateTypeArr.map(item => [item.value, item]));

export const i18nAppealState = {
  zh_CN: {
    'types.orders.enum.None': '无',
    'types.orders.enum.Appealing': '申诉中',
    'types.orders.enum.Completed': '完结',
    'types.orders.enum.Closed': '关闭'
  },
  en_US: {
    'types.orders.enum.None': 'None',
    'types.orders.enum.Appealing': 'Appealing',
    'types.orders.enum.Completed': 'Completed',
    'types.orders.enum.Closed': 'Closed'
  }
};

/**
 * ****************************************************************************
 */
// 支付状态类型
export type PaymentStateType = {
  value: PaymentStateSet,
  i18nLabel: string,
  color: PaymentStateColor
};

// 支付状态集合
export const paymentStateSet = {
  PendingPayment: 0,
  Paid: 1,
  Refunded: 2,
  CancelPayment: 4,
  PaymentFailed: 8,
  PaymentTimeout: 16
} as const;

export type PaymentStateSet = ValueOf<typeof paymentStateSet>;

// 支付状态颜色类型
type PaymentStateColor = undefined | 'green' | 'cyan' | 'red' | 'orange' | 'purple';

// 支付状态数组
export const PaymentStateTypeArr: readonly PaymentStateType[] = [
  { value: paymentStateSet.PendingPayment, i18nLabel: 'kysion.common.enum.PendingPayment', color: undefined },
  { value: paymentStateSet.Paid, i18nLabel: 'kysion.common.enum.Paid', color: 'green' },
  { value: paymentStateSet.Refunded, i18nLabel: 'kysion.common.enum.Refunded', color: 'cyan' },
  { value: paymentStateSet.CancelPayment, i18nLabel: 'kysion.common.enum.CancelPayment', color: 'red' },
  { value: paymentStateSet.PaymentFailed, i18nLabel: 'kysion.common.enum.PaymentFailed', color: 'orange' },
  { value: paymentStateSet.PaymentTimeout, i18nLabel: 'kysion.common.enum.PaymentTimeout', color: 'purple' }
];

// 支付状态映射
export const PaymentStateMap = new Map<PaymentStateSet, PaymentStateType>(PaymentStateTypeArr.map(item => [item.value, item]));

export const i18nPaymentState = {
  zh_CN: {
    'kysion.common.enum.PendingPayment': '待支付',
    'kysion.common.enum.Paid': '已支付',
    'kysion.common.enum.Refunded': '已退款',
    'kysion.common.enum.CancelPayment': '取消支付',
    'kysion.common.enum.PaymentFailed': '支付失败',
    'kysion.common.enum.PaymentTimeout': '支付超时'
  },
  en_US: {
    'kysion.common.enum.PendingPayment': 'Pending Payment',
    'kysion.common.enum.Paid': 'Paid',
    'kysion.common.enum.Refunded': 'Refunded',
    'kysion.common.enum.CancelPayment': 'Cancel Payment',
    'kysion.common.enum.PaymentFailed': 'Payment Failed',
    'kysion.common.enum.PaymentTimeout': 'Payment Timeout'
  }
};

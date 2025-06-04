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
  Processing: 2,
  Completed: 4,
  Closed: 8,
} as const;

export type AppealStateSet = ValueOf<typeof appealStateSet>;

// 申诉状态颜色类型（同样根据实际展示需求确定合适颜色）
type AppealStateColor = 'gray' | 'orange' | 'green' | 'red' | 'yellow';

// 申诉状态数组
export const AppealStateTypeArr: readonly AppealStateType[] = [
  { value: appealStateSet.None, i18nLabel: 'types.orders.enum.None', color: 'gray' },
  { value: appealStateSet.Appealing, i18nLabel: 'types.orders.enum.Appealing', color: 'orange' },
  { value: appealStateSet.Processing, i18nLabel: 'types.orders.enum.Processing', color: 'yellow' },
  { value: appealStateSet.Completed, i18nLabel: 'types.orders.enum.Completed', color: 'green' },
  { value: appealStateSet.Closed, i18nLabel: 'types.orders.enum.Closed', color: 'red' }
];

// 申诉状态映射
export const AppealStateMap = new Map<AppealStateSet, AppealStateType>(AppealStateTypeArr.map(item => [item.value, item]));

export const i18nAppealState = {
  zh_CN: {
    'types.orders.enum.None': '无',
    'types.orders.enum.Appealing': '申诉中',
    'types.orders.enum.Processing': '处理中',
    'types.orders.enum.Completed': '已处理'
  },
  en_US: {
    'types.orders.enum.None': 'None',
    'types.orders.enum.Appealing': 'Appealing',
    'types.orders.enum.Processing': 'Processing',
    'types.orders.enum.Completed': 'Completed'
  }
};

/**
 * ****************************************************************************
 */
// 支付状态类型
// 支付状态类型
export type PaymentStateType = {
  value: PaymentStateSet;
  i18nLabel: string;
  color: PaymentStateColor;
  description?: string; // 新增状态描述
};

// 支付状态集合（使用二进制位分配，便于位运算）
export const paymentStateSet = {
  PendingPayment: 1,      // 待支付
  Processing: 2,          // 支付中
  Paid: 4,                // 已支付
  Failed: 8,              // 支付失败
  Refunding: 16,          // 退款中
  Refunded: 32,           // 已退款
  RefundFailed: 64,       // 退款失败
  Cancelled: 128,         // 已取消
} as const;

export type PaymentStateSet = ValueOf<typeof paymentStateSet>;

// 支付状态颜色类型（新增更多状态色）
type PaymentStateColor = undefined | 'green' | 'cyan' | 'red' | 'orange' | 'purple' | 'blue' | 'gray';

// 支付状态数组（完整核心状态）
export const PaymentStateTypeArr: readonly PaymentStateType[] = [
  { value: paymentStateSet.PendingPayment, i18nLabel: 'kysion.common.enum.PendingPayment', color: undefined, description: '交易已创建，用户未完成支付操作' },
  { value: paymentStateSet.Processing, i18nLabel: 'kysion.common.enum.Processing', color: 'blue', description: '用户已发起支付，系统与支付渠道交互处理中' },
  { value: paymentStateSet.Paid, i18nLabel: 'kysion.common.enum.Paid', color: 'green', description: '资金从付款方账户扣除并到达收款方账户' },
  { value: paymentStateSet.Failed, i18nLabel: 'kysion.common.enum.Failed', color: 'red', description: '支付过程中因账户、渠道或风控等原因导致资金划转失败' },
  { value: paymentStateSet.Refunding, i18nLabel: 'kysion.common.enum.Refunding', color: 'orange', description: '退款申请已提交，资金正在返回付款方账户' },
  { value: paymentStateSet.Refunded, i18nLabel: 'kysion.common.enum.Refunded', color: 'cyan', description: '已支付资金部分或全部退回付款方账户' },
  { value: paymentStateSet.RefundFailed, i18nLabel: 'kysion.common.enum.RefundFailed', color: 'red', description: '退款操作因账户异常、渠道限制等原因未成功' },
  { value: paymentStateSet.Cancelled, i18nLabel: 'kysion.common.enum.Cancelled', color: 'gray', description: '交易在支付完成前被主动取消（如超时未支付、手动取消）' }
];

// 支付状态映射表
export const PaymentStateMap = new Map<PaymentStateSet, PaymentStateType>(
  PaymentStateTypeArr.map(item => [item.value, item])
);

// 支付状态国际化配置
export const i18nPaymentState = {
  zh_CN: {
    'kysion.common.enum.PendingPayment': '待支付',
    'kysion.common.enum.Processing': '支付中',
    'kysion.common.enum.Paid': '已支付',
    'kysion.common.enum.Failed': '支付失败',
    'kysion.common.enum.Refunding': '退款中',
    'kysion.common.enum.Refunded': '已退款',
    'kysion.common.enum.RefundFailed': '退款失败',
    'kysion.common.enum.Cancelled': '已取消'
  },
  en_US: {
    'kysion.common.enum.PendingPayment': 'Pending Payment',
    'kysion.common.enum.Processing': 'Processing',
    'kysion.common.enum.Paid': 'Paid',
    'kysion.common.enum.Failed': 'Payment Failed',
    'kysion.common.enum.Refunding': 'Refunding',
    'kysion.common.enum.Refunded': 'Refunded',
    'kysion.common.enum.RefundFailed': 'Refund Failed',
    'kysion.common.enum.Cancelled': 'Cancelled'
  }
};

// 辅助函数：检查是否为支付成功状态
export function isPaymentSuccess(state: PaymentStateSet): boolean {
  return state === paymentStateSet.Paid;
}
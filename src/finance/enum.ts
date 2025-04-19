import { ValueOf } from "../base";

// 发票信息审核状态类型
export type InvoiceAuditStatusSetType = {
  state: InvoiceAuditStatusSet,
  i18nLabel: string,
  color: InvoiceAuditStatusColor
};

// 发票信息审核状态集合
export const invoiceAuditStatusSet = {
  PendingAudit: 0,
  Approved: 1,
  Rejected: -1
} as const;

export type InvoiceAuditStatusSet = ValueOf<typeof invoiceAuditStatusSet>;

// 发票信息审核状态颜色类型
type InvoiceAuditStatusColor = 'gray' | 'green' | 'red';

// 发票信息审核状态数组
export const InvoiceAuditStatusTypeArr: readonly InvoiceAuditStatusSetType[] = [
  { state: invoiceAuditStatusSet.PendingAudit, i18nLabel: 'kysion.common.enum.invoice.PendingAudit', color: 'gray' },
  { state: invoiceAuditStatusSet.Approved, i18nLabel: 'kysion.common.enum.invoice.Approved', color: 'green' },
  { state: invoiceAuditStatusSet.Rejected, i18nLabel: 'kysion.common.enum.invoice.Rejected', color: 'red' }
];

// 发票信息审核状态映射
export const InvoiceAuditStatusMap = new Map<InvoiceAuditStatusSet, InvoiceAuditStatusSetType>(InvoiceAuditStatusTypeArr.map(item => [item.state, item]));

/**
 * **************************************************
 */

// 发票状态枚举类型
export type InvoiceStateSetType = {
  state: InvoiceStateSet,
  i18nLabel: string,
};

// 发票状态的取值集合
export const invoiceStateSet = {
  PendingAudit: 1,
  PendingBilling: 2,
  BillingFailed: 4,
  Billed: 8,
  Revoked: 16
} as const;

export type InvoiceStateSet = ValueOf<typeof invoiceStateSet>;

export const InvoiceStateArr: readonly InvoiceStateSetType[] = [
  { state: invoiceStateSet.PendingAudit, i18nLabel: 'kysion.common.enum.invoice.PendingAudit' },
  { state: invoiceStateSet.PendingBilling, i18nLabel: 'kysion.common.enum.invoice.PendingBilling' },
  { state: invoiceStateSet.BillingFailed, i18nLabel: 'kysion.common.enum.invoice.BillingFailed' },
  { state: invoiceStateSet.Billed, i18nLabel: 'kysion.common.enum.invoice.Billed' },
  { state: invoiceStateSet.Revoked, i18nLabel: 'kysion.common.enum.invoice.Revoked' }
];

export const InvoiceStateMap = new Map<InvoiceStateSet, InvoiceStateSetType>(InvoiceStateArr.map(item => [item.state, item]));

/**
 * **************************************************
 */

// 出票类型枚举类型
export type MakeInvoiceTypeSetType = {
  makeType: MakeInvoiceTypeSet,
  i18nLabel: string,
};

export const makeInvoiceTypeSet = {
  Normal: 1,
  SpecialVAT: 2,
  Professional: 3
} as const;

export type MakeInvoiceTypeSet = ValueOf<typeof makeInvoiceTypeSet>;

export const MakeInvoiceTypeArr: readonly MakeInvoiceTypeSetType[] = [
  { makeType: makeInvoiceTypeSet.Normal, i18nLabel: 'kysion.common.enum.invoice.Normal' },
  { makeType: makeInvoiceTypeSet.SpecialVAT, i18nLabel: 'kysion.common.enum.invoice.SpecialVAT' },
  { makeType: makeInvoiceTypeSet.Professional, i18nLabel: 'kysion.common.enum.invoice.Professional' }
];

export const MakeInvoiceTypeMap = new Map<MakeInvoiceTypeSet, MakeInvoiceTypeSetType>(MakeInvoiceTypeArr.map(item => [item.makeType, item]));

// 发票类型枚举类型
export type InvoiceTypeSetType = {
  type: InvoiceTypeSet,
  i18nLabel: string,
};

export const invoiceTypeSet = {
  Electronic: 1,
  Paper: 2
} as const;

export type InvoiceTypeSet = ValueOf<typeof invoiceTypeSet>;

export const InvoiceTypeArr: readonly InvoiceTypeSetType[] = [
  { type: invoiceTypeSet.Electronic, i18nLabel: 'kysion.common.enum.invoice.Electronic' },
  { type: invoiceTypeSet.Paper, i18nLabel: 'kysion.common.enum.invoice.Paper' }
];

export const InvoiceTypeMap = new Map<InvoiceTypeSet, InvoiceTypeSetType>(InvoiceTypeArr.map(item => [item.type, item]));

/**
 * **************************************************
 */

// 财务账号限制状态类型
export type AccountLimitStatusType = {
  value: AccountLimitStatusSet,
  i18nLabel: string,
  color: AccountLimitStatusColor
};

// 财务账号限制状态集合
export const accountLimitStatusSet = {
  NoLimit: 0,
  LimitExpenditure: 1,
  LimitIncome: 2
} as const;

export type AccountLimitStatusSet = ValueOf<typeof accountLimitStatusSet>;

// 财务账号限制状态颜色类型
type AccountLimitStatusColor = 'green' | 'orange' | 'purple';

// 财务账号限制状态数组
export const AccountLimitStatusTypeArr: readonly AccountLimitStatusType[] = [
  { value: accountLimitStatusSet.NoLimit, i18nLabel: 'kysion.common.enum.NoLimit', color: 'green' },
  { value: accountLimitStatusSet.LimitExpenditure, i18nLabel: 'kysion.common.enum.LimitExpenditure', color: 'orange' },
  { value: accountLimitStatusSet.LimitIncome, i18nLabel: 'kysion.common.enum.LimitIncome', color: 'purple' }
];

// 财务账号限制状态映射
export const AccountLimitStatusMap = new Map<AccountLimitStatusSet, AccountLimitStatusType>(AccountLimitStatusTypeArr.map(item => [item.value, item]));

/**
 * **************************************************
 */

// 收支类型图标类型
type IncomeExpenseIcon = 'icon-park-outline:income' | 'icon-park-outline:expenses';

// 收支类型类型
export type IncomeExpenseType = {
  value: IncomeExpenseSet,
  i18nLabel: string,
  icon: IncomeExpenseIcon,
  color: IncomeExpenseColor
};

// 收支类型集合
export const incomeExpenseSet = {
  Income: 1,
  Expense: 2
} as const;

export type IncomeExpenseSet = ValueOf<typeof incomeExpenseSet>;

// 收支类型颜色类型
type IncomeExpenseColor = 'green' | 'red';

// 收支类型数组
export const IncomeExpenseTypeSetArr: readonly IncomeExpenseType[] = [
  { value: incomeExpenseSet.Income, i18nLabel: 'kysion.common.enum.Income', icon: 'icon-park-outline:income', color: 'green' },
  { value: incomeExpenseSet.Expense, i18nLabel: 'kysion.common.enum.Expense', icon: 'icon-park-outline:expenses', color: 'red' }
];

// 收支类型映射
export const IncomeExpenseMap = new Map<IncomeExpenseSet, IncomeExpenseType>(IncomeExpenseTypeSetArr.map(item => [item.value, item]));
/**
 * **************************************************
 */
// 交易类型类型
export type TradeType = {
  value: TradeTypeSet,
  i18nLabel: string,
  color: TradeTypeColor
};

// 交易类型集合
export const tradeTypeSet = {
  Transfer: 1,
  Consumption: 2,
  Refund: 4,
  Commission: 8,
  Deposit: 16,
  EarnestMoney: 32,
  Fee: 64,
  Withdraw: 128,
  Recharge: 256,
  Revenue: 512,
  Other: 8192
} as const;

export type TradeTypeSet = ValueOf<typeof tradeTypeSet>;

// 交易类型颜色类型
type TradeTypeColor = 'blue' | 'orange' | 'green' | 'purple' | 'gray' | 'brown' | 'cyan' | 'red' | 'yellow' | 'magenta' | 'black';

// 交易类型数组
export const TradeTypeSetArr: readonly TradeType[] = [
  { value: tradeTypeSet.Transfer, i18nLabel: 'kysion.common.enum.Transfer', color: 'blue' },
  { value: tradeTypeSet.Consumption, i18nLabel: 'kysion.common.enum.Consumption', color: 'orange' },
  { value: tradeTypeSet.Refund, i18nLabel: 'kysion.common.enum.Refund', color: 'green' },
  { value: tradeTypeSet.Commission, i18nLabel: 'kysion.common.enum.Commission', color: 'purple' },
  { value: tradeTypeSet.Deposit, i18nLabel: 'kysion.common.enum.Deposit', color: 'gray' },
  { value: tradeTypeSet.EarnestMoney, i18nLabel: 'kysion.common.enum.EarnestMoney', color: 'brown' },
  { value: tradeTypeSet.Fee, i18nLabel: 'kysion.common.enum.Fee', color: 'cyan' },
  { value: tradeTypeSet.Withdraw, i18nLabel: 'kysion.common.enum.Withdraw', color: 'red' },
  { value: tradeTypeSet.Recharge, i18nLabel: 'kysion.common.enum.Recharge', color: 'yellow' },
  { value: tradeTypeSet.Revenue, i18nLabel: 'kysion.common.enum.Revenue', color: 'magenta' },
  { value: tradeTypeSet.Other, i18nLabel: 'kysion.common.enum.Other', color: 'black' }
];

// 交易类型映射
export const TradeTypeMap = new Map<TradeTypeSet, TradeType>(TradeTypeSetArr.map(item => [item.value, item]));

export const i18nTrade = {
  zh_CN: {
    'kysion.common.enum.Transfer': '转账',
    'kysion.common.enum.Consumption': '消费',
    'kysion.common.enum.Refund': '退款',
    'kysion.common.enum.Commission': '佣金',
    'kysion.common.enum.Deposit': '保证金',
    'kysion.common.enum.EarnestMoney': '诚意金',
    'kysion.common.enum.Fee': '手续费/服务费',
    'kysion.common.enum.Withdraw': '提现',
    'kysion.common.enum.Recharge': '充值',
    'kysion.common.enum.Revenue': '营收',
    'kysion.common.enum.Other': '其它'
  },
  en_US: {
    'kysion.common.enum.Transfer': 'Transfer',
    'kysion.common.enum.Consumption': 'Consumption',
    'kysion.common.enum.Refund': 'Refund',
    'kysion.common.enum.Commission': 'Commission',
    'kysion.common.enum.Deposit': 'Deposit',
    'kysion.common.enum.EarnestMoney': 'Earnest Money',
    'kysion.common.enum.Fee': 'Fee',
    'kysion.common.enum.Withdraw': 'Withdraw',
    'kysion.common.enum.Recharge': 'Recharge',
    'kysion.common.enum.Revenue': 'Revenue',
    'kysion.common.enum.Other': 'Other'
  }
};
/**
 * **************************************************
 */
// 交易状态类型
export type TradeStateType = {
  value: TradeStateSet,
  i18nLabel: string,
  color: TradeStatusColor
};

// 交易状态集合
export const tradeStateSet = {
  PendingPayment: 1,
  Paying: 2,
  Paid: 4,
  CancelPayment: 8,
  Completed: 16,
  Refunding: 32,
  Refunded: 64,
  Timeout: 128,
  Closed: 256
} as const;

export type TradeStateSet = ValueOf<typeof tradeStateSet>;

// 交易状态颜色类型
type TradeStatusColor = 'orange' | 'yellow' | 'green' | 'red' | 'blue' | 'purple' | 'cyan' | 'gray' | 'black';

// 交易状态数组
export const TradeStateSetArr: readonly TradeStateType[] = [
  { value: tradeStateSet.PendingPayment, i18nLabel: 'kysion.common.enum.PendingPayment', color: 'orange' },
  { value: tradeStateSet.Paying, i18nLabel: 'kysion.common.enum.Paying', color: 'yellow' },
  { value: tradeStateSet.Paid, i18nLabel: 'kysion.common.enum.Paid', color: 'green' },
  { value: tradeStateSet.CancelPayment, i18nLabel: 'kysion.common.enum.CancelPayment', color: 'red' },
  { value: tradeStateSet.Completed, i18nLabel: 'kysion.common.enum.Completed', color: 'blue' },
  { value: tradeStateSet.Refunding, i18nLabel: 'kysion.common.enum.Refunding', color: 'purple' },
  { value: tradeStateSet.Refunded, i18nLabel: 'kysion.common.enum.Refunded', color: 'cyan' },
  { value: tradeStateSet.Timeout, i18nLabel: 'kysion.common.enum.Timeout', color: 'gray' },
  { value: tradeStateSet.Closed, i18nLabel: 'kysion.common.enum.Closed', color: 'black' }
];

// 交易状态映射
export const TradeStateMap = new Map<TradeStateSet, TradeStateType>(TradeStateSetArr.map(item => [item.value, item]));

export const i18nTradeState = {
  zh_CN: {
    'kysion.common.enum.PendingPayment': '待支付',
    'kysion.common.enum.Paying': '支付中',
    'kysion.common.enum.Paid': '已支付',
    'kysion.common.enum.CancelPayment': '取消支付',
    'kysion.common.enum.Completed': '交易完成',
    'kysion.common.enum.Refunding': '退款中',
    'kysion.common.enum.Refunded': '已退款',
    'kysion.common.enum.Timeout': '支付超时',
    'kysion.common.enum.Closed': '已关闭'
  },
  en_US: {
    'kysion.common.enum.PendingPayment': 'Pending Payment',
    'kysion.common.enum.Paying': 'Paying',
    'kysion.common.enum.Paid': 'Paid',
    'kysion.common.enum.CancelPayment': 'Cancel Payment',
    'kysion.common.enum.Completed': 'Completed',
    'kysion.common.enum.Refunding': 'Refunding',
    'kysion.common.enum.Refunded': 'Refunded',
    'kysion.common.enum.Timeout': 'Timeout',
    'kysion.common.enum.Closed': 'Closed'
  }
};
/**
 * **************************************************
 */
export const i18nFinancial = {
  zh_CN: {
    'kysion.common.enum.Income': '收入',
    'kysion.common.enum.Expense': '支出',

    'kysion.common.enum.invoice.PendingAudit': '待审核',
    'kysion.common.enum.invoice.Approved': '已通过',
    'kysion.common.enum.invoice.Rejected': '不通过',
    'kysion.common.enum.invoice.PendingBilling': '待开票',
    'kysion.common.enum.invoice.BillingFailed': '开票失败',
    'kysion.common.enum.invoice.Billed': '已开票',
    'kysion.common.enum.invoice.Revoked': '已撤销',
    'kysion.common.enum.invoice.Normal': '普通发票',
    'kysion.common.enum.invoice.SpecialVAT': '增值税专用发票',
    'kysion.common.enum.invoice.Professional': '专业发票',
    'kysion.common.enum.invoice.Electronic': '电子发票',
    'kysion.common.enum.invoice.Paper': '纸质发票',

    'kysion.common.enum.finance.NoLimit': '不限制',
    'kysion.common.enum.finance.LimitExpenditure': '限制支出',
    'kysion.common.enum.finance.LimitIncome': '限制收入'
  },
  en_US: {
    'kysion.common.enum.Income': 'Income',
    'kysion.common.enum.Expense': 'Expense',

    'kysion.common.enum.invoice.PendingAudit': 'Pending Audit',
    'kysion.common.enum.invoice.Approved': 'Approved',
    'kysion.common.enum.invoice.Rejected': 'Rejected',
    'kysion.common.enum.invoice.PendingBilling': 'Pending Billing',
    'kysion.common.enum.invoice.BillingFailed': 'Billing Failed',
    'kysion.common.enum.invoice.Billed': 'Billed',
    'kysion.common.enum.invoice.Revoked': 'Revoked',
    'kysion.common.enum.invoice.Normal': 'Normal Invoice',
    'kysion.common.enum.invoice.SpecialVAT': 'Special VAT Invoice',
    'kysion.common.enum.invoice.Professional': 'Professional Invoice',
    'kysion.common.enum.invoice.Electronic': 'Electronic Invoice',
    'kysion.common.enum.invoice.Paper': 'Paper Invoice',

    'kysion.common.enum.finance.NoLimit': 'No Limit',
    'kysion.common.enum.finance.LimitExpenditure': 'Limit Expenditure',
    'kysion.common.enum.finance.LimitIncome': 'Limit Income'
  }
};

// 充值方式类型
export type RechargeMethodType = {
  value: RechargeMethodSet,
  i18nLabel: string,
  color: RechargeMethodColor,
  icon: string,
};

// 充值方式集合
export const rechargeMethodSet = {
  BankCard: 1,
  Alipay: 2,
  WeChatPay: 3,
  UnionPay: 4,
  ApplePay: 5,
  PayPal: 6,
  AmazonPay: 7,
  Cash: 8,
  Dapp: 9,
  Other: 100
} as const;

export type RechargeMethodSet = ValueOf<typeof rechargeMethodSet>;

// 充值方式颜色类型
type RechargeMethodColor = "blue" | "blue-darken-2" | "green" | undefined | "gray" | "purple" | "black" | "red" | "cyan" | "indigo" | "orange";

// 充值方式数组
export const RechargeMethodTypeArr: readonly RechargeMethodType[] = [
  { value: rechargeMethodSet.BankCard, i18nLabel: 'kysion.common.enum.recharge.BankCard', color: 'blue', icon: 'fluent:payment-24-filled' },
  { value: rechargeMethodSet.Alipay, i18nLabel: 'kysion.common.enum.recharge.Alipay', color: 'blue-darken-2', icon: 'ion:logo-alipay' },
  { value: rechargeMethodSet.WeChatPay, i18nLabel: 'kysion.common.enum.recharge.WeChatPay', color: 'green', icon: 'tdesign:logo-wechatpay-filled' },
  { value: rechargeMethodSet.UnionPay, i18nLabel: 'kysion.common.enum.recharge.UnionPay', color: undefined, icon: 'logos:unionpay' },
  { value: rechargeMethodSet.ApplePay, i18nLabel: 'kysion.common.enum.recharge.ApplePay', color: 'black', icon: 'fontisto:apple-pay' },
  { value: rechargeMethodSet.PayPal, i18nLabel: 'kysion.common.enum.recharge.PayPal', color: 'indigo', icon: 'fa:cc-paypal' },
  { value: rechargeMethodSet.AmazonPay, i18nLabel: 'kysion.common.enum.recharge.AmazonPay', color: 'orange', icon: 'cib:cc-amazon-pay' },
  { value: rechargeMethodSet.Cash, i18nLabel: 'kysion.common.enum.recharge.Cash', color: 'gray', icon: 'hugeicons:payment-02' },
  { value: rechargeMethodSet.Dapp, i18nLabel: 'kysion.common.enum.recharge.Dapp', color: 'purple', icon: 'icon-park-outline:blockchain' },
  { value: rechargeMethodSet.Other, i18nLabel: 'kysion.common.enum.recharge.Other', color: 'cyan', icon: 'icon-park-outline:other' }
];

// 充值方式映射
export const RechargeMethodMap = new Map<RechargeMethodSet, RechargeMethodType>(
  RechargeMethodTypeArr.map(item => [item.value, item])
);

// i18n翻译
export const i18nRechargeMethod = {
  zh_CN: {
    'kysion.common.enum.recharge.BankCard': '银行卡',
    'kysion.common.enum.recharge.Alipay': '支付宝',
    'kysion.common.enum.recharge.WeChatPay': '微信',
    'kysion.common.enum.recharge.UnionPay': '云闪付',
    'kysion.common.enum.recharge.ApplePay': 'Apple Pay',
    'kysion.common.enum.recharge.PayPal': 'PayPal',
    'kysion.common.enum.recharge.AmazonPay': '亚马逊支付',
    'kysion.common.enum.recharge.Cash': '线下现金',
    'kysion.common.enum.recharge.Dapp': '区块链钱包',
    'kysion.common.enum.recharge.Other': '其他'
  },
  en_US: {
    'kysion.common.enum.recharge.BankCard': 'Bank Card',
    'kysion.common.enum.recharge.Alipay': 'Alipay',
    'kysion.common.enum.recharge.WeChatPay': 'WeChat Pay',
    'kysion.common.enum.recharge.UnionPay': 'Union Pay',
    'kysion.common.enum.recharge.ApplePay': 'Apple Pay',
    'kysion.common.enum.recharge.PayPal': 'PayPal',
    'kysion.common.enum.recharge.AmazonPay': 'Amazon Pay',
    'kysion.common.enum.recharge.Cash': 'Cash',
    'kysion.common.enum.recharge.Dapp': 'Blockchain Wallet',
    'kysion.common.enum.recharge.Other': 'Other'
  }
};

// 充值状态类型
export type RechargeStateType = {
  value: RechargeStateSet,
  i18nLabel: string,
  color: RechargeStateColor
};

// 充值状态集合
export const rechargeStateSet = {
  Pending: 0,
  Processing: 1,
  Paid: 2,
  PartialSuccess: 3,
  Failed: 4,
  Cancelled: 5,
  WaitingConfirm: 6
} as const;

export type RechargeStateSet = ValueOf<typeof rechargeStateSet>;

// 充值状态颜色类型
type RechargeStateColor = 'orange' | 'yellow' | 'green' | 'blue' | 'red' | 'gray' | 'purple';

// 充值状态数组
export const RechargeStateTypeArr: readonly RechargeStateType[] = [
  { value: rechargeStateSet.Pending, i18nLabel: 'kysion.common.enum.recharge.Pending', color: 'orange' },
  { value: rechargeStateSet.Processing, i18nLabel: 'kysion.common.enum.recharge.Processing', color: 'yellow' },
  { value: rechargeStateSet.Paid, i18nLabel: 'kysion.common.enum.recharge.Paid', color: 'green' },
  { value: rechargeStateSet.PartialSuccess, i18nLabel: 'kysion.common.enum.recharge.PartialSuccess', color: 'blue' },
  { value: rechargeStateSet.Failed, i18nLabel: 'kysion.common.enum.recharge.Failed', color: 'red' },
  { value: rechargeStateSet.Cancelled, i18nLabel: 'kysion.common.enum.recharge.Cancelled', color: 'gray' },
  { value: rechargeStateSet.WaitingConfirm, i18nLabel: 'kysion.common.enum.recharge.WaitingConfirm', color: 'purple' }
];

// 充值状态映射
export const RechargeStateMap = new Map<RechargeStateSet, RechargeStateType>(
  RechargeStateTypeArr.map(item => [item.value, item])
);

// i18n翻译
export const i18nRechargeState = {
  zh_CN: {
    'kysion.common.enum.recharge.Pending': '待处理',
    'kysion.common.enum.recharge.Processing': '处理中',
    'kysion.common.enum.recharge.Paid': '已支付',
    'kysion.common.enum.recharge.PartialSuccess': '部分成功',
    'kysion.common.enum.recharge.Failed': '失败',
    'kysion.common.enum.recharge.Cancelled': '已取消',
    'kysion.common.enum.recharge.WaitingConfirm': '待确认'
  },
  en_US: {
    'kysion.common.enum.recharge.Pending': 'Pending',
    'kysion.common.enum.recharge.Processing': 'Processing',
    'kysion.common.enum.recharge.Paid': 'Paid',
    'kysion.common.enum.recharge.PartialSuccess': 'Partial Success',
    'kysion.common.enum.recharge.Failed': 'Failed',
    'kysion.common.enum.recharge.Cancelled': 'Cancelled',
    'kysion.common.enum.recharge.WaitingConfirm': 'Waiting Confirmation'
  }
};

// 充值审核状态类型
export type RechargeAuditStateType = {
  value: RechargeAuditStateSet,
  i18nLabel: string,
  color: RechargeAuditStateColor,
  icon: string
};

// 充值审核状态集合
export const rechargeAuditStateSet = {
  PendingAudit: 0,
  Approved: 1,
  Rejected: 2,
  Reviewing: 3,
  WaitingSupplementaryInfo: 4
} as const;

export type RechargeAuditStateSet = ValueOf<typeof rechargeAuditStateSet>;

// 充值审核状态颜色类型
type RechargeAuditStateColor = 'gray' | 'green' | 'red' | 'yellow' | 'orange';

// 充值审核状态数组
export const RechargeAuditStateTypeArr: readonly RechargeAuditStateType[] = [
  { value: rechargeAuditStateSet.PendingAudit, i18nLabel: 'kysion.common.enum.recharge.PendingAudit', color: 'gray', icon: 'material-symbols:pending-actions-rounded' },
  { value: rechargeAuditStateSet.Approved, i18nLabel: 'kysion.common.enum.recharge.Approved', color: 'green', icon: 'material-symbols:check-circle-outline-rounded' },
  { value: rechargeAuditStateSet.Rejected, i18nLabel: 'kysion.common.enum.recharge.Rejected', color: 'red', icon: 'material-symbols:cancel-outline-rounded' },
  { value: rechargeAuditStateSet.Reviewing, i18nLabel: 'kysion.common.enum.recharge.Reviewing', color: 'yellow', icon: 'material-symbols:rate-review-outline-rounded' },
  { value: rechargeAuditStateSet.WaitingSupplementaryInfo, i18nLabel: 'kysion.common.enum.recharge.WaitingSupplementaryInfo', color: 'orange', icon: 'material-symbols:info-outline-rounded' }
];

// 充值审核状态映射
export const RechargeAuditStateMap = new Map<RechargeAuditStateSet, RechargeAuditStateType>(
  RechargeAuditStateTypeArr.map(item => [item.value, item])
);

// i18n翻译
export const i18nRechargeAuditState = {
  zh_CN: {
    'kysion.common.enum.recharge.PendingAudit': '待审核',
    'kysion.common.enum.recharge.Approved': '审核通过',
    'kysion.common.enum.recharge.Rejected': '审核不通过',
    'kysion.common.enum.recharge.Reviewing': '审核中(人工复审)',
    'kysion.common.enum.recharge.WaitingSupplementaryInfo': '补充资料待审核'
  },
  en_US: {
    'kysion.common.enum.recharge.PendingAudit': 'Pending Audit',
    'kysion.common.enum.recharge.Approved': 'Approved',
    'kysion.common.enum.recharge.Rejected': 'Rejected',
    'kysion.common.enum.recharge.Reviewing': 'Under Review',
    'kysion.common.enum.recharge.WaitingSupplementaryInfo': 'Waiting for Supplementary Information'
  }
};
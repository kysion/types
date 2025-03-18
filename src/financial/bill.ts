import { cloneDeep } from "lodash";
import { BaseModel } from "../base";
import type { Dayjs } from 'dayjs';
import { incomeExpenseSet, IncomeExpenseSet, tradeStateSet, TradeStateSet, tradeTypeSet, TradeTypeSet } from ".";

export class AccountBillDetailType extends BaseModel<AccountBillDetailType> {
  // ID，可选，和财务账号 id 保持一致
  id: React.Key = 0;
  // 今日金额，可选
  todayAccountSum: number = 0;
  // 今日金额更新时间，可选
  todayUpdatedAt: Dayjs | string | null = "";
  // 本周金额，可选
  weekAccountSum: number = 0;
  // 本周金额更新时间，可选
  weekUpdatedAt: Dayjs | string | null = "";
  // 本月金额，可选
  monthAccountSum: number = 0;
  // 本月金额更新时间，可选
  monthUpdatedAt: Dayjs | string | null = "";
  // 本季度金额统计，可选
  quarterAccountSum: number = 0;
  // 本季度金额更新时间，可选
  quarterUpdatedAt: Dayjs | string | null = "";
  // 本年度金额统计，可选
  yearAccountSum: number = 0;
  // 本年度金额更新时间，可选
  yearUpdatedAt: Dayjs | string | null = "";
  // 关联主体 id，可选
  unionMainId: React.Key = 0;
  // 关联用户 id，可选
  sysUserId: React.Key = 0;
  // 乐观锁所需数据版本字段，可选
  version: number = 0;
  // 场景类型：0 不限、1 其它，可选
  sceneType: number = 0;
  constructor(initState: Partial<AccountBillDetailType> = {}) {
    super();
    Object.assign(this, cloneDeep(initState));
  }
}

export class AccountBillType extends BaseModel<AccountBillType> {
  // ID，默认值为0，类型为React.Key
  id: React.Key = 0;
  // 交易发起方UserID，如果是系统则固定为-1，默认值为0，类型为React.Key
  fromUserId: React.Key = 0;
  // 交易对象UserID，默认值为0，类型为React.Key
  toUserId: React.Key = 0;
  // 财务账户ID，默认值为0，类型为React.Key
  fdAccountId: React.Key = 0;
  // 交易前账户余额，默认值为0
  beforeBalance: number = 0;
  // 交易金额，默认值为0
  amount: number = 0;
  // 交易后账户余额，默认值为0
  afterBalance: number = 0;
  // 关联业务订单ID，默认值为0，类型为React.Key
  unionOrderId: React.Key = 0;
  // 收支类型：1收入，2支出，默认值为0
  inOutType: IncomeExpenseSet = incomeExpenseSet.Income;
  // 交易类型，1转账、2消费、4退款、8佣金、16保证金、32诚意金、64手续费/服务费、128提现、256充值、512营收，8192其它，默认值为0
  tradeType: TradeTypeSet = tradeTypeSet.Other;
  // 交易时间，默认值为""
  tradeAt: string = "";
  // 备注信息，默认值为""
  remark: string = "";
  // 交易状态：1待支付、2支付中、4已支付、8取消支付、16交易完成、32退款中、64已退款、128支付超时、256已关闭，默认值为0
  tradeState: TradeStateSet = tradeStateSet.PendingPayment;
  // 删除时间，默认值为""
  deletedAt: string = "";
  // 创建时间，默认值为""
  createdAt: string = "";
  // 创建者ID，默认值为0，类型为React.Key
  createdBy: React.Key = 0;

  constructor(initState: Partial<AccountBillType> = {}) {
    super();
    Object.assign(this, cloneDeep(initState));
  }
}
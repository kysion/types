import { BaseModel } from "../base";
import type { Dayjs } from 'dayjs';

export class MemberLevelType extends BaseModel<MemberLevelType> {
  // ID，可选
  id: number = 0;
  // 名称，可选
  name: string = "";
  // 描述，可选
  desc: string = "";
  // 级别标识符，可选
  identifier: string = "";
  // 创建时间，可选
  createdAt: Dayjs | string | null = "";
  // 更新时间，可选
  updatedAt: Dayjs | string | null = "";
  // 创建者 ID，可选
  createdBy: number = 0;
  // 关联主体 ID，可选
  unionMainId: number = 0;
  // 权益级别，要遵循数值越大，权益越多，可选
  level: number = 0;
  // 充值金额,开通条件，可选
  rechargeAmount: number = 0;
  // 日可下单次数，可选
  canOrderCount: number = 0;
  // 单笔可做单最大金额，可选
  canOrderMaxPrice: number = 0;
  // 佣金率，可选
  commissionRate: number = 0;
  // 订单回款最小时限，单位/秒，可选
  orderDeliveryMinLimitAt: number = 0;
  // 订单回款最大时限，单位/秒，可选
  orderDeliveryMaxLimitAt: number = 0;
  // 接单等待最小时限，单位/秒，可选
  orderWaitingMinLimitAt: number = 0;
  // 接单等待最大时限，单位/秒，可选
  orderWaitingMaxLimitAt: number = 0;
}

import { BaseModel } from '../base';
import { appealStateSet, AppealStateSet, paymentStateSet, PaymentStateSet } from './enum';
import { Dayjs } from 'dayjs';
import { EmployeeInfoType } from '../employee';
import { CompanyInfoType } from '../company';
import { GoodsInfoType } from '../goods';
import { cloneDeep } from 'lodash';

export * from "./enum"

/**
 * 订单实体类
 * 
 * 用于管理订单信息，包括订单基本信息、支付信息、物流信息等
 */
export class OrderInfoType extends BaseModel<OrderInfoType> {
  // ID，默认值为0，类型为number
  id: number = 0;
  // 订单号，默认值为0，类型为number
  no: number = 0;
  // 下单时间，默认值为""
  orderCreatedAt: Dayjs | string = "";
  // 买家用户ID，默认值为0，类型为number
  buyerUserId: number = 0;
  // 卖家用户ID，默认值为0，类型为number
  sellerUserId: number = 0;
  // 卖家所属主体ID，默认值为0，类型为number
  sellerUnionMainId: number = 0;
  // 商品ID，默认值为0，类型为number
  goodsId: number = 0;
  // 商品推广设置ID，默认值为0，类型为number
  goodsPromotionSettingId: number = 0;
  // 订单金额（单位：分），默认值为0
  orderAmount: number = 0;
  // 实付金额（单位：分），默认值为0
  payAmount: number = 0;
  // 运单ID，默认值为0，类型为number
  expressId: number = 0;
  // 支付状态： 1待支付，2支付中，4已支付，8支付失败，16退款中，32已退款，64退款失败，128已取消
  payState: PaymentStateSet = paymentStateSet.PendingPayment;
  // 收付账单ID，默认值为0，类型为number
  payBillId: number = 0;
  // 服务费率（单位：千分比），默认值为0
  serviceRate: number = 0;
  // 服务费金额（单位：分），默认值为0
  serviceRateAmount: number = 0;
  // 申诉状态： 0无，1申诉中，2处理中，4已处理，8已关闭
  appealState: AppealStateSet = appealStateSet.None;
  // 佣金金额（单位：分），默认值为0
  commissionAmount: number = 0;
  // 创建时间，默认值为""
  createdAt: Dayjs | string = "";
  // 创建者ID，默认值为0，类型为number
  createdBy: number = 0;
  // 更新时间，默认值为""
  updatedAt: Dayjs | string = "";
  // 更新者ID，默认值为0，类型为number
  updatedBy: number = 0;
  // 删除时间，默认值为""
  deletedAt: Dayjs | string = "";
  // 删除者ID，默认值为0，类型为number
  deletedBy: number = 0;
  // 买家用户，类型为EmployeeInfoType
  buyerUser?: EmployeeInfoType;
  // 买家公司，类型为CompanyInfoType
  buyerCompany?: CompanyInfoType;
  // 卖家用户，类型为EmployeeInfoType
  sellerUser?: EmployeeInfoType;
  // 卖家公司，类型为CompanyInfoType
  sellerCompany?: CompanyInfoType;
  // 商品，类型为GoodsInfoType
  goods?: GoodsInfoType;

  constructor(initState: Partial<OrderInfoType> = {}) {
    super();
    Object.assign(this, cloneDeep(initState));
  }

  /**
   * 验证实体是否有效
   */
  validate(): boolean {
    return this.id > 0 && this.no > 0 && this.goodsId > 0 && this.orderAmount > 0;
  }

  /**
   * 便捷方法：检查订单是否已支付
   */
  get isPaid(): boolean {
    return this.payState === paymentStateSet.Paid;
  }

  /**
   * 便捷方法：检查订单是否已退款
   */
  get isRefunded(): boolean {
    return this.payState === paymentStateSet.Refunded;
  }

  /**
   * 便捷方法：检查订单是否已取消
   */
  get isCancelled(): boolean {
    return this.payState === paymentStateSet.Cancelled;
  }

  /**
   * 便捷方法：检查订单是否支付失败
   */
  get isPaymentFailed(): boolean {
    return this.payState === paymentStateSet.Failed;
  }

  /**
   * 便捷方法：检查订单是否有申诉
   */
  get hasAppeal(): boolean {
    return this.appealState !== appealStateSet.None;
  }

  /**
   * 便捷方法：检查订单是否申诉中
   */
  get isAppealing(): boolean {
    return this.appealState === appealStateSet.Appealing;
  }

  /**
   * 便捷方法：检查订单申诉是否已完结
   */
  get isAppealFinished(): boolean {
    return this.appealState === appealStateSet.Completed;
  }

  /**
   * 便捷方法：检查订单申诉是否已关闭
   */
  get isAppealClosed(): boolean {
    return this.appealState === appealStateSet.Closed;
  }

  /**
   * 便捷方法：检查订单申诉是否已处理
   */
  get isAppealProcessed(): boolean {
    return this.appealState === appealStateSet.Completed;
  }
}

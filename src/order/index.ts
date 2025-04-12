import cloneDeep from 'lodash/cloneDeep';
import { BaseModel } from '../base';
import { appealStateSet, AppealStateSet, paymentStateSet, PaymentStateSet } from './enum';
import { Dayjs } from 'dayjs';
import { EmployeeInfoType } from '../employee';
import { CompanyInfoType } from '../company';
import { GoodsInfoType } from '../goods';

export * from "./enum"

export class OrderInfoType extends BaseModel<OrderInfoType> {
  // ID，默认值为0，类型为number
  id: number = 0;
  // 订单号，默认值为0，类型为number
  no: number = 0;
  // 下单时间，默认值为""
  orderCreatedAt: Dayjs | string = "";
  // 买家，默认值为0，类型为number
  buyerUserId: number = 0;
  // 卖家，默认值为0，类型为number
  sellerUserId: number = 0;
  // 商品ID，默认值为0，类型为number
  goodsId: number = 0;
  // 订单金额，默认值为0
  orderAmount: number = 0;
  // 实付金额，默认值为0
  payAmount: number = 0;
  // 运单信息，默认值为0，类型为number
  expressId: number = 0;
  // 支付状态： 0待支付，1已支付，2已退款，4取消支付，8支付失败，16支付超时，默认值为0
  payState: PaymentStateSet = paymentStateSet.PendingPayment;
  // 收付账单ID，默认值为0，类型为number
  payBillId: number = 0;
  // 服务费率，默认值为0
  serviceRate: number = 0;
  // 服务费率金额，默认值为0
  serviceRateAmount: number = 0;
  // 申诉状态： 0无，1申诉中，2完结，4关闭，默认值为0
  appealState: AppealStateSet = appealStateSet.None;
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
  // 买家用户，类型为EmployeeType
  BuyerUser?: EmployeeInfoType;
  // 买家公司，类型为CompanyInfoType
  BuyerCompany?: CompanyInfoType;
  // 卖家用户，类型为EmployeeInfoType
  SellerUser?: EmployeeInfoType;
  // 卖家公司，类型为CompanyInfoType
  SellerCompany?: CompanyInfoType;
  // 商品，类型为GoodsInfoType
  Goods?: GoodsInfoType;
  constructor(initState: Partial<OrderInfoType> = {}) {
    super();
    Object.assign(this, cloneDeep(initState));
  }
}

import { cloneDeep } from "lodash";
import { BaseModel } from "../base";
import type { Dayjs } from 'dayjs';

import {
  invoiceAuditStatusSet,
  InvoiceAuditStatusSet,
  invoiceStateSet,
  InvoiceStateSet,
  invoiceTypeSet,
  InvoiceTypeSet,
  makeInvoiceTypeSet,
  MakeInvoiceTypeSet
} from "./enum";
import { UserInfoType } from "../user";
import { CompanyInfoType } from "../company";

export * from './enum'

// 发票抬头
export class FdInvoiceInfoType extends BaseModel<FdInvoiceInfoType> {
  // 唯一标识
  id: number = 0;
  // 发票抬头名称
  name: string = '';
  // 纳税识别号
  taxId: string = '';
  // 发票收件地址，限纸质
  addr: string = '';
  // 发票收件邮箱，限电子发票
  email: string = '';
  // 申请人 UserID
  userId: number = 0;
  // 审核人 UserID
  auditUserId: number = 0;
  // 审核回复，仅审核不通过时才有值
  auditReplyMsg: string = '';
  // 审核时间
  auditAt: Dayjs | string | null = '';
  // 状态：0 待审核、1 已通过、-1 不通过
  state: InvoiceAuditStatusSet = invoiceAuditStatusSet.PendingAudit;
  // 主体 ID：运营商 ID、服务商 ID、商户 ID、消费者 ID
  unionMainId: number = 0;
  // 创建时间
  createdAt: Dayjs | string | null = '';
  // 创建人 ID
  createdBy: number = 0;
  // 更新时间
  updatedAt: Dayjs | string | null = '';
  // 更新人 ID
  updatedBy: number = 0;
  // 删除时间
  deletedAt: Dayjs | string | null = '';
  // 删除人 ID
  deletedBy: number = 0;

  constructor(initState: Partial<FdInvoiceInfoType> = {}) {
    super();
    Object.assign(this, cloneDeep(initState));
  }
}

export class FdApplyInvoiceType extends BaseModel<FdApplyInvoiceType> {
  // ID，可选
  id: number = 0;
  // 纳税识别号，可选
  taxNumber: string = "";
  // 纳税人名称，可选
  taxName: string = "";
  // 账单 ID 组，可选
  billIds: string = "";
  // 开票金额，单位精度：分，可选
  amount: number = 0;
  // 税率，如 3% 则填入 3，可选
  rate: number = 0;
  // 税额，单位精度：分，可选
  rateMount: number = 0;
  // 发布内容描述，可选
  remark: string = "";
  // 发票类型：1 电子发票，2 纸质发票，可选
  type: InvoiceTypeSet = invoiceTypeSet.Electronic;
  // 状态：1 待审核、2 待开票、4 开票失败、8 已开票、16 已撤销，可选
  state: InvoiceStateSet = invoiceStateSet.PendingAudit;
  // 审核者 UserID，多个用逗号隔开，可选
  auditUserIds: string = "";
  // 出票类型：1 普通发票、2 增值税专用发票、3 专业发票，可选
  makeType: MakeInvoiceTypeSet = makeInvoiceTypeSet.Normal;
  // 出票人 UserID，如果是系统出票则默认 -1，可选
  makeUserId: number = 0;
  // 出票时间，可选
  makeAt: Dayjs | string | null = "";
  // 快递名称，限纸质发票，可选
  courierName: string = "";
  // 快递编号，限纸质发票，可选
  courierNumber: string = "";
  // 发票抬头 ID，可选
  fdInvoiceId: number = 0;
  // 审核者 UserID，可选
  auditUserId: number = 0;
  // 审核回复，仅审核不通过时才有值，可选
  auditReplyMsg: string = "";
  // 审核时间，可选
  auditAt: Dayjs | string | null = "";
  // 申请者用户 ID，可选
  userId: number = 0;
  // 主体 ID：运营商 ID、服务商 ID、商户 ID、消费者 ID，可选
  unionMainId: number = 0;
  // 发票收件邮箱，限电子发票，可选
  email: string = "";
  // 创建时间
  createdAt: Dayjs | string | null = "";
  // 创建者 ID
  createdBy: number | null = null;
  // 更新时间
  updatedAt: Dayjs | string | null = "";
  // 更新者 ID
  updatedBy: number | null = null;
  // 删除时间
  deletedAt: Dayjs | string | null = "";
  // 删除者 ID
  deletedBy: number | null = null;
  // 所属（含义不明，根据实际情况可能需要修改），可选
  belongTo: number = 0;

  constructor(initState: Partial<FdApplyInvoiceType> = {}) {
    super();
    Object.assign(this, cloneDeep(initState));
  }
}

export class FdMakeInvoiceDetailType extends BaseModel<FdMakeInvoiceDetailType> {
  // 发票详情 id，必需
  invoiceDetailId: number = 0;
  // 出票类型，可选
  makeType: MakeInvoiceTypeSet = makeInvoiceTypeSet.Normal;
  // 发票类型，必需
  type: InvoiceTypeSet = invoiceTypeSet.Electronic;
  // 开票者 UserID，可选
  makeUserId?: number;
  // 快递名称，限纸质发票，可选
  courierName: string = "";
  // 快递编号，限纸质发票，可选
  courierNumber: string = "";
  // 发票收件邮箱，限电子发票，可选
  email: string = "";

  constructor(initState: Partial<FdMakeInvoiceDetailType> = {}) {
    super();
    Object.assign(this, cloneDeep(initState));
  }
}

export class FdInvoiceInfoViewType extends FdInvoiceInfoType {
  user?: UserInfoType | null;
  unionMain?: CompanyInfoType | null;

  constructor(initState: Partial<FdInvoiceInfoViewType> = {}) {
    super(initState);
    Object.assign(this, cloneDeep(initState));
  }
}

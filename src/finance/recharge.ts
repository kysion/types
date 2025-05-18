import cloneDeep from 'lodash/cloneDeep';
import { AuditStateSet, auditStateSet, BaseModel } from '../base';
import { RechargeMethodSet, rechargeMethodSet, RechargeStateSet, rechargeStateSet } from './enum';

export class RechargeInfoType extends BaseModel<RechargeInfoType> {
    // 唯一标识每一条充值记录
    id: number = 0;

    // 用户ID，关联用户表主键，用于标识充值所属用户
    userId: number = 0;

    // 用户账号，冗余存储方便快速查询用户相关充值记录
    username: string = "";

    // 货币代码，如CNY（人民币）、USD（美元）等
    currencyCode: string = "";

    // 充值金额，小数点后保留2位，且金额需大于0
    amount: number = 0;

    // 充值方式：1-银行卡；2-支付宝；3-微信；4-云闪付；5-Apple Pay；6-PayPal；7-亚马逊支付；8-线下现金；9-区块链钱包；100-其他
    rechargeMethod: RechargeMethodSet = rechargeMethodSet.Other;

    // 充值支付时间，记录用户实际支付成功的时间
    paymentAt: string = "";

    // 外部支付订单号，第三方支付平台生成的订单编号
    paymentOrderNo: string = "";

    // 交易流水号，系统内部生成，用于后续对账和查询
    transactionNo: string = "";

    // 充值状态：0-待处理；1-处理中；2-已支付；3-部分成功；4-失败；5-已取消；6-待确认
    state: RechargeStateSet = rechargeStateSet.Pending;

    // 审核状态：0-待审核；1-审核通过；2-审核不通过；3-审核中（人工复审）；4-补充资料待审核
    auditState: AuditStateSet = auditStateSet.PendingAudit;

    // 审核意见，审核人员填写审核通过或不通过的原因等
    auditReply: string = "";

    // 用户发起充值请求时的IP地址
    ipAddress: string = "";

    // 用户使用的设备和浏览器信息
    userAgent: string = "";

    // 关联ID
    unionMainId: number = 0;

    // 财务账户
    accountId: number = 0;

    // 备注，可记录一些特殊情况或额外信息
    remark: string = "";

    // 充值截图
    screenshotId: number = 0;

    // 记录创建时间，即充值请求提交时间
    createdAt: string = "";

    // 记录最后更新时间，每次记录状态等信息变更时更新
    updatedAt: string = "";

    // 逻辑删除时间，用于软删除，非真正物理删除，便于数据追溯和恢复
    deletedAt: string = "";

    // 公司类型
    companyType: number = 0;

    // 审核ID
    auditId: number = 0;

    constructor(initState: Partial<RechargeInfoType> = {}) {
        super();
        Object.assign(this, cloneDeep(initState));
    }
}
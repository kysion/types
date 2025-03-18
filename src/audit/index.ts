import { cloneDeep } from 'lodash';
import { BaseModel } from '../base';
import { auditCategorySet, AuditCategorySet, auditStateSet, AuditStateSet } from './enum';

export * from './enum'

// 审核
export class AuditType extends BaseModel<AuditType> {
  // 审核ID
  id: React.Key = 0;
  // 审核状态
  state: AuditStateSet = auditStateSet.Pending;
  // 审核类型
  reply: string = '';
  // 审核内容
  unionMainId: React.Key = 0;
  // 审核业务类型
  category: AuditCategorySet = auditCategorySet.BusinessScene;
  // 审核数据
  auditData: string = '';
  // 审核时限
  expireAt: string = '';
  // 审核回复时间
  auditReplyAt: string = '';
  // 审核历史记录
  historyItems: string = '';
  // 创建时间
  createdAt: string = '';
  // 审核操作人员
  auditUserId: React.Key = 0;
  // 数据标识
  dataIdentifier: string = '';
  // 用户ID
  userId: React.Key = 0;
  // 概述
  summary: string = '';
  // 审核分组
  auditGroup: string = '';

  // 构造函数，接收一个可选的initState参数，用于初始化权限对象的属性
  constructor(initState: Partial<AuditType> = {}) {
    // 调用父类的构造函数，用于初始化权限对象的基本属性
    super();
    Object.assign(this, cloneDeep(initState));
  }
}

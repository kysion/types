import { ValueOf } from "../base";

// 审核类别类型
export type AuditCategoryType = {
  value: AuditCategorySet,
  i18nLabel: string,
  icon: AuditCategoryIcon,
  color: AuditCategoryColor
};

// 审核类别枚举包装
export const auditCategorySet = {
  Unknown: 0,
  Personal: 1,
  Enterprise: 2,
  BusinessScene: 4
} as const;

export type AuditCategorySet = ValueOf<typeof auditCategorySet>;

export type AuditCategoryIcon = 'mdi:help-circle-outline' | 'octicon:person-16' | 'mdi:briefcase' | 'mdi:chart-bell-curve';

type AuditCategoryColor = undefined | 'red' | 'green' | 'blue';

// 审核类别数组
export const AuditCategoryArr: readonly AuditCategoryType[] = [
  { value: auditCategorySet.Unknown, i18nLabel: 'kysion.common.enum.Unknown', icon: 'mdi:help-circle-outline', color: undefined },
  { value: auditCategorySet.Personal, i18nLabel: 'kysion.common.enum.Personal', icon: 'octicon:person-16', color: 'blue' },
  { value: auditCategorySet.Enterprise, i18nLabel: 'kysion.common.enum.Enterprise', icon: 'mdi:briefcase', color: 'green' },
  { value: auditCategorySet.BusinessScene, i18nLabel: 'kysion.common.enum.BusinessScene', icon: 'mdi:chart-bell-curve', color: 'blue' }
];

// 审核类别映射
export const AuditCategoryMap = new Map<AuditCategorySet, AuditCategoryType>(AuditCategoryArr.map(item => [item.value, item]));


export const i18nAuditCategory = {
  zh_CN: {
    'kysion.common.enum.Unknown': 'Unknown',
    'kysion.common.enum.Personal': '个人资质审核',
    'kysion.common.enum.Enterprise': '主体资质审核',
    'kysion.common.enum.BusinessScene': '数据审核'
  },
  en_US: {
    'kysion.common.enum.Unknown': 'Unknown',
    'kysion.common.enum.Personal': 'Personal Qualification',
    'kysion.common.enum.Enterprise': 'Enterprise Qualification',
    'kysion.common.enum.BusinessScene': 'BusinessScene'
  }
};

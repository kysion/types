import { ValueOf } from "../index";

// 通用审核状态类型
export type AuditStateType = {
    value: AuditStateSet,
    i18nLabel: string,
    color: AuditStateColor,
    icon: string
};

// 通用审核状态集合
export const auditStateSet = {
    Cancel: -1,         // 取消
    PendingAudit: 0,     // 待审核
    Approved: 1,         // 审核通过
    Rejected: 2,         // 审核不通过
    Reviewing: 3,        // 审核中(人工复审)
    WaitingSupplementaryInfo: 4  // 补充资料待审核
} as const;

export type AuditStateSet = ValueOf<typeof auditStateSet>;

// 通用审核状态颜色类型
type AuditStateColor = 'gray' | 'green' | 'red' | 'yellow' | 'orange';

// 通用审核状态数组
export const AuditStateTypeArr: readonly AuditStateType[] = [
    { value: auditStateSet.Cancel, i18nLabel: 'kysion.common.enum.audit.Cancel', color: 'gray', icon: 'material-symbols:cancel-outline-rounded' },
    { value: auditStateSet.PendingAudit, i18nLabel: 'kysion.common.enum.audit.PendingAudit', color: 'gray', icon: 'material-symbols:pending-actions-rounded' },
    { value: auditStateSet.Approved, i18nLabel: 'kysion.common.enum.audit.Approved', color: 'green', icon: 'material-symbols:check-circle-outline-rounded' },
    { value: auditStateSet.Rejected, i18nLabel: 'kysion.common.enum.audit.Rejected', color: 'red', icon: 'material-symbols:cancel-outline-rounded' },
    { value: auditStateSet.Reviewing, i18nLabel: 'kysion.common.enum.audit.Reviewing', color: 'yellow', icon: 'material-symbols:rate-review-outline-rounded' },
    { value: auditStateSet.WaitingSupplementaryInfo, i18nLabel: 'kysion.common.enum.audit.WaitingSupplementaryInfo', color: 'orange', icon: 'material-symbols:info-outline-rounded' }
];

// 通用审核状态映射
export const AuditStateMap = new Map<AuditStateSet, AuditStateType>(
    AuditStateTypeArr.map(item => [item.value, item])
);

// 国际化翻译
export const i18nAuditState = {
    zh_CN: {
        'kysion.common.enum.audit.Cancel': '取消',
        'kysion.common.enum.audit.PendingAudit': '待审核',
        'kysion.common.enum.audit.Approved': '审核通过',
        'kysion.common.enum.audit.Rejected': '审核不通过',
        'kysion.common.enum.audit.Reviewing': '审核中(人工复审)',
        'kysion.common.enum.audit.WaitingSupplementaryInfo': '补充资料待审核'
    },
    en_US: {
        'kysion.common.enum.audit.Cancel': 'Cancel',
        'kysion.common.enum.audit.PendingAudit': 'Pending Audit',
        'kysion.common.enum.audit.Approved': 'Approved',
        'kysion.common.enum.audit.Rejected': 'Rejected',
        'kysion.common.enum.audit.Reviewing': 'Under Review',
        'kysion.common.enum.audit.WaitingSupplementaryInfo': 'Waiting for Supplementary Information'
    }
};

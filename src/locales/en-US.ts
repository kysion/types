export default {
    // Base enums (base/enum.ts)
    'kysion.common.enum.base.Unknown': 'Unknown',
    'kysion.common.enum.Male': 'Male',
    'kysion.common.enum.Female': 'Female',
    'kysion.common.enum.Enabled': 'Enabled',
    'kysion.common.enum.Disabled': 'Disabled',
    'kysion.common.enum.Yes': 'Yes',
    'kysion.common.enum.No': 'No',

    // Common actions (common/action.ts)
    'kysion.common.refresh.tooltip': 'Refresh',
    'kysion.table.column.setting.title': 'Column Settings',
    'kysion.table.pagination.showTotal': 'Total {total} records, showing {begin}-{end}',

    // Query conditions (base/query.ts)
    'kysion.query.Equal': 'Equal',
    'kysion.query.GreaterThan': 'Greater Than',
    'kysion.query.GreaterThanOrEqual': 'Greater Than or Equal',
    'kysion.query.LessThan': 'Less Than',
    'kysion.query.LessThanOrEqual': 'Less Than or Equal',
    'kysion.query.NotEqual': 'Not Equal',
    'kysion.query.In': 'In',
    'kysion.query.Like': 'Like',
    'kysion.query.Like.PrefixContain': 'Prefix Match',
    'kysion.query.Like.Contain': 'Contains',
    'kysion.query.Like.SuffixContain': 'Suffix Match',
    'kysion.query.Sort.None': 'No Sort',
    'kysion.query.Sort.Auto': 'Auto',
    'kysion.query.Sort.Asc': 'Ascending',
    'kysion.query.Sort.Desc': 'Descending',

    // User status (user/enum.ts)
    'kysion.common.enum.state.Unactivated': 'Unactivated',
    'kysion.common.enum.state.Normal': 'Normal',
    'kysion.common.enum.state.Banned': 'Banned',
    'kysion.common.enum.state.Abnormal': 'Abnormal',
    'kysion.common.enum.state.LoggedOut': 'Logged Out',

    // Company status (company/enum.ts)
    'kysion.common.state.disabled': 'Disabled',
    'kysion.common.state.normal': 'Normal',

    // Employee status (employee/enum.ts)
    'kysion.employee.column.state.leave': 'Resigned',
    'kysion.employee.column.state.UnActivated': 'Unactivated',
    'kysion.employee.column.state.onTheJob': 'Staffed',

    // Announcement status (announcement/enum.ts)
    'kysion.common.enum.Unread': 'Unread',
    'kysion.common.enum.Read': 'Read',
    'kysion.common.enum.announcement.state.Draft': 'Draft',
    'kysion.common.enum.announcement.state.PendingRelease': 'Pending Release',
    'kysion.common.enum.announcement.state.Published': 'Published',
    'kysion.common.enum.announcement.state.Expired': 'Expired',
    'kysion.common.enum.announcement.state.Revoked': 'Revoked',

    // Audit category (audit/enum.ts)
    'kysion.common.enum.audit.Personal': 'Personal Qualification',
    'kysion.common.enum.audit.Enterprise': 'Enterprise Qualification',
    'kysion.common.enum.audit.BusinessScene': 'Business Scene',

    // Audit status (audit/enum.ts)
    'kysion.common.enum.Rejected': 'Rejected',
    'kysion.common.enum.Pending': 'Pending',
    'kysion.common.enum.Approved': 'Approved',

    // License status (license/enum.ts)
    'kysion.company.column.license.Invalid': 'Invalid',
    'kysion.company.column.license.Normal': 'Normal',
    'kysion.company.column.license.UnVerified': 'Unverified',
    'kysion.authType.Individual': 'Individual Authentication',
    'kysion.authType.Enterprise': 'Enterprise Authentication',

    // Invoice related (financial/enum.ts)
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

    // Account limit status
    'kysion.common.enum.NoLimit': 'No Limit',
    'kysion.common.enum.LimitExpenditure': 'Limit Expenditure',
    'kysion.common.enum.LimitIncome': 'Limit Income',

    // Income/Expense type
    'kysion.common.enum.Income': 'Income',
    'kysion.common.enum.Expense': 'Expense',

    // Trade type
    'kysion.common.enum.trade.Transfer': 'Transfer',
    'kysion.common.enum.trade.Consumption': 'Consumption',
    'kysion.common.enum.trade.Refund': 'Refund',
    'kysion.common.enum.trade.Commission': 'Commission',
    'kysion.common.enum.trade.Deposit': 'Deposit',
    'kysion.common.enum.trade.EarnestMoney': 'Earnest Money',
    'kysion.common.enum.trade.Fee': 'Fee',
    'kysion.common.enum.trade.Withdraw': 'Withdraw',
    'kysion.common.enum.trade.Recharge': 'Recharge',
    'kysion.common.enum.trade.Revenue': 'Revenue',
    'kysion.common.enum.trade.Other': 'Other',

    // Permission related (permission/enum.ts)
    'kysion.common.enum.permission.API': 'API',
    'kysion.common.enum.permission.Menu': 'Menu',
    'kysion.common.enum.ID': 'ID',
    'kysion.common.enum.Identifier': 'Identifier',

    // Menu related (menu/enum.ts)
    'kysion.common.enum.menu.Directory': 'Directory',
    'kysion.common.enum.menu.Menu': 'Menu',
    'kysion.common.enum.menu.Button': 'Function/Button',
    'kysion.common.enum.menu.CurrentPageOpen': 'Current Page Open',
    'kysion.common.enum.menu.NewTabOpen': 'New Tab Open'
} as const; 
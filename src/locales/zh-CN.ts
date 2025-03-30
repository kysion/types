export default {
    // 基础枚举 (base/enum.ts)
    'kysion.common.enum.base.Unknown': '未知',
    'kysion.common.enum.Male': '男',
    'kysion.common.enum.Female': '女',
    'kysion.common.enum.Enabled': '启用',
    'kysion.common.enum.Disabled': '禁用',
    'kysion.common.enum.Yes': '是',
    'kysion.common.enum.No': '否',

    // 通用操作 (common/action.ts)
    'kysion.common.refresh.tooltip': '刷新',
    'kysion.table.column.setting.title': '列设置',
    'kysion.table.pagination.showTotal': '共 {total} 条记录，当前显示 {begin}-{end} 条',

    // 查询条件 (base/query.ts)
    'kysion.query.Equal': '等于',
    'kysion.query.GreaterThan': '大于',
    'kysion.query.GreaterThanOrEqual': '大于等于',
    'kysion.query.LessThan': '小于',
    'kysion.query.LessThanOrEqual': '小于等于',
    'kysion.query.NotEqual': '不等于',
    'kysion.query.In': '在列',
    'kysion.query.Like': '模糊匹配',
    'kysion.query.Like.PrefixContain': '前缀匹配',
    'kysion.query.Like.Contain': '包含',
    'kysion.query.Like.SuffixContain': '后缀匹配',
    'kysion.query.Sort.None': '不排序',
    'kysion.query.Sort.Auto': '自动',
    'kysion.query.Sort.Asc': '升序',
    'kysion.query.Sort.Desc': '降序',

    // 用户状态 (user/enum.ts)
    'kysion.common.enum.state.Unactivated': '未激活',
    'kysion.common.enum.state.Normal': '正常',
    'kysion.common.enum.state.Banned': '封号',
    'kysion.common.enum.state.Abnormal': '异常',
    'kysion.common.enum.state.LoggedOut': '已注销',

    // 公司状态 (company/enum.ts)
    'kysion.common.state.disabled': '禁用',
    'kysion.common.state.normal': '正常',

    // 员工状态 (employee/enum.ts)
    'kysion.employee.column.state.leave': '离职',
    'kysion.employee.column.state.UnActivated': '未激活',
    'kysion.employee.column.state.onTheJob': '在职',

    // 公告状态 (announcement/enum.ts)
    'kysion.common.enum.Unread': '未读',
    'kysion.common.enum.Read': '已读',
    'kysion.common.enum.announcement.state.Draft': '草稿',
    'kysion.common.enum.announcement.state.PendingRelease': '待发布',
    'kysion.common.enum.announcement.state.Published': '已发布',
    'kysion.common.enum.announcement.state.Expired': '已过期',
    'kysion.common.enum.announcement.state.Revoked': '已撤销',

    // 审核类别 (audit/enum.ts)
    'kysion.common.enum.audit.Personal': '个人资质审核',
    'kysion.common.enum.audit.Enterprise': '主体资质审核',
    'kysion.common.enum.audit.BusinessScene': '数据审核',

    // 审核状态 (audit/enum.ts)
    'kysion.common.enum.Rejected': '不通过',
    'kysion.common.enum.Pending': '待审核',
    'kysion.common.enum.Approved': '通过',

    // 许可证状态 (license/enum.ts)
    'kysion.company.column.license.Invalid': '失效',
    'kysion.company.column.license.Normal': '正常',
    'kysion.company.column.license.UnVerified': '未验证',
    'kysion.authType.Individual': '个人认证',
    'kysion.authType.Enterprise': '企业认证',

    // 发票相关 (financial/enum.ts)
    'kysion.common.enum.invoice.PendingAudit': '待审核',
    'kysion.common.enum.invoice.Approved': '已通过',
    'kysion.common.enum.invoice.Rejected': '已拒绝',
    'kysion.common.enum.invoice.PendingBilling': '待开票',
    'kysion.common.enum.invoice.BillingFailed': '开票失败',
    'kysion.common.enum.invoice.Billed': '已开票',
    'kysion.common.enum.invoice.Revoked': '已撤销',
    'kysion.common.enum.invoice.Normal': '普通发票',
    'kysion.common.enum.invoice.SpecialVAT': '增值税专用发票',
    'kysion.common.enum.invoice.Professional': '专业发票',
    'kysion.common.enum.invoice.Electronic': '电子发票',
    'kysion.common.enum.invoice.Paper': '纸质发票',

    // 账户限制状态
    'kysion.common.enum.NoLimit': '无限制',
    'kysion.common.enum.LimitExpenditure': '限制支出',
    'kysion.common.enum.LimitIncome': '限制收入',

    // 收支类型
    'kysion.common.enum.Income': '收入',
    'kysion.common.enum.Expense': '支出',

    // 交易类型
    'kysion.common.enum.trade.Transfer': '转账',
    'kysion.common.enum.trade.Consumption': '消费',
    'kysion.common.enum.trade.Refund': '退款',
    'kysion.common.enum.trade.Commission': '佣金',
    'kysion.common.enum.trade.Deposit': '押金',
    'kysion.common.enum.trade.EarnestMoney': '定金',
    'kysion.common.enum.trade.Fee': '手续费',
    'kysion.common.enum.trade.Withdraw': '提现',
    'kysion.common.enum.trade.Recharge': '充值',
    'kysion.common.enum.trade.Revenue': '营收',
    'kysion.common.enum.trade.Other': '其他',

    // 权限相关 (permission/enum.ts)
    'kysion.common.enum.permission.API': 'API',
    'kysion.common.enum.permission.Menu': '菜单',
    'kysion.common.enum.ID': 'ID',
    'kysion.common.enum.Identifier': '标识符',

    // 菜单相关 (menu/enum.ts)
    'kysion.common.enum.menu.Directory': '目录',
    'kysion.common.enum.menu.Menu': '菜单',
    'kysion.common.enum.menu.Button': '功能/按钮',
    'kysion.common.enum.menu.CurrentPageOpen': '当前页面打开',
    'kysion.common.enum.menu.NewTabOpen': '新标签页打开',

    // 图标选择器
    'system.menu.icon.placeholder': '点击选择图标，例如: carbon:menu',
    'system.menu.icon.select': '选择图标',
    'system.menu.icon.search': '请输入图标关键词，搜索图标',
    'system.menu.icon.empty': '暂无图标，请输入关键词搜索',

    // 用户类型 (user/enum.ts)
    'kysion.common.enum.userType.Anonymous': '匿名',
    'kysion.common.enum.userType.User': '用户',
    'kysion.common.enum.userType.UserLeader': '团长',
    'kysion.common.enum.userType.Merchant': '商户',
    'kysion.common.enum.userType.Member': '会员',
    'kysion.common.enum.userType.Agent': '代理',
    'kysion.common.enum.userType.SubCompany': '分公司',
    'kysion.common.enum.userType.HeadCompany': '总公司',
} as const; 
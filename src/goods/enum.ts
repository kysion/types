import { ValueOf } from "../base";

// 商品上架状态颜色类型
type GoodsSaleStateColor = 'gray' | 'green' | 'red';

// 商品上架状态类型
export type GoodsSaleStateType = {
  state: GoodsSaleStateSet,
  i18nLabel: string,
  color: GoodsSaleStateColor
};

// 商品上架状态集合
export const goodsSaleStateSet = {
  Draft: 0,
  OnSale: 1,
  OffSale: 2
} as const;

export type GoodsSaleStateSet = ValueOf<typeof goodsSaleStateSet>;

// 商品上架状态数组
export const GoodsSaleStateTypeArr: readonly GoodsSaleStateType[] = [
  { state: goodsSaleStateSet.Draft, i18nLabel: 'kysion.common.enum.Draft', color: 'gray' },
  { state: goodsSaleStateSet.OnSale, i18nLabel: 'kysion.common.enum.OnSale', color: 'green' },
  { state: goodsSaleStateSet.OffSale, i18nLabel: 'kysion.common.enum.OffSale', color: 'red' }
];

// 商品上架状态映射
export const GoodsSaleStateMap = new Map<GoodsSaleStateSet, GoodsSaleStateType>(GoodsSaleStateTypeArr.map(item => [item.state, item]));


export const i18nGoodsSaleState = {
  zh_CN: {
    'kysion.common.enum.Draft': '草稿',
    'kysion.common.enum.OnSale': '上架',
    'kysion.common.enum.OffSale': '下架'
  },
  en_US: {
    'kysion.common.enum.Draft': 'Draft',
    'kysion.common.enum.OnSale': 'On Shelf',
    'kysion.common.enum.OffSale': 'Off Shelf'
  }
};
/**
 * ****************
 */

// 审核状态图标类型
type GoodsAuditStateIcon = 'fluent:drafts-24-regular' | 'mdi:clock-outline' | 'mdi:check-circle-outline' | 'mdi:close-circle-outline';

// 审核状态类型
export type GoodsAuditStateType = {
  state: GoodsAuditStateSet,
  i18nLabel: string,
  icon: GoodsAuditStateIcon,
  color: GoodsAuditStateColor
};

// 审核状态集合
export const goodsAuditStateSet = {
  Draft: 0,
  PendingAudit: 1,
  Approved: 2,
  Rejected: 4
} as const;

export type GoodsAuditStateSet = ValueOf<typeof goodsAuditStateSet>;

// 审核状态颜色类型
type GoodsAuditStateColor = 'gray' | 'orange' | 'green' | 'red';

// 审核状态数组
export const GoodsAuditStateTypeArr: readonly GoodsAuditStateType[] = [
  { state: goodsAuditStateSet.Draft, i18nLabel: 'business.common.enum.Draft', icon: 'fluent:drafts-24-regular', color: 'gray' },
  { state: goodsAuditStateSet.PendingAudit, i18nLabel: 'business.common.enum.PendingAudit', icon: 'mdi:clock-outline', color: 'orange' },
  { state: goodsAuditStateSet.Approved, i18nLabel: 'business.common.enum.Approved', icon: 'mdi:check-circle-outline', color: 'green' },
  { state: goodsAuditStateSet.Rejected, i18nLabel: 'business.common.enum.Rejected', icon: 'mdi:close-circle-outline', color: 'red' }
];

// 审核状态映射
export const GoodsAuditStateMap = new Map<GoodsAuditStateSet, GoodsAuditStateType>(GoodsAuditStateTypeArr.map(item => [item.state, item]));

export const i18nGoodsAuditState = {
  zh_CN: {
    'business.common.enum.Draft': '草稿',
    'business.common.enum.PendingAudit': '待审核',
    'business.common.enum.Approved': '通过',
    'business.common.enum.Rejected': '不通过'
  },
  en_US: {
    'business.common.enum.Draft': 'Draft',
    'business.common.enum.PendingAudit': 'Pending Audit',
    'business.common.enum.Approved': 'Approved',
  }
};

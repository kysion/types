import { ValueOf } from "../base";


// 阅读状态类型
export type ReadStateType = {
  value: ReadStateSet,
  i18nLabel: string,
  color: ReadStateColor
};

// 阅读状态集合
export const readStateSet = {
  Unread: 0,
  Read: 1
} as const;

export type ReadStateSet = ValueOf<typeof readStateSet>;

// 阅读状态颜色类型
type ReadStateColor = undefined | 'green';

// 阅读状态数组
export const ReadStateTypeArr: readonly ReadStateType[] = [
  { value: readStateSet.Unread, i18nLabel: 'kysion.common.enum.Unread', color: undefined },
  { value: readStateSet.Read, i18nLabel: 'kysion.common.enum.Read', color: 'green' }
];

// 阅读状态映射
export const ReadStateMap = new Map<ReadStateSet, ReadStateType>(ReadStateTypeArr.map(item => [item.value, item]));

export const i18nReadState = {
  zh_CN: {
    'kysion.common.enum.Unread': '未读',
    'kysion.common.enum.Read': '已读'
  },
  en_US: {
    'kysion.common.enum.Unread': 'Unread',
    'kysion.common.enum.Read': 'Read'
  }
};
/**
 * **************************************************
 */
// 公告状态类型
export type AnnouncementStateType = {
  value: AnnouncementStateSet,
  i18nLabel: string,
  color: AnnouncementStateColor
};

// 公告状态集合
export const announcementStateSet = {
  Draft: 1,
  PendingRelease: 2,
  Published: 4,
  Expired: 8,
  Revoked: 16
} as const;

export type AnnouncementStateSet = ValueOf<typeof announcementStateSet>;

// 公告状态颜色类型
type AnnouncementStateColor = 'gray' | 'orange' | 'green' | 'red' | 'purple';

// 公告状态数组
export const AnnouncementStateTypeArr: readonly AnnouncementStateType[] = [
  { value: announcementStateSet.Draft, i18nLabel: 'kysion.common.enum.announcement.state.Draft', color: 'gray' },
  { value: announcementStateSet.PendingRelease, i18nLabel: 'kysion.common.enum.announcement.state.PendingRelease', color: 'orange' },
  { value: announcementStateSet.Published, i18nLabel: 'kysion.common.enum.announcement.state.Published', color: 'green' },
  { value: announcementStateSet.Expired, i18nLabel: 'kysion.common.enum.announcement.state.Expired', color: 'red' },
  { value: announcementStateSet.Revoked, i18nLabel: 'kysion.common.enum.announcement.state.Revoked', color: 'purple' }
];

// 公告状态映射
export const AnnouncementStateMap = new Map<AnnouncementStateSet, AnnouncementStateType>(AnnouncementStateTypeArr.map(item => [item.value, item]));

export const i18nAnnouncement = {
  zh_CN: {
    'kysion.common.enum.announcement.state.Draft': '草稿',
    'kysion.common.enum.announcement.state.PendingRelease': '待发布',
    'kysion.common.enum.announcement.state.Published': '已发布',
    'kysion.common.enum.announcement.state.Expired': '已过期',
    'kysion.common.enum.announcement.state.Revoked': '已撤销'
  },
  en_US: {
    'kysion.common.enum.announcement.state.Draft': 'Draft',
    'kysion.common.enum.announcement.state.PendingRelease': 'Pending Release',
    'kysion.common.enum.announcement.state.Published': 'Published',
    'kysion.common.enum.announcement.state.Expired': 'Expired',
    'kysion.common.enum.announcement.state.Revoked': 'Revoked'
  }
};

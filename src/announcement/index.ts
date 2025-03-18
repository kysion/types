import { cloneDeep } from "lodash";
import { BaseModel } from "../base";
import type { Dayjs } from 'dayjs';
import { announcementStateSet, AnnouncementStateSet, readStateSet, ReadStateSet } from "./enum";

export * from "./enum";

export interface AnnouncementType extends BaseModel<AnnouncementType> {
  // ID
  id: string | number;
  // 公告标题
  title: string;
  // 发布主体，0 值则代表平台发布的公告
  unionMainId: string | number;
  // 公示时间，只有到了公示时间用户才可见
  publicAt: Dayjs | string;
  // 公告正文
  body: string;
  // 受众用户类型：0 则所有，复合类型
  userTypeScope: number;
  // 过期时间，过期后前端用户不可见
  expireAt: Dayjs | string;
  // 状态：1 草稿、2 待发布、4 已发布、8 已过期、16 已撤销
  state: AnnouncementStateSet;
  // 创建时间
  createdAt: Dayjs | string | null;
  // 更新时间
  updatedAt: Dayjs | string | null;
  // 创建用户
  createdBy?: string | number;
  // 最后修改用户
  updatedBy?: string | number;
  // 删除时间
  deletedAt: Dayjs | string | null;
  // 删除者 ID
  deletedBy?: string | number;
  // 扩展 json 数据
  extDataJson: string;
  // 阅读状态：1未读，2已读
  readState: ReadStateSet;
}

export class AnnouncementModel extends BaseModel<AnnouncementModel> implements AnnouncementType {
  id: string | number = 0;
  title: string = "";
  unionMainId: string | number = 0;
  publicAt: Dayjs | string = "";
  body: string = "";
  userTypeScope: number = 0;
  expireAt: Dayjs | string = "";
  state: AnnouncementStateSet = announcementStateSet.Draft;
  createdAt: Dayjs | string | null = null;
  updatedAt: Dayjs | string | null = null;
  createdBy?: string | number = 0;
  updatedBy?: string | number = 0;
  deletedAt: Dayjs | string | null = null;
  deletedBy?: string | number = 0;
  extDataJson: string = "";
  readState: ReadStateSet = readStateSet.Unread;

  constructor(initState: Partial<AnnouncementType> = {}) {
    super();
    Object.assign(this, cloneDeep(initState));
  }
}

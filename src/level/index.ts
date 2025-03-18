import { BaseModel } from "../base";
import type { Dayjs } from 'dayjs';
import type React from 'react';

export class MemberLevelType extends BaseModel<MemberLevelType> {
  // ID，可选
  id: React.Key = 0;
  // 名称，可选
  name: string = "";
  // 描述，可选
  desc: string = "";
  // 级别标识符，可选
  identifier: string = "";
  // 创建时间，可选
  createdAt: Dayjs | string | null = "";
  // 更新时间，可选
  updatedAt: Dayjs | string | null = "";
  // 创建者 ID，可选
  createdBy: React.Key = 0;
  // 关联主体 ID，可选
  unionMainId: React.Key = 0;
}

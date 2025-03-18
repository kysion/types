import { cloneDeep } from "lodash";
import { BaseModel } from "../base";

export class RoleType extends BaseModel<RoleType> {
  // 角色ID
  id: React.Key = 0;
  // 名称
  name: string = '';
  // 描述
  description: string = '';
  // 是否默认角色，true仅能修改名称，不允许删除和修改
  isSystem: boolean = false;
  // 更新时间
  updatedAt: string | null = null;
  // 创建时间
  createdAt: string | null = null;
  // 主体ID
  unionMainId: React.Key = 0;

  constructor(initState: Partial<RoleType> = {}) {
    super();
    Object.assign(this, cloneDeep(initState));
  }
}

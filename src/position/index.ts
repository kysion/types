import { cloneDeep } from 'lodash';
import { BaseModel } from '../base';

// 职位
export class PositionType extends BaseModel<PositionType> {
  // 职位ID
  id: React.Key = 0;
  // 名称
  name: string = '';
  // 备注
  remark: string = '';
  // 职位所属的主体ID
  unionMainId: React.Key = 0;
  // 职位关联的角色IDs
  roleIds: string = '';

  constructor(initState: Partial<PositionType> = {}) {
    super();
    Object.assign(this, cloneDeep(initState));
  }
}

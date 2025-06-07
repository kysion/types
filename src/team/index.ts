import { cloneDeep } from 'lodash';
import { BaseModel, CompanyInfoType, EmployeeInfoType } from '..';


export class TeamInfoType extends BaseModel<TeamInfoType> {
  // ID
  id: number = 0;
  // 名称
  name: string = '';
  // 负责人
  ownerEmployeeId: number = 0;
  // 队长
  captainEmployeeId: number = 0;
  // 父级ID
  parentId: number = 0;
  // 备注
  remark: string = '';
  // 类型：默认 0，保留字段
  type: number = 0;
  // LogoId
  logoId: string = '';
  // 口号
  slogan: string = '';
  // 称号
  title: string = '';
  // 负责人
  owner?: EmployeeInfoType;
  // 队长
  captain?: EmployeeInfoType;
  // 所属主体
  unionMain?: CompanyInfoType;
  // 父级
  parent?: TeamInfoType;

  constructor(initState: Partial<TeamInfoType> = {}) {
    super();
    Object.assign(this, cloneDeep(initState));
  }
}

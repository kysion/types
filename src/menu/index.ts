import cloneDeep from 'lodash/cloneDeep';
import { BaseModel, enabledStateSet, EnabledStateSet, yesNoStateSet, YesNoStateSet } from '../base';
import { jumpTypeSet, JumpTypeSet, MenuTypeSet, menuTypeSet } from './enum';

export * from './enum';

export class MenuItemType extends BaseModel<MenuItemType> {
  // ID，默认值为0，类型为React.Key
  id: React.Key = 0;
  // 路径，默认值为""
  path: string = "";
  // 名称，默认值为""
  name: string = "";
  // 跳转，默认值为""
  redirect: string = "";
  // 标题，默认值为""
  title: string = "";
  // 简称，默认值为""
  sortTitle: string = "";
  // 国际化Key，默认值为""
  i18NKey: string = "";
  // 图标，默认值为""
  icon: string | undefined = undefined;
  // 布局，默认值为""
  layout: string = "";
  // 组件，默认值为""
  component: string = "";
  // 所属父级，默认值为0，类型为React.Key
  parentId: React.Key | undefined = undefined;
  // 排序，默认值为0
  sort: number | undefined = undefined;
  // 状态：0隐藏，1显示，默认值为0
  state: EnabledStateSet = enabledStateSet.Enabled;
  // 是否隐藏，默认值为false
  hidden: YesNoStateSet = yesNoStateSet.No;
  // 描述，默认值为""
  description: string = "";
  // 创建时间，默认值为""
  createdAt: string = "";
  // 更新时间，默认值为""
  updatedAt: string = "";
  // 图标URL，默认值为""
  iconUrl: string = "";
  // 跳转类型：1当前页面打开、2新的标签页打开，默认值为1
  redirectType: JumpTypeSet = jumpTypeSet.CurrentPageOpen;
  // 类型：0目录、1菜单、2按钮，默认值为0
  type: MenuTypeSet = menuTypeSet.Directory;
  // 菜单依赖权限IDS，默认值为[]，跟随菜单权限会一并赋予或取消
  depPermissionIds: number[] | number = [];
  // 限定不可见的角色
  limitHiddenRoleIds: number[] | number = [];
  // 限定不可见的用户
  limitHiddenUserIds: number[] | number = [];
  // 限定不可见的用户类型
  limitHiddenUserTypes: number[] | number = [];
  // 子菜单，默认值为[]
  children: MenuItemType[] | undefined = undefined;

  constructor(initState: Partial<MenuItemType> = {}) {
    super();
    Object.assign(this, cloneDeep(initState));
  }

  public static replaceNodeById(nodeList: MenuItemType[] | undefined, newNode: MenuItemType): MenuItemType[] {
    if (!nodeList) {
      return [];
    }

    return nodeList.map((node) => {
      if (node.id === newNode.id) {
        // 如果找到匹配的id，直接替换节点
        return newNode;
      }

      if (node.children) {
        // 递归遍历子菜单查找并替换节点
        node.children = MenuItemType.replaceNodeById(node.children, newNode) as MenuItemType[];
      }

      return node;
    });
  }
}

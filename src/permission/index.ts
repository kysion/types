import { cloneDeep } from "lodash";
import { BaseModel, yesNoStateSet, YesNoStateSet } from "../base";
import { permissionMatchModeSet, PermissionMatchModeSet, permissionTypeSet, PermissionTypeSet } from "./enum";

export * from './enum';

export class PermissionType extends BaseModel<PermissionType> {
  // ID
  id: number | string = 0;
  // 父级ID
  parentId: number | string = 0;
  // 名称
  name: string = '';
  // TreeSelect 组件显示的标签，本地专用属性
  tagLabel: string = '';
  // 描述
  description: string = '';
  // 标识符
  identifier: string = '';
  // 类型：1-api，2-menu
  type: PermissionTypeSet = permissionTypeSet.Menu;
  // 匹配模式：0-ID，1-标识符
  matchMode: PermissionMatchModeSet = permissionMatchModeSet.ID;
  // 是否显示：0-不显示，1-显示
  isShow: YesNoStateSet = yesNoStateSet.Yes;
  // 排序
  sort: number = 0;
  // 创建时间
  createdAt: string | null = null;
  // 更新时间
  updatedAt: string | null = null;
  // 子节点
  children: PermissionType[] = [];

  constructor(initState: Partial<PermissionType> = {}) {
    super();
    Object.assign(this, cloneDeep(initState));
  }

  public static toTree(permissionTypeList: PermissionType[]): PermissionType[] {
    // 创建一个字典，用于根据 ID 快速查找权限类型对象
    const map: { [key: number | string]: PermissionType } = {};
    // 创建一个数组来存储根节点
    const rootNodes: PermissionType[] = [];

    // 遍历传入的权限类型列表
    permissionTypeList.forEach((permissionType) => {
      // 将当前权限类型对象添加到字典中，以其 ID 作为键
      map[permissionType.id] = permissionType;

      // 如果当前权限类型的父 ID 为 0，则将其视为根节点并添加到根节点数组中
      if (permissionType.parentId === 0) {
        rootNodes.push(permissionType);
      } else {
        // 如果在字典中能找到当前权限类型的父节点
        if (map[permissionType.parentId]) {
          // 如果父节点的 children 属性尚未初始化，则初始化一个空数组
          if (!map[permissionType.parentId].children) {
            map[permissionType.parentId].children = [];
          }
          // 将当前权限类型添加到父节点的 children 数组中
          map[permissionType.parentId].children.push(permissionType);
        }
      }
    });

    // 返回构建好的根节点数组
    return rootNodes;
  }

  // 查找父节点的函数
  private static findParent(tree: PermissionType[], parentId: number | string): PermissionType | null {
    for (const node of tree) {
      if (node.id === parentId) {
        return node;
      }
      if (node.children) {
        const found = PermissionType.findParent(node.children, parentId);
        if (found) {
          return found;
        }
      }
    }
    return null;
  }

  public static mergeByList(tree: PermissionType[], list: PermissionType[]): PermissionType[] {
    // 先复制树集合，避免直接修改原始数据
    const newTree = JSON.parse(JSON.stringify(tree)) as PermissionType[];

    // 用于标记节点是否存在于列表中
    const existsMap: Record<string, boolean> = {};

    // 标记列表中的节点
    list.forEach(item => {
      existsMap[item.id.toString()] = true;
    });

    // 递归函数用于处理树节点
    const processNode = (node: PermissionType) => {
      if (!node.children)
        node.children = [];

      // 检查子节点
      const children = node.children.filter(child => existsMap[child.id]);
      node.children = children;

      // 对每个子节点递归处理
      children.forEach(child => processNode(child));

      // 如果当前节点没有子节点且自身不在列表中，则移除
      if (node.children.length === 0 && !existsMap[node.id]) {
        return null;
      }

      node.tagLabel = node.name;
      const parent = PermissionType.findParent(tree, node.parentId);
      if (parent) {
        node.tagLabel = `${parent.name}:${node.name}`;
      }

      return node;
    };

    // 处理根节点
    const newRootNodes = newTree.filter(node => processNode(node));

    return newRootNodes;
  }
}

import { ValueOf } from "../base";


// 权限类型类型
export type PermissionTypeType = {
    state: PermissionTypeSet,
    i18nLabel: string,
    color: PermissionTypeColor
};

// 权限类型集合
export const permissionTypeSet = {
    API: 1,
    Menu: 2
} as const;

export type PermissionTypeSet = ValueOf<typeof permissionTypeSet>;

// 权限类型颜色类型
type PermissionTypeColor = 'orange' | 'blue';

// 权限类型数组
export const PermissionTypeTypeArr: readonly PermissionTypeType[] = [
    { state: permissionTypeSet.API, i18nLabel: 'kysion.common.enum.API', color: 'orange' },
    { state: permissionTypeSet.Menu, i18nLabel: 'kysion.common.enum.Menu', color: 'blue' }
];

// 权限类型映射
export const PermissionTypeMap = new Map<PermissionTypeSet, PermissionTypeType>(PermissionTypeTypeArr.map(item => [item.state, item]));

export const i18nPermissionTypeType = {
    zh_CN: {
        'kysion.common.enum.API': 'API',
        'kysion.common.enum.Menu': '菜单'
    },
    en_US: {
        'kysion.common.enum.API': 'API',
        'kysion.common.enum.Menu': 'Menu'
    }
};
/**
 * ****
 */

// 权限匹配模式类型
export type PermissionMatchModeType = {
    state: PermissionMatchModeSet,
    i18nLabel: string,
    color: PermissionMatchModeColor
};

// 权限匹配模式集合
export const permissionMatchModeSet = {
    ID: 0,
    Identifier: 1
} as const;

export type PermissionMatchModeSet = ValueOf<typeof permissionMatchModeSet>;

// 权限匹配模式颜色类型
type PermissionMatchModeColor = 'gray' | 'green';

// 权限匹配模式数组
export const PermissionMatchModeTypeArr: readonly PermissionMatchModeType[] = [
    { state: permissionMatchModeSet.ID, i18nLabel: 'kysion.common.enum.ID', color: 'gray' },
    { state: permissionMatchModeSet.Identifier, i18nLabel: 'kysion.common.enum.Identifier', color: 'green' }
];

// 权限匹配模式映射
export const PermissionMatchModeMap = new Map<PermissionMatchModeSet, PermissionMatchModeType>(PermissionMatchModeTypeArr.map(item => [item.state, item]));

export const i18nPermissionMatchModeType = {
    zh_CN: {
        'kysion.common.enum.ID': 'ID',
        'kysion.common.enum.Identifier': '标识符'
    },
    en_US: {
        'kysion.common.enum.ID': 'ID',
        'kysion.common.enum.Identifier': 'Identifier'
    }
};
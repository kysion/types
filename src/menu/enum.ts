import { ValueOf } from "../base";

// 类型类型
export type MenuType = {
    value: MenuTypeSet,
    i18nLabel: string
};

// 类型集合
export const menuTypeSet = {
    Directory: 0,
    Menu: 1,
    Button: 2
} as const;

export type MenuTypeSet = ValueOf<typeof menuTypeSet>;

// 类型数组
export const TypeTypeArr: readonly MenuType[] = [
    { value: menuTypeSet.Directory, i18nLabel: 'kysion.common.enum.Directory' },
    { value: menuTypeSet.Menu, i18nLabel: 'kysion.common.enum.Menu' },
    { value: menuTypeSet.Button, i18nLabel: 'kysion.common.enum.Button' }
];

// 类型映射
export const MenuTypeMap = new Map<MenuTypeSet, MenuType>(TypeTypeArr.map(item => [item.value, item]));

export const i18nMenuType = {
    zh_CN: {
        'kysion.common.enum.Directory': '目录',
        'kysion.common.enum.Menu': '菜单',
        'kysion.common.enum.Button': '功能/按钮'
    },
    en_US: {
        'kysion.common.enum.Directory': 'Directory',
        'kysion.common.enum.Menu': 'Menu',
        'kysion.common.enum.Button': 'Function/Button'
    }
};

/**
 * *******************************
 */

// 跳转类型类型
export type JumpTypeType = {
    state: JumpTypeSet,
    i18nLabel: string,
};

// 跳转类型集合
export const jumpTypeSet = {
    CurrentPageOpen: 1,
    NewTabOpen: 2
} as const;

export type JumpTypeSet = ValueOf<typeof jumpTypeSet>;


// 跳转类型数组
export const JumpTypeTypeArr: readonly JumpTypeType[] = [
    { state: jumpTypeSet.CurrentPageOpen, i18nLabel: 'kysion.common.enum.CurrentPageOpen' },
    { state: jumpTypeSet.NewTabOpen, i18nLabel: 'kysion.common.enum.NewTabOpen' }
];

// 跳转类型映射
export const JumpTypeMap = new Map<JumpTypeSet, JumpTypeType>(JumpTypeTypeArr.map(item => [item.state, item]));

export const i18nJumpType = {
    zh_CN: {
        'kysion.common.enum.CurrentPageOpen': '当前页面打开',
        'kysion.common.enum.NewTabOpen': '新标签页打开'
    },
    en_US: {
        'kysion.common.enum.CurrentPageOpen': 'Current Page Open',
        'kysion.common.enum.NewTabOpen': 'New Tab Open'
    }
};
import { ValueOf } from "../base";

export type CategoryStateType = {
    value: CategoryStateSet,
    i18nLabel: string,
    color: CategoryStateColor
}

export const categoryStateSet = {
    Hidden: 0,
    Visible: 1,
} as const;

export type CategoryStateSet = ValueOf<typeof categoryStateSet>;

type CategoryStateColor = 'gray' | 'green';

export const CategoryStateArr: readonly CategoryStateType[] = [
    { value: categoryStateSet.Hidden, i18nLabel: 'kysion.common.enum.state.hidden', color: 'gray' },
    { value: categoryStateSet.Visible, i18nLabel: 'kysion.common.enum.state.visible', color: 'green' },
];

export const CategoryStateMap = new Map<CategoryStateSet, CategoryStateType>(CategoryStateArr.map(item => [item.value, item]));

export const i18nCategoryState = {
    zh_CN: {
        'kysion.common.enum.state.hidden': '隐藏',
        'kysion.common.enum.state.visible': '显示'
    },
    en_US: {
        'kysion.common.enum.state.hidden': 'Hidden',
        'kysion.common.enum.state.visible': 'Visible'
    }
} 
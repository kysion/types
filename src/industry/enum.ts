import { ValueOf } from "../base";

export type IndustryStateType = {
    value: IndustryStateSet,
    i18nLabel: string,
    color: IndustryStateColor
}

export const industryStateSet = {
    Hidden: 0,
    Visible: 1,
} as const;

export type IndustryStateSet = ValueOf<typeof industryStateSet>;

type IndustryStateColor = 'gray' | 'green';

export const IndustryStateArr: readonly IndustryStateType[] = [
    { value: industryStateSet.Hidden, i18nLabel: 'kysion.common.enum.state.hidden', color: 'gray' },
    { value: industryStateSet.Visible, i18nLabel: 'kysion.common.enum.state.visible', color: 'green' },
];

export const IndustryStateMap = new Map<IndustryStateSet, IndustryStateType>(IndustryStateArr.map(item => [item.value, item]));

export const i18nIndustryState = {
    zh_CN: {
        'kysion.common.enum.state.hidden': '隐藏',
        'kysion.common.enum.state.visible': '显示'
    },
    en_US: {
        'kysion.common.enum.state.hidden': 'Hidden',
        'kysion.common.enum.state.visible': 'Visible'
    }
}

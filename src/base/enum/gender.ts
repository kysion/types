import { ValueOf } from "../common";

// 性别枚举包装
export type SexType = {
    value: SexSet,
    i18nLabel: string,
    icon: SexIcon,
    color: SexColor
};

export const sexSet = {
    Unknown: 0,
    Male: 1,
    Female: 2
} as const;

export type SexSet = ValueOf<typeof sexSet>;

type SexIcon = 'mdi:gender-male' | 'mdi:gender-female' | 'mdi:gender-male-female';
type SexColor = 'blue' | 'red' | 'green';

export const SexTypeArr: readonly SexType[] = [
    { value: sexSet.Unknown, i18nLabel: 'kysion.common.enum.genderUnknown', icon: 'mdi:gender-male-female', color: 'green' },
    { value: sexSet.Male, i18nLabel: 'kysion.common.enum.Male', icon: 'mdi:gender-male', color: 'blue' },
    { value: sexSet.Female, i18nLabel: 'kysion.common.enum.Female', icon: 'mdi:gender-female', color: 'red' }
];

export const SexMap = new Map<SexSet, SexType>(SexTypeArr.map(item => [item.value, item]));

export const SexTypei18n = {
    zh_CN: {
        'kysion.common.enum.genderUnknown': '未设置',
        'kysion.common.enum.Male': '男',
        'kysion.common.enum.Female': '女',
    },
    en_US: {
        'kysion.common.enum.genderUnknown': 'Unknown',
        'kysion.common.enum.Male': 'Male',
        'kysion.common.enum.Female': 'Female',
    }
}

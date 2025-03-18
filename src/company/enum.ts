import { ValueOf } from "..";

export const companyStateSet = {
  Disabled: 0,
  Normal: 1,
} as const;

export type CompanyStateSet = ValueOf<typeof companyStateSet>;

export const CompanyStateSetArr: { value: CompanyStateSet, i18nLabel: string }[] = [
  { value: companyStateSet.Disabled, i18nLabel: 'kysion.common.state.disabled' },
  { value: companyStateSet.Normal, i18nLabel: 'kysion.common.state.normal' }
];

export const CompanyStateSetMap = new Map<CompanyStateSet, string>(CompanyStateSetArr.map(item => [item.value, item.i18nLabel]));

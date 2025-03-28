import { ValueOf } from "..";

type CompanyStateType = {
  value: CompanyStateSet,
  i18nLabel: string,
  color: string
}

export const companyStateSet = {
  Disabled: 0,
  Normal: 1,
} as const;

export type CompanyStateSet = ValueOf<typeof companyStateSet>;

export const CompanyStateSetArr: CompanyStateType[] = [
  { value: companyStateSet.Disabled, i18nLabel: 'kysion.common.state.disabled', color: 'default' },
  { value: companyStateSet.Normal, i18nLabel: 'kysion.common.state.normal', color: 'success' }
];

export const CompanyStateSetMap = new Map<CompanyStateSet, CompanyStateType>(CompanyStateSetArr.map(item => [item.value, item]));

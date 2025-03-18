import { ValueOf } from "../base";

// 状态：0失效、1正常
export const authStateSet = {
  Invalid: 0,
  Normal: 1
} as const;

export type AuthStateSet = ValueOf<typeof authStateSet>;

export const AuthStateArr: readonly [AuthStateSet, string][] = [
  [authStateSet.Invalid, 'kysion.authState.Invalid'],
  [authStateSet.Normal, 'kysion.authState.Normal']
];

export const AuthStateMap = new Map<AuthStateSet, string>(AuthStateArr.map(item => [item[0], item[1]]));

// 认证类型
export const authTypeSet = {
  Individual: 1,
  Enterprise: 2
} as const;

export type AuthTypeSet = ValueOf<typeof authTypeSet>;

export const AuthTypeArr: readonly [AuthTypeSet, string][] = [
  [authTypeSet.Individual, 'kysion.authType.Individual'],
  [authTypeSet.Enterprise, 'kysion.authType.Enterprise']
];

export const AuthTypeMap = new Map<AuthTypeSet, string>(AuthTypeArr.map(item => [item[0], item[1]]));

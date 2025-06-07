import { Dayjs } from 'dayjs';
import { BaseModel, ValueOf } from '../base';

// 邀请码类型类型
export type InvitationCodeType = {
    state: InviteCodeSet,
    i18nLabel: string,
    color: InvitationCodeColor
};

// 邀请码类型集合
export const inviteCodeSet = {
    Registration: 1,
    JoinTeam: 2,
    JoinRole: 4
} as const;

export type InviteCodeSet = ValueOf<typeof inviteCodeSet>;

// 邀请码类型颜色类型
type InvitationCodeColor = 'blue' | 'green' | 'orange';

// 邀请码类型数组
export const InviteCodeTypeArr: readonly InvitationCodeType[] = [
    { state: inviteCodeSet.Registration, i18nLabel: 'kysion.common.enum.invite.Registration', color: 'blue' },
    { state: inviteCodeSet.JoinTeam, i18nLabel: 'kysion.common.enum.invite.JoinTeam', color: 'green' },
    { state: inviteCodeSet.JoinRole, i18nLabel: 'kysion.common.enum.invite.JoinRole', color: 'orange' }
];

// 邀请码类型映射
export const InviteCodeMap = new Map<InviteCodeSet, InvitationCodeType>(InviteCodeTypeArr.map(item => [item.state, item]));

export const i18nInvite = {
    zh_CN: {
        'kysion.common.enum.invite.Registration': '注册',
        'kysion.common.enum.invite.JoinTeam': '加入团队',
        'kysion.common.enum.invite.JoinRole': '加入角色'
    },
    en_US: {
        'kysion.common.enum.invite.Registration': 'Registration',
        'kysion.common.enum.invite.JoinTeam': 'Join Team',
        'kysion.common.enum.invite.JoinRole': 'Join Role'
    }
};


export class InviteCodeType extends BaseModel<InviteCodeType> {
    // ID
    id: number = 0;
    // 邀约 code，本质是邀约 ID 转化而来的
    code: string = "";
    // 用户 ID，也就是邀约人 ID
    userId: number = 0;
    // 邀约码背后的关联业务 Json 数据
    value: string = "";
    // 邀约码的过期失效时间
    expireAt: Dayjs | string | null = "";
    // 邀约码的激活次数限制
    activateNumber: number = 0;
    // 状态：0 失效、1 正常
    state: number = 0;
    // 类型：1 注册、2 加入团队、4 加入角色 (复合类型)
    type: InviteCodeSet = inviteCodeSet.Registration;
    // 标识符
    identifier: string = "";
    // 邀请码
    inviteCode: string = "";
    // 创建时间
    createdAt: Dayjs | string | null = "";
}

import type { Dayjs } from 'dayjs';
import cloneDeep from 'lodash/cloneDeep';
import { BaseModel, enabledStateSet, EnabledStateSet, yesNoStateSet, YesNoStateSet } from '../base';

export class PromotionSettingType extends BaseModel<PromotionSettingType> {
    // ID，默认值为0
    id: number = 0;
    // 保底佣金，默认值为0
    commissionMin: number = 0;
    // 最大佣金，默认值为0
    commissionMax: number = 0;
    // 佣金率，默认值为0
    commissionRate: number = 0;
    // 截止有效期，默认值为null
    expriedAt: Dayjs | string | null = null;
    // 限定主体，默认值为0
    limitUnionMainId: number = 0;
    // 限定客户端，默认值为""
    limitClientIdentifier: string = "";
    // 限定会员等级，默认值为0
    limitMemberLevelId: number = 0;
    // 限定新用户，默认值为0
    limitNewUser: number = 0;
    // 限定投放总量，默认值为-1（不限量）
    limitQuantity: number = -1;
    // 限定日投放量，默认值为-1（不限量）
    limitDayQuantity: number = -1;
    // 限定用户总投放量，默认值为-1（不限量）
    limitUserQuantity: number = -1;
    // 限定用户日投放量，默认值为-1（不限量）
    limitDayUserQuantity: number = -1;
    // 关联商品ID，默认值为0
    goodsId: number = 0;
    // 是否允许子公司或下级代理放量，默认值为0
    allowSubLevel: EnabledStateSet = enabledStateSet.Enabled;
    // 状态：1上架，0下架，默认值为1
    state: YesNoStateSet = yesNoStateSet.Yes;
    // 标题，默认值为""
    title: string = "";
    // 标签，默认值为[]
    tags: string[] = [];
    // 备注，默认值为""
    remark: string = "";
    // 创建时间，默认值为null
    createdAt: Dayjs | string | null = null;
    // 创建者ID，默认值为0
    createdBy: number = 0;
    // 更新时间，默认值为null
    updatedAt: Dayjs | string | null = null;
    // 更新者ID，默认值为0
    updatedBy: number = 0;
    // 删除时间，默认值为null
    deletedAt: Dayjs | string | null = null;
    // 删除者ID，默认值为0
    deletedBy: number = 0;

    constructor(initState: Partial<PromotionSettingType> = {}) {
        super();
        Object.assign(this, cloneDeep(initState));
    }
}

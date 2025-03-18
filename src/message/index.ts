import cloneDeep from 'lodash/cloneDeep';
import { BaseModel } from '../base';

export class MessageType extends BaseModel<MessageType> {
    // ID，默认值为 0，类型为React.Key
    id: React.Key = 0;
    // 标题，默认值为 ""
    title: string = "";
    // 摘要，默认值为 ""
    summary: string = "";
    // 内容，默认值为 ""
    content: string = "";
    // 消息类型: 1系统消息，支持自定义，默认值为 0
    type: number = 0;
    // 跳转链接，默认值为 ""
    link: string = "";
    // 接收者UserIds，允许有多个接收者，默认值为 ""
    toUserIds: string = "";
    // 接收者类型用户类型，和UserType保持一致，默认值为 0
    toUserType: number = 0;
    // 发送者ID，为-1代表系统消息，默认值为 0，类型为React.Key
    fromUserId: React.Key = 0;
    // 发送者类型，默认值为 0
    fromUserType: number = 0;
    // 发送时间，默认值为 ""
    sendAt: string = "";
    // 拓展数据Json，默认值为 ""
    extJson: string = "";
    // 已读用户UserIds，默认值为 ""
    readUserIds: string = "";
    // 关联的数据标识，默认值为 ""
    dataIdentifier: string = "";
    // 创建时间，默认值为 ""
    createdAt: string = "";
    // 更新时间，默认值为 ""
    updatedAt: string = "";
    // 删除时间，默认值为 ""
    deletedAt: string = "";
    // 场景描述，默认值为 ""
    sceneDesc: string = "";
    // 场景类型【业务层自定义】例如：1活动即将开始提醒、2活动开始提醒、3活动即将结束提醒、4活动结束提醒、5活动获奖提醒、6券即将生效提醒、7券的生效提醒、8券的失效提醒、9券即将失效提醒、10券核销提醒、8192系统通知，默认值为 0
    sceneType: number = 0;

    constructor(initState: Partial<MessageType> = {}) {
        super();
        Object.assign(this, cloneDeep(initState));
    }
}
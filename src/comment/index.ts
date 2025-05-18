import cloneDeep from 'lodash/cloneDeep';
import { BaseModel } from '../base';
import { UserInfoType } from '../user';

export class CommentType extends BaseModel<CommentType> {
    // ID，默认值为0，类型为number
    id: number = 0;
    // 用户ID，默认值为0，类型为number
    userId: number = 0;
    // 关联主体ID，默认值为0，类型为number
    unionMainId: number = 0;
    // 关联主体类型，默认值为0
    unionMainType: number = 0;
    // 图文评论，默认值为""
    body: string = "";
    // 媒体资源：图文、视频等，默认值为""
    mediaIdsArr: string[] = [];
    // 评论回复信息ID，即关联父级评论ID，默认值为0，类型为number
    replyId: number = 0;
    // 评分0-5，间隔0.1，默认值为0
    score: number = 0;
    // 评论发表时间，默认值为""
    createdAt: string = "";
    // 用户信息
    user: UserInfoType | undefined;

    constructor(initState: Partial<CommentType> = {}) {
        super();
        Object.assign(this, cloneDeep(initState));
    }
}

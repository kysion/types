import { Dayjs } from "dayjs";
import { BaseModel } from "../base";
import { cloneDeep } from "lodash";

export class ChannelInfoType extends BaseModel<ChannelInfoType> {
    // ID，可选
    id: React.Key = 0;
    // 名称，可选
    name: string = "";
    // 描述，可选
    desc: string = "";
    // 平台标识符，可选
    identifier: string = "";
    // 所属主体，可选
    unionMainId: React.Key = 0;
    // 平台网站URL，可选
    siteUrl: string = "";
    // 创建时间，可选
    createdAt: Dayjs | string | null = "";
    // 更新时间，可选
    updatedAt: Dayjs | string | null = "";
    // 创建者ID，可选
    createdBy: number = 0;

    constructor(initState: Partial<ChannelInfoType> = {}) {
        super();
        Object.assign(this, cloneDeep(initState));
    }
}

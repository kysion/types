import { cloneDeep } from "lodash";
import { BaseModel } from "../base";
import { industryStateSet, IndustryStateSet } from "./enum";

export * from './enum';

// 行业信息类型
export class IndustryInfoType extends BaseModel<IndustryInfoType> {
    // ID，ID值为0时则新增菜单
    id: number = 0;
    // 行业ID
    categoryId: number = 0;
    // 行业名称
    categoryName: string = "";
    // 行业描述
    categoryDesc: string = "";
    // 费率
    rate: number = 0;
    // 所属父级
    parentId: number = 0;
    // 排序
    sort: number = 0;
    // 状态：0隐藏，1显示
    state: IndustryStateSet = industryStateSet.Visible;

    // 子级
    children: IndustryInfoType[] = [];

    constructor(initState: Partial<IndustryInfoType> = {}) {
        super();
        Object.assign(this, cloneDeep(initState));
    }
}

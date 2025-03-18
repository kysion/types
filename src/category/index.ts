import { cloneDeep } from "lodash";
import { BaseModel } from "../base";

export class CategoryType extends BaseModel<CategoryType> {
    // ID
    id: React.Key = 0;
    // 名称
    name: string = "";
    // 父级ID
    parentId: React.Key = 0;
    // 分类图片
    picturePath: string = "";
    // 是否隐藏
    hidden: number = 0;
    // 顺序
    sort: number = 0;
    // 关联主体ID（保留字段）
    unionMainId: React.Key = 0;

    constructor(initState: Partial<CategoryType> = {}) {
        super();
        Object.assign(this, cloneDeep(initState));
    }
}
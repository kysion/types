import { cloneDeep } from "lodash";
import { BaseModel } from "../base";
import { categoryStateSet, CategoryStateSet } from "./enum";

export * from './enum';

// 商品类别信息类型
export class CategoryType extends BaseModel<CategoryType> {
    // ID，ID值为0时则新增类别
    id: number = 0;
    // 类别名称
    name: string = "";
    // 类别描述
    description: string = "";
    // 父级ID
    parentId: number = 0;
    // 类别图片
    picturePath: string = "";
    // 排序
    sort: number = 0;
    // 类型：1商品，2文章
    type: number = 0;
    // 状态：0隐藏，1显示
    hidden: CategoryStateSet = categoryStateSet.Visible;
    // 关联主体ID（保留字段）
    unionMainId: number = 0;

    // 子级
    children: CategoryType[] = [];

    constructor(initState: Partial<CategoryType> = {}) {
        super();
        Object.assign(this, cloneDeep(initState));
    }
}
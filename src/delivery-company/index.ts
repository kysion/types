import cloneDeep from 'lodash/cloneDeep';
import { BaseModel } from '../base';

export class DeliveryCompanyType extends BaseModel<DeliveryCompanyType> {
    // ID，默认值为0，类型为React.Key
    id: React.Key = 0;
    // 物流公司，默认值为""
    name: string = "";
    // LOGO，默认值为""
    logo: string = "";
    // 网址，默认值为""
    site: string = "";
    // 物流跟踪编号，默认值为""
    expressNo: string = "";
    // 电子面单编号，默认值为""
    expressNoElectronicSheet: string = "";
    // 打印模板样式，默认值为""
    printStyleJson: string = "";
    // 业务类型，默认值为""
    expTypeJson: string = "";
    // 更新时间，默认值为""
    updatedAt: string = "";
    // 创建时间，默认值为""
    createdAt: string = "";

    constructor(initState: Partial<DeliveryCompanyType> = {}) {
        super();
        Object.assign(this, cloneDeep(initState));
    }
}
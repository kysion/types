import cloneDeep from 'lodash/cloneDeep';
import { BaseModel } from '../base';

export class CurrencyType extends BaseModel<CurrencyType> {
    // 国家编码，默认值为""
    code: string = "";
    // 国家英文名称，默认值为""
    enName: string = "";
    // 国家中文名称，默认值为""
    cnName: string = "";
    // 货币编码，默认值为""
    currencyCode: string = "";
    // 货币中文名称，默认值为""
    currencyCn: string = "";
    // 货币英文名称，默认值为""
    currencyEn: string = "";
    // 货币符号，默认值为""
    symbol: string = "";
    // 货币原生符号，默认值为""
    symbolNative: string = "";
    // 是否法定货币：1是，0否，默认值为0
    isLegalTender: number = 0;
    // 货币汇率，本币为人民币，默认值为0
    currencyRate: number = 0;

    constructor(initState: Partial<CurrencyType> = {}) {
        super();
        Object.assign(this, cloneDeep(initState));
    }
}
import type React from 'react';
import cloneDeep from 'lodash/cloneDeep';
import { BaseModel } from '../base';

export class SpecificationType extends BaseModel<SpecificationType> {
  // ID，默认值为0，类型为number
  id: number = 0;
  // 名称，默认值为""
  name: string = "";
  // 编码，默认值为""
  number: string = "";
  // 规格图片，空时默认使用商品主图，默认值为""
  previewImage: string = "";
  // 销售价，默认值为0
  price: number = 0;
  // 划线价，默认值为0
  marketPrice: number = 0;
  // 成本价，默认值为0
  costPrice: number = 0;
  // 库存，默认值为0
  stock: number = 0;
  // 重量(kg)，默认值为0
  weight: number = 0;
  // 体积(m³)，默认值为0
  volume: number = 0;
  // 是否默认，默认值为0
  idDefault: number = 0;
  // 创建时间，默认值为""
  createdAt: string = "";
  // 更新时间，默认值为""
  updatedAt: string = "";
  // 商品ID，默认值为0，类型为number
  goodsId: number = 0;

  constructor(initState: Partial<SpecificationType> = {}) {
    super();
    Object.assign(this, cloneDeep(initState));
  }
}

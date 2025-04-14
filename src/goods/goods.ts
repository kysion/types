import type { Dayjs } from 'dayjs';
import type React from 'react';
import cloneDeep from 'lodash/cloneDeep';
import { goodsAuditStateSet, GoodsAuditStateSet, goodsSaleStateSet, GoodsSaleStateSet } from './enum';
import { SpecificationType } from './specification';
import { BaseModel } from '../base';

export * from './enum'

export class GoodsInfoType extends BaseModel<GoodsInfoType> {
  // ID，默认值为0，类型为number
  id: number = 0;
  // 编号，默认值为""
  number: string = "";
  // 标题，默认值为""
  title: string = "";
  // 分类，默认值为[]
  categoryIds: string[] = [];
  // 所属主体，默认值为0，类型为number
  unionMainId: number = 0;
  // 所属主体类型，默认值为0
  unionMainType: number = 0;
  // 虚拟销量，默认值为0
  virtualSaleNum: number = 0;
  // 标签，默认值为[]
  tags: string[] | number[] = [];
  // 售价，默认值为0
  price: number = 0;
  // 成本价，默认值为0
  costPrice: number = 0;
  // 累计销量，默认值为0
  sumSellNum: number = 0;
  // 库存数量，默认值为0
  stockQuantity: number = 0;
  // 划线价，默认值为0
  marketPrice: number = 0;
  // 缩略图，默认值为""
  previewImage: string = "";
  // 商品描述，默认值为""
  richText: string = "";
  // 概述，默认值为""
  summary: string = "";
  // 状态：0草稿，1上架，2下架，默认值为0
  state: GoodsSaleStateSet = goodsSaleStateSet.Draft;
  // 平台服务费率，空时使用全局默认，默认值为0
  serviceRate: number = 0;
  // 产地，默认值为""
  placeOfOrigin: string = "";
  // 更新时间，默认值为""，类型为Dayjs | string | null
  updatedAt: Dayjs | string | null = "";
  // 更新者ID，默认值为0，类型为number
  updatedBy: number = 0;
  // 媒体资源，默认值为""
  mediaJson: string = "";
  // 创建时间，默认值为""，类型为Dayjs | string | null
  createdAt: Dayjs | string | null = "";
  // 创建者ID，默认值为0，类型为number
  createdBy: number = 0;
  // 删除时间，默认值为""，类型为Dayjs | string | null
  deletedAt: Dayjs | string | null = "";
  // 删除者ID，默认值为0，类型为number
  deletedBy: number = 0;
  // 审核状态：0草稿，1待审核，2通过，4不通过，默认值为0
  auditState: GoodsAuditStateSet = goodsAuditStateSet.Draft;
  // 商品审核不通过原因，默认值为""
  auditReply: string = "";
  // 排序
  sort: number = 0;
  // 商品默认单位
  unit: string = "";
  // 商品体积
  volume: number = 0;
  // 重量
  weight: number = 0;
  speArr: SpecificationType[] = [];

  constructor(initState: Partial<GoodsInfoType> = {}) {
    super();
    Object.assign(this, cloneDeep(initState));
  }
}

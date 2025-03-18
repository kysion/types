import { cloneDeep } from "lodash";

export enum LikeWhereSet {
  Prefix = 'prefix',
  Contains = 'contains',
  Suffix = 'suffix'
}

export const LikeWhereMap = {
  [LikeWhereSet.Prefix]: 'kysion.query.Like.PrefixContain',
  [LikeWhereSet.Contains]: 'kysion.query.Like.Contain',
  [LikeWhereSet.Suffix]: 'kysion.query.Like.SuffixContain'
};

export enum SortSet {
  None = 'none',
  Auto = 'auto',
  Asc = 'asc',
  Desc = 'desc'
}

export const SortMap = {
  [SortSet.None]: 'kysion.query.Sort.None',
  [SortSet.Auto]: 'kysion.query.Sort.Auto',
  [SortSet.Asc]: 'kysion.query.Sort.Asc',
  [SortSet.Desc]: 'kysion.query.Sort.Desc'
};

export enum WhereSet {
  Equal = '=',
  GreaterThan = '>',
  GreaterThanOrEqual = '>=',
  LessThan = '<',
  LessThanOrEqual = '<=',
  NotEqual = '<>',
  In = 'in',
  Like = 'like'
}

export const WhereMap = {
  [WhereSet.Equal]: 'kysion.query.Equal',
  [WhereSet.GreaterThan]: 'kysion.query.GreaterThan',
  [WhereSet.GreaterThanOrEqual]: 'kysion.query.GreaterThanOrEqual',
  [WhereSet.LessThan]: 'kysion.query.LessThan',
  [WhereSet.LessThanOrEqual]: 'kysion.query.LessThanOrEqual',
  [WhereSet.NotEqual]: 'kysion.query.NotEqual',
  [WhereSet.In]: 'kysion.query.In',
  [WhereSet.Like]: 'kysion.query.Like'
};

export type WhereType = WhereSet | '=' | 'in' | '>' | '>=' | '<' | '<=' | '<>' | 'in' | 'like';

// 实现了IFilter接口的Filter类，用于创建查询条件对象
export class Filter {
  field: string = '';
  where: WhereType = '=';
  isOrWhere?: boolean;
  value: any = null;
  isNullValue?: boolean;
  modifier?: 'is' | 'is not' | 'not';

  /**
   * 创建一个新的 Response 对象。
   *
   * @param initState - 可选的响应数据。
   */
  constructor(initState: Partial<Filter> = {}) {
    Object.assign(this, cloneDeep(initState));
  }
}

// 实现了IOrder接口的Order类，用于创建查询排序对象
export class Order {
  field: string = '';
  sort: 'asc' | 'desc' = 'asc';

  /**
   * 创建一个新的 Response 对象。
   *
   * @param initState - 可选的响应数据。
   */
  constructor(initState: Partial<Order> = {}) {
    Object.assign(this, cloneDeep(initState));
  }
}

// 实现了IQuery接口的Query类，用于创建查询对象
export class Query {
  pageNum: number = 1;
  pageSize: number = 10;
  filter: Filter[] = [];
  orderBy: Order[] = [];
  isExport?: boolean;
  include?: string[] = [];
  /**
   * 创建一个新的 Response 对象。
   *
   * @param initState - 可选的响应数据。
   */
  constructor(initState: Partial<Query> = {}) {
    Object.assign(this, cloneDeep(initState));
  }
}

export class Pagination {
  pageNum: number = 1;
  pageSize: number = 20;
  total: number = 0;
  pageTotal: number = 0;

  /**
   * 创建一个新的 Response 对象。
   *
   * @param initState - 可选的响应数据。
   */
  constructor(initState: Partial<Pagination> = {}) {
    Object.assign(this, cloneDeep(initState));
  }
}

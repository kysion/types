export class Records<T> {
  records: T[] = [];
  pageNum: number = 0;
  pageSize: number = 20;
  total: number = 0;
  pageTotal: number = 0;
}

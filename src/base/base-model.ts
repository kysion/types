import { cloneDeep } from 'lodash';

// 基础类型定义
export type IBaseType = object;
export type Key = string | number | bigint;

// 定义基础模型接口
export interface IBaseModel<T extends IBaseType> extends IBaseType {
  copyWith(data: Partial<T>): T;
  toJson(replacer?: (this: T, key: string, value: any) => any, space?: string | number): string;
  fromJson(jsonStr: string): T;
  toString(): string;
}

// 基础模型工厂函数
export const factory = <T>(initState: Partial<T> = {}) => {
  return cloneDeep(initState) as T;
};

// 基础模型抽象类
export abstract class BaseModel<T extends IBaseModel<T>> implements IBaseModel<T> {
  copyWith(data: Partial<T>): T {
    try {
      const newData = { ...this, ...data };
      const Constructor = this.constructor as new (data: Partial<T>) => T;
      return new Constructor(newData);
    } catch (error) {
      throw new Error(`Error during copyWith. Original error: ${(error as Error).message}`);
    }
  }

  toJson(replacer?: (this: T, key: string, value: any) => any, space?: string | number): string {
    return JSON.stringify(this, replacer, space);
  }

  fromJson(jsonStr: string): T {
    const Constructor = this.constructor as new (data: Partial<T>) => T;
    return new Constructor(JSON.parse(jsonStr));
  }

  toString(): string {
    return this.toJson();
  }
}

// 本地存储接口，继承自基础模型接口
export interface ILocalStorage<T extends IBaseModel<T>> extends IBaseModel<T> {
  clear(): void;
  save(): T;
  reload(): T;
  init(): void;
}

// 带有本地存储功能的基础模型类
export class BaseModelWithLocalStorage<T extends ILocalStorage<T>> extends BaseModel<T> implements ILocalStorage<T> {
  private readonly key: string;

  constructor(storeKey: string) {
    super();
    this.key = storeKey;
    this.init();
  }

  clear(): void {
    localStorage.removeItem(this.key);
  }

  save(): T {
    try {
      localStorage.setItem(this.key, this.toJson());
      return this as unknown as T;
    } catch (error) {
      console.error(`Error saving to local storage: ${(error as Error).message}`);
      return this as unknown as T;
    }
  }

  reload(): T {
    try {
      const savedData = localStorage.getItem(this.key);
      if (savedData) {
        Object.assign(this, this.fromJson(savedData));
      }
      return this as unknown as T;
    } catch (error) {
      console.error(`Error reloading from local storage: ${(error as Error).message}`);
      return this as unknown as T;
    }
  }

  init(): void {
    this.reload();
  }
}
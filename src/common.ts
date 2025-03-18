/**
 * 通用类型定义
 */

// 提取对象的值类型
export type ValueOf<T> = T[keyof T];

// 提取函数返回类型
export type ReturnTypeOf<T extends (...args: any) => any> = ReturnType<T>;

// 提取Promise的返回类型
export type PromiseType<T extends Promise<any>> = T extends Promise<infer U> ? U : never;

// 提取数组元素类型
export type ElementOf<T extends readonly any[]> = T extends readonly (infer E)[] ? E : never;

// 记录类型 - 所有属性可选
export type RecordOptional<K extends keyof any, T> = {
    [P in K]?: T;
};

// 记录类型 - 所有属性必需
export type RecordRequired<K extends keyof any, T> = {
    [P in K]: T;
};

// 移除属性中的null和undefined
export type NonNullableProperties<T> = {
    [P in keyof T]: NonNullable<T[P]>;
}; 
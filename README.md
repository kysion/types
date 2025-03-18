# @kysion/types

Kysion Admin系统的核心类型定义库，提供统一的API接口类型、数据模型基类和类型工具，为TypeScript项目带来类型安全和代码一致性。

[![npm version](https://img.shields.io/npm/v/@kysion/types.svg)](https://www.npmjs.com/package/@kysion/types)
[![npm downloads](https://img.shields.io/npm/dm/@kysion/types.svg)](https://www.npmjs.com/package/@kysion/types)
[![license](https://img.shields.io/npm/l/@kysion/types.svg)](https://github.com/kysion/kysion/blob/main/LICENSE)

## 特性亮点

- 🔄 **强大的模型系统** - BaseModel实现对象序列化与不可变更新
- 🧩 **丰富的业务类型** - 覆盖用户、权限、菜单等全方位业务模型
- 🔍 **查询参数标准化** - 统一的分页、排序、过滤参数定义
- 🛠️ **实用工具类型** - 提供常用TypeScript类型工具和助手
- 📦 **模块化组织** - 按业务领域清晰划分的类型定义

## 安装

```bash
# npm
npm install @kysion/types

# yarn
yarn add @kysion/types

# pnpm
pnpm add @kysion/types
```

## 快速开始

### 使用基础模型

```typescript
import { BaseModel } from '@kysion/types';

// 定义产品模型
class Product extends BaseModel<Product> {
  id: number = 0;
  name: string = '';
  price: number = 0;
  
  constructor(data: Partial<Product> = {}) {
    super();
    Object.assign(this, data);
  }
}

// 创建实例
const product = new Product({ name: '智能手机', price: 4999 });

// 序列化为JSON
const json = product.toJson();
console.log(json); // {"id":0,"name":"智能手机","price":4999}

// 不可变更新 (创建新实例而不修改原实例)
const discountedProduct = product.copyWith({ price: 3999 });
console.log(product.price);         // 4999 (原实例未变)
console.log(discountedProduct.price); // 3999 (新实例)
```

### 使用API响应类型

```typescript
import { KyResponse, PaginationResult, UserInfoType } from '@kysion/types';

// 定义API请求函数
async function fetchUsers(page: number, size: number): Promise<KyResponse<PaginationResult<UserInfoType>>> {
  const response = await fetch(`/api/users?page=${page}&size=${size}`);
  return response.json();
}

// 使用
const result = await fetchUsers(1, 10);
if (result.code === 0) {
  const { list, total } = result.data;
  console.log(`总用户数: ${total}`);
  console.log(`当前页用户:`, list);
}
```

### 使用查询参数

```typescript
import { PaginationParams, FilterParams, SortParams } from '@kysion/types';

// 构建查询参数
const queryParams: PaginationParams & FilterParams & SortParams = {
  pageNum: 1,
  pageSize: 20,
  filter: {
    status: 'active',
    createdAt: { $gt: '2023-01-01' }
  },
  orderBy: 'createdAt',
  orderDir: 'desc'
};

// 发送请求
const response = await fetch('/api/data?' + new URLSearchParams({
  ...queryParams,
  filter: JSON.stringify(queryParams.filter)
}));
```

## 核心类型

### BaseModel

BaseModel是所有模型的基类，提供了序列化和不可变更新功能：

```typescript
abstract class BaseModel<T extends IBaseModel<T>> implements IBaseModel<T> {
  // 浅拷贝创建新实例
  copyWith(data: Partial<T>): T;
  
  // 序列化为JSON字符串
  toJson(replacer?: (this: T, key: string, value: any) => any, space?: string | number): string;
  
  // 从JSON字符串创建实例
  fromJson(jsonStr: string): T;
  
  // 转换为字符串表示
  toString(): string;
}
```

#### 使用示例

```typescript
// 创建用户模型
class User extends BaseModel<User> {
  id: number = 0;
  name: string = '';
  email: string = '';
  roles: string[] = [];
  
  constructor(data: Partial<User> = {}) {
    super();
    Object.assign(this, data);
  }
  
  // 添加自定义业务方法
  hasRole(role: string): boolean {
    return this.roles.includes(role);
  }
}

// 创建实例
const user = new User({
  id: 1,
  name: '张三',
  email: 'zhangsan@example.com',
  roles: ['admin', 'editor']
});

// 序列化为JSON
const json = user.toJson(null, 2); // 格式化输出
console.log(json);

// 反序列化
const restored = new User().fromJson(json);
console.log(restored.hasRole('admin')); // true

// 创建更新后的副本
const updated = user.copyWith({
  name: '张三(已修改)',
  roles: [...user.roles, 'manager']
});
```

### 接口类型

#### IBaseModel

模型基础接口，定义了所有模型必须实现的方法：

```typescript
interface IBaseModel<T extends IBaseType> extends IBaseType {
  copyWith(data: Partial<T>): T;
  toJson(replacer?: (this: T, key: string, value: any) => any, space?: string | number): string;
  fromJson(jsonStr: string): T;
  toString(): string;
}
```

#### ILocalStorage

本地存储接口，用于与@kysion/utils的ModelWithStorage配合使用：

```typescript
interface ILocalStorage<T extends IBaseModel<T>> extends IBaseModel<T> {
  clear(): void;
  save(): T;
  reload(): T;
  init(): void;
}
```

> 📝 注意：此接口定义了本地存储操作，具体实现在@kysion/utils包的ModelWithStorage类中

### 响应类型

```typescript
// 标准API响应
class KyResponse<T = any> {
  data: T | null = null;
  code: number = 0;
  message: string = "";
  time: string = "";
}

// 分页结果
interface PaginationResult<T> {
  list: T[];
  total: number;
  pageNum: number;
  pageSize: number;
}
```

## 业务类型

@kysion/types提供了丰富的业务类型定义，详情请参阅[API文档](https://github.com/kysion/kysion/tree/main/packages/types#api-documentation)。

### 用户相关

- `UserInfoType` - 用户基本信息
- `UserDetailType` - 用户详细信息
- `UserStatusEnum` - 用户状态枚举

### 权限相关

- `PermissionType` - 权限类型
- `RoleType` - 角色类型
- `MenuItemType` - 菜单项类型

### 组织相关

- `CompanyType` - 公司信息
- `DepartmentType` - 部门信息
- `EmployeeType` - 员工信息

## 工具类型

提供常用的TypeScript类型工具：

```typescript
// 提取对象的值类型
type ValueOf<T> = T[keyof T];

// 提取Promise返回类型
type PromiseType<T extends Promise<any>> = T extends Promise<infer U> ? U : never;

// 提取数组元素类型
type ElementOf<T extends readonly any[]> = T extends readonly (infer E)[] ? E : never;

// 仅保留非空属性
type NonNullableProperties<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};
```

## 开发指南

```bash
# 安装依赖
npm install

# 类型检查
npm run type-check

# 构建库
npm run build

# 运行测试
npm test
```

## 许可证

[MIT](https://github.com/kysion/kysion/blob/main/LICENSE) 
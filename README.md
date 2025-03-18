# @kysion/types

通用类型定义包，包含多个项目共享的类型定义。

## 安装

```bash
npm install @kysion/types
# 或者
yarn add @kysion/types
```

## 使用

```typescript
// 导入所需类型
import { ApiResponse, PaginationParams, PaginationResult } from '@kysion/types';

// 使用示例
function fetchData(): Promise<ApiResponse<any>> {
  // ...
}

const params: PaginationParams = {
  pageNum: 1,
  pageSize: 10
};
```

## 包含的类型

- `ApiResponse<T>` - 通用API响应类型
- `PaginationParams` - 分页请求参数
- `PaginationResult<T>` - 分页响应结果
- `IdParams` - ID请求参数
- `StateParams` - 通用状态设置参数
- `TreeNode<T>` - 树形结构节点
- `Option` - 通用选项类型
- `UploadFileResult` - 通用上传文件响应
- `ErrorInfo` - 错误信息类型
- `SuccessResponse<T>` - 成功响应类型
- `ErrorResponse` - 失败响应类型
- `ResponseResult<T>` - 通用响应结果

## 开发

```bash
# 安装依赖
npm install

# 构建
npm run build

# 清理
npm run clean
```

## 许可证

MIT 
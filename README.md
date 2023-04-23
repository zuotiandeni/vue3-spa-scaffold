# 基础框架

## 说明

- 使用 vue3
- 使用 webpack 5
- 请求使用 axios。封装统一的语法糖。
- 加入框架示例
- nodejs >= v16.17.0

## 安装/启动

```bash
$ npm install
$ npm run dev
```

## 提交规范

### commit message 格式

```
<type>(<scope>): <subject>
```

### type(必须)

用于说明 git commit 的类别，只允许使用下面的标识。

- feat: 新功能（feature）。
- fix: 修复 bug。
- docs: 文档（documentation）。
- style: 格式（不影响代码运行的变动）。
- refactor: 重构（即不是新增功能，也不是修改 bug 的代码变动）。
- perf: 优化相关，比如提升性能、体验。
- test: 增加测试。
- chore: 构建过程或辅助工具的变动。
- revert: 回滚到上一个版本。
- merge: 代码合并。
- build: 打包。

### scope(可选)

scope 用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

例如在 Angular，可以是 location，browser，compile，compile，rootScope， ngHref，ngClick，ngView 等。如果你的修改影响了不止一个 scope，你可以使用\*代替。

### subject(必须)

subject 是 commit 目的的简短描述，不超过 50 个字符。

- 结尾不加句号或其他标点符号。
- 根据以上规范 git commit message 将是如下的格式:
  - fix(DAO): 用户查询缺少 username 属性
  - feat(Controller): 用户查询接口开发
  - feat: 添加用户列表

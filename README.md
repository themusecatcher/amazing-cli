# Amazing Cli

## 安装

```bash
# mac要加sudo
npm install -g amazing-cli
```

## or yarn

```bash
yarn global add amazing-cli
```

### 使用

创建模版

```bash
amazing-cli create <name> [-t|--template]
```

示例

```bash
amazing-cli create helloProject -t demoProject
```

### 不全局安装，借助npx

创建模版

```bash
npx amazing-cli create <name> [-t|--template]
```

示例

```bash
npx amazing-cli create helloProject -template demoProject
```

### 项目发布到npm

```bash
# 要求登录npm账号密码
npm publish
```

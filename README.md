# Amazing Cli

## 安装

```bash
# mac要加sudo
npm install -g amazing-cli
# or
yarn add amazing-cli -g
```

## 使用

### 创建模版

```bash
amazing-cli create <project-name> [-t|--template]
```

### 删除指定目录

```bash
amazing-cli delete <projectDir>
```

### 拉取远程项目到当前项目分支

```bash
amazing-cli pull
```

## 使用npx

### 创建模版

```bash
npx amazing-cli create <name> [-t|--template]
```

### 示例

```bash
npx amazing-cli create helloProject -template demoProject
```

# Amazing Cli

## Install

```bash
pnpm i -g amazing-cli
# or
npm install -g amazing-cli
# or
yarn add amazing-cli -g
```

## Use

### Create Template

```bash
amazing-cli create
# or
amazing-cli create <project-name> [-t|--template]
```

### Delete specified directory

```bash
amazing-cli delete <project-dir>
```

### Pull the remote project into the current project branch

```bash
amazing-cli pull
```

## Use npx

### Create Template

```bash
npx amazing-cli create
# or
npx amazing-cli create <name> [-t|--template]
```

### example

```bash
npx amazing-cli create vue-project -template template-project
```

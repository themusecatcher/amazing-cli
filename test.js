const { exec } = require('child_process');

// 执行 Git 命令的函数
function executeGitCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(stdout.trim());
    });
  });
}

// 示例：执行 'git remote get-url origin' 命令
executeGitCommand('git branch --list ee')
  .then(output => {
    // 获取git 地址
    // git@gitlab.jinhui365.cn:gjguo/testgit.git
    console.log(output);
  })
  .catch(error => {
    console.error(error);
  });

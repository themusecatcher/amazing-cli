const { exec } = require('child_process');
// 执行 Git 命令的函数
const executeGitCommand = (command) =>{
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

module.exports = {
    executeGitCommand
  }
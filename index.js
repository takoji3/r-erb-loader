var execSync = require('child_process').execSync;
var fs = require('fs');

const tmpPath = __dirname + '/tmp';

module.exports = function(content) {
  fs.writeFileSync(tmpPath, content);
  cmd = 'ruby ' + __dirname + '/expand.rb ' + tmpPath;
  return execSync(cmd).toString('UTF-8');
};

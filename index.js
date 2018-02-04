var Execi = require('./src/execi');

module.exports = {
  // Methods
  exec: require('./src/methods/exec'),
  echo: require('./src/methods/echo'),
  ls: require('./src/methods/ls'),
  cd: require('./src/methods/cd'),
  cat: require('./src/methods/cat'),
  pwd: require('./src/methods/pwd'),
  wget: require('./src/methods/wget'),
  mkdir: require('./src/methods/mkdir')
};

module.exports = new Execi();

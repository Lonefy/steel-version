
var verManager = require('./lib/verManager');
var semver = require('semver');
var chalk = require('chalk');

module.exports = function(v){

  var vers = verManager();

  if(v !== '*'){
    if(vers[v]) return vers[v];
    console.log(chalk.red("Can't find the version " + v + ", Use the lastest version!"));
  }

  return vers[findLastest(vers)];
};


function findLastest(versions){
  var t = '0.0.0';
  for(var v in versions){
    if(semver.lt(t, v)) t = v;
  }
  return t;
}
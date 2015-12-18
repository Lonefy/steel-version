/*
 * 
 */
var fs = require('fs');

module.exports = function(){
    
    var packageVersion = {}
      , files = fs.readdirSync(__dirname);

    for(var i=0,l=files.length; i<l; i++){
       
        var relaRoot = __dirname + "/" + files[i];
        var stats = fs.statSync(relaRoot);
    
        if(stats.isDirectory()){
            
            var temp = require(relaRoot + "/" + 'package.json');
            packageVersion[temp.version] = new VersionCell({
                json: temp,
                lib: relaRoot + "/" + 'steel.js',
                userfile: relaRoot + "/" + 'steelfile.js'
            })
        }         
    }

    return packageVersion;
}

function VersionCell(obj){
    this.json = obj.json;
    this.lib = obj.lib;
    this.userfile = obj.userfile;
    return this;
}
VersionCell.prototype.getJSON = function(){
    return this.json;
}
VersionCell.prototype.getLib = function(){
    return this.lib;
}
VersionCell.prototype.getFile = function(){
    return this.userfile;
}
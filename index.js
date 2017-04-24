var builter=require("./base/builter");
var sourcePath=require("path").resolve(__dirname,"./svg/");
var outputPath=require("path").resolve(__dirname,"./com/topolr/icon/base.js");
builter.outputFile(sourcePath,outputPath);
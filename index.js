var builter=require("./base/builter");
var iconmapping={
    weather:"./icons/weather",
    action:"./icons/action",
    editor:"./icons/editor",
    files:"./icons/files",
    loading:"./icons/loading",
    player:"./icons/player",
    tm:"./icons/tm"
};
console.log("Start Build");
for(var i in iconmapping){
    console.log("  Build:"+i);
    var name=i,path=require("path").resolve(__dirname,iconmapping[i]);
    var output=require("path").resolve(__dirname,"./com/topolr/icon/"+name+".js");
    builter.outputFile(name,path,output);
}
console.log("Build Done");
var topolr=require("topolr-util");
var parser=require("./parser");

var builter={
    getSymbolStr:function (path) {
        var path=path+"/";
        var svg=parser.create("svg",{
            style:"position: absolute; width: 0; height: 0; overflow: hidden;",
            version:"1.1",
            xmlns:"http://www.w3.org/2000/svg"
        });
        var defs=parser.create("defs",{});
        var paths=[];
        topolr.file(path).scan(function (path) {
            if(topolr.file(path).suffix()==="svg"){
                paths.push(path);
            }
        });
        for(var i=0;i<paths.length;i++){
            var nodearray=parser.parse(topolr.file(paths[i]).readSync());
            for(var t=0;t<nodearray.length;t++) {
                var title = nodearray[t].getChild(0).getChild(0).content;
                nodearray[t].setTagName("symbol").removeAttr(["version", "xmlns", "width", "height"]).setAttr({
                    id: "icon-" + title
                });
                defs.addChild(nodearray[t]);
            }
        }
        svg.addChild(defs);
        return svg.str();
    },
    outputFile:function (name,sourcepath,outputpath) {
        var str=builter.getSymbolStr(sourcepath);
        var content=topolr.file(require("path").resolve(__dirname,"./codetemp.tpl")).readSync();
        content=content.replace(/\#\#NAME\#\#/g,name).replace(/\#\#SVGCONTENT\#\#/g,JSON.stringify(str));
        return topolr.file(outputpath).write(content);
    }
};

module.exports=builter;
/**
 * @packet icon.iconpreviewer;
 * @template icon.template.temp;
 * @css icon.style.style;
 */
$.TopolrIconPreview=function(){
    var data={};
    $("svg").each(function(){
        if($(this).attr("packet")){
            var t=[];
            $(this).find("symbol").each(function(){
                var symbol=$(this);
                var id=symbol.attr("id");
                t.push({
                    id:id,
                    name:id
                });
            });
            data[$(this).attr("packet")]=r;
        }
    });
    var templatestr=module.getTemplate("@temp","previewer");
};
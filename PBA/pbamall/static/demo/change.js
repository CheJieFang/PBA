var path=require('path');
var fs = require('fs');
function changeJson(id){
	console.log(typeof(id))
	var url= path.join(__dirname,'./data/demo01.json');
    fs.readFile(url,function(err,data){
        if(err){
            console.error(err);
        }
        else{
        	var str = data.toString();
        	var obj = JSON.parse(str);
        	var data=obj.data;
        	console.log(typeof(data))
        for(var i = 0; i < data.length;i++){
       		var goods_id=Number(data[i].goods_id)
            if(id ==goods_id){
                console.log(data[i]);
                }
            }
        }
     })
}
changeJson(160)

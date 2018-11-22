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
//      	console.log(data[0].id]);
        	console.log(typeof(data))
//      	console.log(data)
        	//把数据读出来
        for(var i = 0; i < data.length;i++){
//     		console.log(Number(data[i].goods_id));
       		var goods_id=Number(data[i].goods_id)
            if(id ==goods_id){
            	//输出id对应的数据
            	var num=data[i].goods_num;
            	num++;
                data[i].goods_num=num;
                 console.log(data[i].goods_num);
               	console.log(data[i])
                }
            }
        }
     })
}
changeJson(160)//执行一下;

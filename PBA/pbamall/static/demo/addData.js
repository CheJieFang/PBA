var fs = require('fs');
var path = require('path');
var url= path.join(__dirname,'./data/carts.json');
var params = {
    
		"goods_id": "2",
		"goods_name": " 气垫BB",
		"simple_desc": "水润清透 打造空气感裸妆",
		"text_desc": "自然遮瑕，水润清透",
		"shop_price": "49.90",
		"spec": "15g\r",
		"advertising_photo": "http:\/\/appimg.pba.cn\/2016\/08\/25\/6d37783ec9981bfbe61ebf9588a3dba8.jpg",
		"outside_view": "http:\/\/appimg.pba.cn\/2016\/08\/25\/a2a780df3b71d4ceefe96dcdc496d10d.jpg",
		"list_picture": "http:\/\/appimg.pba.cn\/2016\/08\/25\/e58b1a407a00874791ec055ef6db0efb.jpg",
		"icon": "http:\/\/pbaimage.pba.cn\/pbaapp\/icon\/9.png",
		"iconstatus": "9",
		"goods_num": "10",
		"color_status": "20",
		"bn_goods_id": "2830",
		"arrival_time": ""
 }


function writeJson(params){
    fs.readFile(url,function(err,data){
        if(err){
            return console.error(err);
        }
        var str = data.toString();
        	var obj = JSON.parse(str);
        	var data=obj.data;
        		 data.unshift(params);//将传来的对象push进数组对象中
	        	obj.total = data.length;//定义一下总条数，为以后的分页打基础
		        console.log(data);
		        var str = JSON.stringify(obj);//因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
	        	fs.writeFile('./data/carts.json',str,function(err){
	            if(err){
	                console.error(err);
	            }
	        })
        	
	      
    })
}
writeJson(params)
var path=require('path');
var fs = require('fs');
//通过传回来的页数，进行分页模拟
function pagination(p,s){
	var url= path.join(__dirname,'./data/demo01.json');
//	console.log(url);
    //p为页数，比如第一页传0，第二页传1,s为每页多少条数据
    fs.readFile(url,function(err,data){
        if(err){
            console.error(err);
        }else{
        	var str = data.toString();
	        console.log(str);
	        console.log(typeof(str));
	        var person = JSON.parse(str); 
	//      var obj = JSON.parse(person);
//	        console.log(obj.data[0]);
//	        console.log(typeof(obj));
		 var length = person.data.length;
		 console.log(length)
		 //按页读数据
	      var pagePerson = person.data.slice(s*p,(p+1)*s);
	      console.log('查询成功pagePerson数据如下----------');
	      console.log(pagePerson);
        }
    })
}
pagination(0,4);//查询第一页，每页的数据条数为4条
<template>
	<div class="classification">
		<Header></Header>
			<div class="classifyContent">
				<div class="classifyAll">
					<h1>
						<img src="../../../../static/img/classification/caption-all.jpg"/>
					</h1>
					<div class="zhe">
						<router-link v-for="(item,index) in zhe" :key=index :to="item.router">
							<img :src="item.zheImg"/>
						</router-link>
					</div>
				</div>
				<div class="classifyCategory">
					<h1>
						<img src="../../../../static/img/classification/caption-category.jpg"/>
					</h1>
					<div class="jie">
						<router-link v-for="(item,index) in jie" :key=index :to="item.router" active-class="active">{{item.jieText}}</router-link>
						
					</div>
				</div>
				<div class="classifyEfficacy">
					<h1>
						<img src="../../../../static/img/classification/caption-effect.jpg"/>
					</h1>
					<div class="jie">
						<router-link v-for="(item,index) in bu" :key=index :to="item.router" active-class="active">{{item.buText}}</router-link>
					
					</div>
				</div>
			</div>
		<Tail></Tail>
	</div>
</template>

<script>
	//引入Header组件
	import Header from '../../commons/Header'
	//引入Tail组件
	import Tail from '../../commons/Tail'
	
	
	export default{
		name:"Classification",
		components:{Header,Tail},
		data(){
			return{
				name:'我是Classification',
				zhe:[
				{router:'/ClassifiList',zheImg:'../../../../static/img/classification/makeup.jpg'},
				{router:'',zheImg:'../../../../static/img/classification/skin.jpg'},
				{router:'',zheImg:'../../../../static/img/classification/mask.jpg'},
				{router:'',zheImg:'../../../../static/img/classification/perfume.jpg'},
				{router:'',zheImg:'../../../../static/img/classification/tools.jpg'},
				{router:'',zheImg:'../../../../static/img/classification/foods.jpg'},
				
				],
				jie:[
				{router:'/ClassifiList',jieText:'洁面'},
				{router:'',jieText:'BB霜'},
				{router:'',jieText:'底妆'},
				{router:'',jieText:'隔离'},
				{router:'',jieText:'面霜'},
				{router:'',jieText:'乳液'},
				{router:'',jieText:'面膜'},
				{router:'',jieText:'香水'},
				{router:'',jieText:'精华水'},
				{router:'',jieText:'眼妆'},
				{router:'',jieText:'唇妆'},
				{router:'',jieText:'卸妆'},
				{router:'',jieText:'粉饼'},
				
				],
				bu:[
				{router:'/ClassifiList',buText:'补水'},
				{router:'',buText:'保湿'},
				{router:'',buText:'祛痘'},
				{router:'',buText:'美白'},
				{router:'',buText:'控油'},
				{router:'',buText:'遮瑕'},
				{router:'',buText:'去黑眼圈'},
				{router:'',buText:'淡斑'},
				{router:'',buText:'去黑头'},
				
				]
				
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
@import url("../../../styles/main.less");
	.classification{
		.padding(0,0,80,0);
		.classifyContent{
			background:#fff;
			.classifyAll{
				h1{
					.h(65);
					.padding(10,10,0,10);
					img{
						.h(50);
					}
				}
				.zhe{
					.h(400);
					
					.padding(20,0,20,0);
					a{
						display:inline-block;
						margin-left:10px;
						margin-bottom:15px;
						box-shadow: 0px 3px 8px 1px #e2e2e2;
						.w(172);
						img{
							.w(172);
						}
					}
				}
				
			}
			.classifyCategory{
				h1{
					.h(65);
					.padding(10,10,0,10);
					img{
						.h(50);
					}
				}
				.jie{
					.padding(20,0,20,0);
					
					a{
						.fs(14);
						text-align:center;
						display:inline-block;
						.w(100);
						border: 1px solid #E5E5E5;
						border-radius: 27px;
						.padding(10,0,10,0);
						color: #535353;
						margin-left:18px;
						
						
						
					}
				}
			}
			.classifyEfficacy{
				h1{
					.h(65);
					.padding(10,10,0,10);
					img{
						.h(50);
					}
				}
				.jie{
					.padding(20,0,20,0);
					
					a{
						.fs(14);
						text-align:center;
						display:inline-block;
						.w(100);
						border: 1px solid #E5E5E5;
						border-radius: 27px;
						.padding(10,0,10,0);
						color: #535353;
						margin-left:18px;
						
					}
					
				}
			}
		}
	}
	
</style>
<template>
	
	<div class="ClassifiList">
		<Header></Header>
		<div class="classifiList">
			<ul>
				<li v-for="(item,index) in classifiList" :key=index>
					<div class="listImg fl">
						<router-link to="">
							<img :src="item.list_picture"/>
						</router-link>
						
					</div>
					<div class="listText fr">
						<p class="listName">{{item.goods_name}}</p>
						<p class="listTag">{{item.simple_desc}}</p>
						<p class="listprice">
							专享价：
							<span>￥：{{item.shop_price}}</span>
						</p>
						<router-link to="">
							<img src="../../../../../static/image/addCart.png"/>
						</router-link>
					</div>
				</li>
			</ul>
		</div>
		<Tail></Tail>
	</div>
	
</template>

<script>
	let rootpath = 'http://localhost:8081'
	//引入Header组件
	import Header from '../../../commons/Header'
	//引入Tail组件
	import Tail from '../../../commons/Tail'
	
	export default{
		name:"ClassifiList",
		components:{Header,Tail},
		data(){
			return{
				name:'我是ClassifiList',
				classifiList:[]
			}
		},
		methods:{
			//通过axios拿到数据
			getData(){
				this.$axios.post(rootpath + '/api/goodsList/getData')
				.then((res)=>{
					console.log(res.data)
					this.classifiList = res.data
					console.log(this.classifiList)
				})
				.catch((err)=>{
					console.log(err)
				})
			
			}
		},
		created(){
			this.getData();
		}
	}
	
</script>

<style lang="less" scoped="scoped">
	@import url("../../../../styles/main.less");
	
	.classifiList{
		ul{
			background:#fff;
			li{
				.padding(15,10,15,10);
				border-bottom: 1px solid #E9E9E9;
				overflow:hidden;
				.listImg{
					display:inline-block;
					a{
						display:inline-block;
						.w(106);
						.h(109);
						img{
							.w(106);
							.h(108);
						}
					}
				}
				.listText{
					.w(235);
					display: inline-block;
					.fs(14);
					position:relative;
					.listName{
						display: inline-block;
						.w(175);
						.fs(14);
						margin-bottom:5px;
					}
					.listTag{
						display: inline-block;
						.w(175);
						margin-bottom:5px;
						.fs(13);
						color: #969696;
					}
					.listprice{
						display: inline-block;
						.fs(13);
						color: #585858;
						span{
							color: #FD4688;
						}
					}
					a{
						display: inline-block;
						.w(30);
						position: absolute;
						right: 10px;
						bottom:-10px;
						img{
							.w(30);
						}
					}
				}
			}
		}
	}
</style>
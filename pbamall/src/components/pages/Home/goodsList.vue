<template>
	<div class="gList">
		<ul class="goodList">
			<li v-for="(item,index) in goodsList" :key='index'>
				<div class="goodLeft">
					<a href="">
						<img :src="item.list_picture"/>
					</a>
				</div>
				<div class="goodRight">
					<p class="goodName">{{item.goods_name}}</p>
					<p class="goodTag">{{item.simple_desc}}</p>
					<p class="goodPrice">专享价：<span class="price">￥{{item.shop_price}}</span></p>
					<a href=""><img src="../../../../static/image/addCart.png"/></a>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	let rootpath='http://localhost:8081'
	import Vue from 'vue'
	export default{
		name:'goodsList',
		data(){
			return {
				name:'goodsList',
				goodsList:[]
			}
		},
		methods:{
			getData(){
				this.$axios.post(rootpath+'/api/goodsList/getData')
				.then((res)=>{
					console.log(res.data);
					this.goodsList=res.data
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

<style lang="less" scoped>
@import '../../../styles/main.less';
.gList{
.goodList{
			background:#fff;
			.w(375);
			height: auto;
			margin-bottom:52px;
			li{
				position: relative;
				.w(375);
				.h(140);
				border-bottom: 1px solid #D0D0D0;
				.goodLeft{
					float: left;
					.w(106);
					.h(109);
					img{
						.w(106);
						.h(106);
					}
				}
				.goodRight{
					
					.fs(14);
					float: left;
					.w(230);
					.h(70);
					.padding(20,0,0,10);
					
					p{
						.margin-top(10);
					}
					.goodName{
						.h(19);
						color:#000;
						.fs(16);
					}
					.goodTag{
						.fs(12);
						color:#969696;
						/*x轴超出隐藏*/
						text-overflow: ellipsis
					}
					
					a{
						position: absolute;
						right: 30px;
						bottom: 30px;
						img{
							.w(35);
							.h(35);
						}
					}
				}
			}
			
		}
	}
</style>
<style type="text/css">
	.goodPrice{
		color:#585858;
	}
	.price{
		color:#ff498c;
		font-size: 13px;
		font-weight: bold;
							
	}
</style>
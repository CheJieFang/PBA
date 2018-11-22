<template>
	<div class="header">
		<div class="h_search">
			<!--<input type="text" name="" id="" value="" />-->
			<a href="#" class="fr">
				<img src="../../../static/img/search-input.png"/>
			</a>
			<input type="text" id="" value="" placeholder="搜索商品" />
		</div>
	</div>
</template>

<script>
	export default{
		name:'Header',
		components:{},
		data(){
			return{
				name:'我是Header'
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
@import url("../../styles/main.less");
.header{
	.h(60);
	.padding(10,10,10,10);
	border-bottom: 1px solid #E2E2E2;
	.h_search{
		.h(36);
		.padding(0,15,0,15);
		border-radius: 3px;
		background:#fff;
		input{
			vertical-align: top;
			.h(36);
			.w(293);
		}
		a{
			display: inline-block;
			.h(36);
			.w(32);
			position:relative;
			img{
				.w(20);
				.h(20);
				margin-top:4px;
				margin-right:5px;
				position: absolute;
				top:5px;
				right: 0;
			}
		}
		
	}
}
</style>
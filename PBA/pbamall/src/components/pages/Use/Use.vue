<template>
	<div class="Use">
		<Tail></Tail>
	</div>
</template>

<script>
	//引入Tail组件
	import Tail from '../../commons/Tail'
	
	export default{
		name:"ShoppingCart",
		components:{Tail},
		data(){
			return{
				name:'我是Use',
				
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	@import url("../../../styles/main.less");
	.Use{
		
	}
</style>
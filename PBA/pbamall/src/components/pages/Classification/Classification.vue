<template>
	<div class="classification">
		<Header></Header>
		{{name}}
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
				
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
@import url("../../../styles/main.less");
	.classification{
		
	}
</style>
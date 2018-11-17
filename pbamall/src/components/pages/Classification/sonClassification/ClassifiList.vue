<template>
	
	<div class="ClassifiList">
		<Header></Header>
		{{name}}
		<Tail></Tail>
	</div>
	
</template>

<script>
	//引入Header组件
	import Header from '../../../commons/Header'
	//引入Tail组件
	import Tail from '../../../commons/Tail'
	
	export default{
		name:"ClassifiList",
		components:{Header,Tail},
		data(){
			return{
				name:'我是ClassifiList'
			}
		}
	}
	
</script>

<style>
	@import url("../../../../styles/main.less");
	
</style>
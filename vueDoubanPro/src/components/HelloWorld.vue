<template>
	<div class="tabbarWrap">
		<Item txt='首页' mark='1' :sel='selected' @change='getVal'>
			<img src="../assets/img/img1.png" slot='normalImg'>
			<img src="../assets/img/img6.png" slot='activeImg'>
		</Item>
		<Item txt='分类' mark='2' :sel='selected' @change='getVal'>
			<img src="../assets/img/img2.png" slot='normalImg'>
			<img src="../assets/img/img7.png" slot='activeImg'>
		</Item>
		<Item txt='发现' mark='3' :sel='selected' @change='getVal'>
			<img src="../assets/img/img3.png" slot='normalImg'>
			<img src="../assets/img/img8.png" slot='activeImg'>
		</Item>
		<Item txt='购物车' mark='4' :sel='selected' @change='getVal'>
			<img src="../assets/img/img4.png" slot='normalImg'>
			<img src="../assets/img/img9.png" slot='activeImg'>
		</Item>
		<Item txt='我的考拉' mark='5' :sel='selected' @change='getVal'>
			<img src="../assets/img/img5.png" slot='normalImg'>
			<img src="../assets/img/img10.png" slot='activeImg'>
		</Item>
	</div>
</template>

<script type="text/javascript">
	// 要想在HelloWorld.vue中使用item.vue
	// 必须要在HelloWorld.vue中导入item.vue组件
	import Item from './item'

	// 要想使用item.vue，必须要在此设置
	export default {
		components:{
			Item
		},
		data: function() {
			return {
				selected: 1
			}
		},
		methods: {
			getVal: function(val) {
				// console.log('mark:'+val);
				this.selected = val;
			}
		}
	}
</script>

<style type="text/css">
	.tabbarWrap {
		width: 100%;
		height: 65px;
		position: fixed;
		left: 0;
		bottom: 0;
		border-top: 1px solid #ccc;
	}

</style>
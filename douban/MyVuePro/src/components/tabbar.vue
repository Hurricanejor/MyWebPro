<template>
	<div class="tabbar">
		<Item txt='首页' mark='home' :sel='selected' @change='getVal'>
			<img src="../assets/img/img1.png" slot='normalImg'>
			<img src="../assets/img/img6.png" slot='activeImg'>
		</Item>
		<Item txt='书影音' mark='audio' :sel='selected' @change='getVal'>
			<img src="../assets/img/img2.png" slot='normalImg'>
			<img src="../assets/img/img7.png" slot='activeImg'>
		</Item>
		<Item txt='广播' mark='broadcast' :sel='selected' @change='getVal'>
			<img src="../assets/img/img3.png" slot='normalImg'>
			<img src="../assets/img/img8.png" slot='activeImg'>
		</Item>
		<Item txt='小组' mark='group' :sel='selected' @change='getVal'>
			<img src="../assets/img/img4.png" slot='normalImg'>
			<img src="../assets/img/img9.png" slot='activeImg'>
		</Item>
		<Item txt='我的' mark='mine' :sel='selected' @change='getVal'>
			<img src="../assets/img/img5.png" slot='normalImg'>
			<img src="../assets/img/img10.png" slot='activeImg'>
		</Item>
	</div>
</template>

<script type="text/javascript">
	import Item from './item'

	export default {
		components: {
			Item
		},
		data:function(){
			return {
				selected: 'home'
			}
		},
		methods: {
			getVal: function(val){
				// console.log(val);
				this.selected = val;

			}
		}
	}
</script>

<style type="text/css">
	.tabbar {
		width: 100%;
		height: 64px;
		border-top: 1px solid #ccc;
		position: fixed;
		bottom: 0;
		left: 0;
	}
</style>
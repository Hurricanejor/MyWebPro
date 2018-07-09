<template>
	<div class="itemWrap" @click='fn'>
		<span v-show='bol'><slot name='normalImg'></slot><br/></span>
		<span v-show='!bol'><slot name='activeImg'></slot><br/></span>
		<span :class='{ active:!bol}'>{{ txt }}</span>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: ['txt','mark','sel'],
		// data: function(){
		// 	return {
		// 		bol: false
		// 	}
		// },
		// 计算属性，定义需要通过简单的逻辑判断后，才能最终确定值的变量
		computed: {
			bol: function(){
				if (this.mark == this.sel) {
					return false;
				}
				return true;
			}
		},
		methods: {
			fn: function() {
				console.log('mark:'+this.mark);
				console.log('sel:'+this.sel);
				console.log(this.bol);
				// if (this.mark == this.sel) {
				// 	this.bol = false;
				// }
				// this.bol = true;

				// 将当前被点击的item的mark值，传递给父级，再赋值给selected

				// change自定义事件
				this.$emit('change',this.mark);
			}
		}
	}

	// 给每个item添加一个mark作为唯一标识
	// 声明一个变量selected来记录被选中的item中的mark
	// 1 2 3 4 5 selected:3
</script>

<style type="text/css">
	.itemWrap {
		width: 20%;
		float: left;
		text-align: center;
	}
	.itemWrap img {
		margin-top: 5px;
		width: 35px;
	}
	.itemWrap span {
		font-size: 12px;
		color: #999;
	}
	.itemWrap .active {
		color: #DD3A25;
	}
</style>
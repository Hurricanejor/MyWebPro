<template>
	<div class="itemWrap" @click='fn'>
		<span v-show='bol'><slot name='normalImg'></slot><br /></span>
		<span v-show='!bol'><slot name='activeImg'></slot><br /></span>
		<span :class='{active:!bol}'>{{ txt }}</span>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: ['txt','mark','sel'],
		// data: function() {
		// 	return {
		// 		bol: true
		// 	}
		// }
		computed: {
			bol: function(){
				if (this.mark == this.sel) {
					return false;
				}
				return true;
			}
		},
		// beforeCreate: function(){
		// 	this.$router.push('/home');
		// },
		methods: {
			fn:function(){
				this.$emit('change',this.mark);
				// 路由页面跳转
				this.$router.push('/'+this.mark);
			}
		}
	}
</script>

<style type="text/css">
	.itemWrap {
		width: 20%;
		float: left;
		text-align: center;
		font-size: 0;
	}
	.itemWrap img {
		width: 35px;
		margin-top: 5px;
	}
	.itemWrap span {
		font-size: 14px;
		color: #666;
	}
	.itemWrap .active {
		color: #42BD56;
	}
</style>
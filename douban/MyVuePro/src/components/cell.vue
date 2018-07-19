<template>
	<div class="cell_wrap" v-bind:class="{ hot:bol }">
		<div>
			<span><slot name='icon'></slot></span>{{ title }}
		</div>
		<div>
			<slot name='cell_right'></slot>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: {
			title: {
				type: String,
				default: ''
			},
			bol: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style type="text/css">
	.cell_wrap {
		height: 40px;
		position: relative;
		border-bottom: 1px solid #DCDCDC;
		line-height: 40px;
		padding-left: 15px;
		text-align: left;
	}
	.cell_img {
		width: 25px;
		position: relative;
		top: 6px;
		right: 8px;
	}
	.cell_right_img {
		width: 25px;
		position: absolute;
		top: 6px;
		right: 8px;
	}
	.hot {
		border-bottom: none;
	}
	.hot:after {
		content: '';
		width: 5px;
		height: 20px;
		background: orange;
		position: absolute;
		top: 8px;
		left: 0;
	}
</style>
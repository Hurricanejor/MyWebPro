<template>
	<div class="listWrap">
		<div class="left">
			<h4><slot name="title"></slot></h4>
			<p><slot name="desc"></slot></p>
			<div class="sep"></div>
			<!-- <p>作者：<slot name="author"></slot></p> -->
			<p class="author">作者：{{ author }}</p>
		</div>
		<img :src="url">
		<!-- <slot name="list_img"></slot> -->
	</div>
</template>

<script type="text/javascript">
	export default {
		props: ['author','url']
	}
</script>

<style type="text/css">
	.listWrap {
		padding: 20px;
		text-align: left;
		/*height: 150px;*/
		overflow: hidden;
		border-bottom: 1px solid #ccc;
	}
	.listWrap img {
		width: 93px;
		height: 93px;
		float: right;
	}
	.listWrap .left {
		width: 65%;
		float: left;
	}
	.listWrap p {
		margin: 10px 0;
		color: #999;
		font-size: 14px;
	}
	.listWrap .author {
		color: #ccc;
		font-size: 12px;
	}
	.listWrap .sep {
		width: 20px;
		height: 1px;
		background-color: #eee;
	}
	.listWrap:last-child {
		margin-bottom: 64px;
	}
</style>
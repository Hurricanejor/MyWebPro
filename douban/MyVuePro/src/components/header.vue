<template>
	<div :class="{ headerWrap:true,green:bol }">
		<span>{{ txt }}</span>
		<slot name='left'></slot>
		<slot name='rigth'></slot>
		<slot name='search'></slot>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: ['txt','bol']
	}
</script>

<style type="text/css">
	.headerWrap {
		width: 100%;
		height: 44px;
		border-bottom: 1px solid #ccc;
		background-color: #f7f7f7;
		text-align: center;
		line-height: 44px;
		position: relative;
	}
	.green {
		background-color: #48bd5a;
	}
	.headerWrap img {
		width: 25px;
		position: absolute;
	}
	.headerWrap .rightImg {
		top: 10px;
		right: 10px;
	}
	.headerWrap .leftImg {
		top: 10px;
		right: 50px;
	}

	.headerWrap .search input {
		width: 85%;
		height: 30px;
		position: absolute;
		left: 5px;
		top: 7px;
		border-radius: 5px;
		border: none;
		text-indent: 2.5em;
		outline: none;
	}
	.headerWrap .search img {
		position: absolute;
		width: 20px;
	}
	.headerWrap .search .searchImg {
		left: 10px;
		top: 12px;
	}
	.headerWrap .search .scanImg {
		right: 60px;
		top: 12px;
	}
</style>
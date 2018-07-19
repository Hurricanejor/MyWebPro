<template>
	<div>
		<Myheader txt='书影音'>
			<img src="../../assets/img/img2.png" class="leftImg" slot='left' />
			<img src="../../assets/img/img1.png" class="rightImg" slot='rigth' />
		</Myheader>
		<div class="nav">
			<router-link to="/audio/movie">电影</router-link>
			<router-link to="/audio/tv">电视</router-link>
			<router-link to="/audio/read">读书</router-link>
			<router-link to="/audio/city">同城</router-link>
			<router-link to="/audio/music">音乐</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
	import Myheader from '../../components/header'

	export default {
		components: {
			Myheader
		}
	}
</script>

<style type="text/css">
	.nav {
		height: 30px;
		border-bottom: 1px solid #eee;
		line-height: 30px;
	}
	a {
		display: block;
		width: 20%;
		float: left;
		color: #999;
		font-size: 14px;
		text-decoration: none;
	}
</style>
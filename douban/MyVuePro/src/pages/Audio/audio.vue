<template>
	<div>
		<Myheader txt='书影音'>
			<img src="../../assets/img/ic_group_search.png" class="leftImg" slot='left' />
			<img src="../../assets/img/ic_chat_green.png" class="rightImg" slot='rigth' />
		</Myheader>
		<div class="nav">
			<span @click="nav_index=1">
				<router-link to="/audio/movie1" :class="{nav_active:nav_index==1}">电影</router-link>
			</span>
			<span @click="nav_index=2">
				<router-link to="/audio/tv" :class="{nav_active:nav_index==2}">电视</router-link>
			</span>
			<span @click="nav_index=3">
				<router-link to="/audio/read" :class="{nav_active:nav_index==3}">读书</router-link>
			</span>
			<span @click="nav_index=4">
				<router-link to="/audio/city" :class="{nav_active:nav_index==4}">同城</router-link>
			</span>
			<span @click="nav_index=5">
				<router-link to="/audio/music" :class="{nav_active:nav_index==5}">音乐</router-link>
			</span>
			
		</div>
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
	import Myheader from '../../components/header'

	export default {
		components: {
			Myheader
		},
		data: function(){
			return {
				nav_index: 1
			}
		},
		methods: {
			fn: function(){	
				console.log(1);
				// this.nav_index = 
				console.log(this.nav_index);
			}
		}
	}
</script>

<style type="text/css">
	.nav {
		height: 30px;
		padding-bottom: 3px;
		border-bottom: 1px solid #eee;
		line-height: 30px;
	}
	.nav span {
		display: inline-block;
		width: 20%;
		line-height: 30px;
		float: left;
		font-size: 14px;
	}
	a {
		display: inline-block;
		text-decoration: none;
		color: #999;
	}
	.nav .nav_active {
		color: #42BD56;
		border-bottom: 2px solid #42BD56;
	}
</style>
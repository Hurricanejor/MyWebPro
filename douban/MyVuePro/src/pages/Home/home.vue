<template>
	<div>
		<Myheader bol='true'>
			<img src="../../assets/img/ic_chat_white.png" class="rightImg" slot='rigth' />
			<div slot='search' class="search">
				<input type="text" placeholder="影视 图片 唱片 小组等" />
				<img src="../../assets/img/icon_search.png" class="searchImg" />
				<img src="../../assets/img/ic_scan_gray.png" class="scanImg" />
			</div>
		</Myheader>
		<Banner swiperid='go'>
			<div slot='swiper-con' class="swiper-slide">
				<img src="../../assets/img/banner/banner1.png" />
			</div>
			<div slot='swiper-con' class="swiper-slide">
				<img src="../../assets/img/banner/banner2.png" />
			</div>
			<div slot='swiper-con' class="swiper-slide">
				<img src="../../assets/img/banner/banner3.png" />
			</div>
		</Banner>
		<Cell title='热点' :bol='true'></Cell>
		<List v-for="item in arr" :author='item.target.author.name' :url='item.target.cover_url'>
			<h4 slot="title">{{ item.title }}</h4>
			<p slot="desc">{{ item.target.desc }}</p>
			<!-- <span slot="author">{{ item.target.author.name }}</span> -->
		</List>
	</div>
</template>

<script type="text/javascript">
	import Myheader from '../../components/header'
	import Banner from '../../components/banner'
	import Cell from '../../components/cell'	
	import List from '../../components/news_list'

	export default {
		data: function(){
			return {
				arr:[]
			}
		},
		created: function(){
			this.fn();
		},
		components: {
			Myheader,
			Banner,
			Cell,
			List
		},
		methods: {
			fn(){
				this.axios.get('/api/homeData').then((response)=>{
					this.arr = response.data.data.recommend_feeds;
		        	console.log(this.arr);
				});


			}
		}
	}
</script>